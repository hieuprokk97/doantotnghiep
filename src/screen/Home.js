import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../theme/screen/styleHome'
import ProductCard from '../common/ProductCard'
import { useNavigation, useRoute } from '@react-navigation/native'
import { addProducts } from '../redux/slices/ProductSlice'
import { addItemToCart } from '../redux/slices/CartSlice'
import AskForLoginModal from '../common/AskForLogin';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
export default function Home() {
    //#region Const
    const navigation = useNavigation();
    const [productlimits, setProductlimits] = useState([]);
    const [productAll, setproductAll] = useState([]);
    const dispatch = useDispatch();
    const user = firebase.auth().currentUser;
    
    
    useEffect(() => { getProductsPriceUnder200(), getAllProducts(), getUser() }, []);
    const getAllProducts = () => {
        firestore()
            .collection('items')
            .get()
            .then(querySnapshot => {
                let tempData = [];
                querySnapshot.forEach(documentSnapshot => {
                    tempData.push({
                        id: documentSnapshot.id,
                        data: documentSnapshot.data(),
                    });
                });
                setproductAll(tempData);
                dispatch(addProducts(tempData))
            });
    }
    const getProductsPriceUnder200 = () => {
        firestore()
            .collection('items')
            .where('price', '<=', 200)
            .get()
            .then(querySnapshot => {
                let tempData = [];
                querySnapshot.forEach(documentSnapshot => {
                    tempData.push({
                        id: documentSnapshot.id,
                        data: documentSnapshot.data(),
                    });
                });
                setProductlimits(tempData);
            });
    }
    const getUser =()=>{
        firestore()
        .collection("users")
        .where('email', '==', user.email)
        .get()
        .then(snapShot => {
            if (snapShot.docs[0] == null) {
                firestore()
                    .collection('users')
                    .add({
                        email: user.email,
                        name: user.displayName,
                        type: "Google",
                        id: user.uid
                       
                    })
                    .then(console.log("User Added"))
                    .catch(error => console.log(error))
            }
        })
    //#endregion
    }

    
    const addItemToCartList = item => {
        dispatch(addItemToCart({
            name: item.data.name,
            category: item.data.category,
            description: item.data.description,
            id: item.data.id,
            imageUrl: item.data.imageUrl,
            price: item.data.price,
            qty: 1
        }))
    }

    return (
        <View>
            <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false} style={{ backgroundColor: "#FFF", paddingHorizontal: 20 }}>
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: 'center',
                    marginTop: 20,
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: "#4f4a4a"
                    }}>All Products</Text>
                    <View style={styles.dotNew}></View>
                    <Text style={{ color: 'red' }}>New</Text>
                </View>
                <View>
                    <FlatList horizontal data={productAll} renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity activeOpacity={1}>
                                <ProductCard source={{ uri: item.data.imageUrl }}
                                    name={item.data.name.length > 15
                                        ? item.data.name.substring(0, 15) + '...'
                                        : item.data.name}
                                    price={item.data.price}
                                    description={item.data.description}
                                    onPress={() => { navigation.navigate('Detail', { data: item.data, id: item.id }) }}
                                    onPressAdd={() => { addItemToCartList(item) }} />
                            </TouchableOpacity>
                        )
                    }} />
                </View>
                <View style={{
                    flexDirection: "row",
                    width: "100%",
                    alignItems: 'center',
                    marginTop: 10
                }}>
                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: "#4f4a4a"
                    }}>Product Price Under 200$</Text>
                    <View style={styles.dotNew}></View>
                    <Text style={{ color: 'red' }}>New</Text>
                </View>
                <View>
                    <FlatList horizontal data={productlimits} renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity activeOpacity={1}>
                                <ProductCard source={{ uri: item.data.imageUrl }}
                                    name={item.data.name.length > 15
                                        ? item.data.name.substring(0, 15) + '...'
                                        : item.data.name}
                                    price={item.data.price}
                                    description={item.data.description}
                                    onPress={() => { navigation.navigate('Detail', { data: item.data, id: item.id }) }}
                                    onPressAdd={() => { addItemToCartList(item) }} />
                            </TouchableOpacity>
                        )
                    }} />
                </View>
            </ScrollView>
        </View>

    )
}