import { View, Text, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector, } from 'react-redux'
import styles from '../theme/screen/styleOrders'
import auth, { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { useIsFocused } from '@react-navigation/native'
const Orders = () => {
    // const orderList = useSelector(state => state.order);
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const idFocused = useIsFocused();
    const user = firebase.auth().currentUser;
    useEffect(() => {
        getOrders()
    }, [])
    const getOrders = () => {
        firestore()
            .collection('orders')
            .get()
            .then(querySnapshot => {
                let tempData = [];
                querySnapshot.forEach(documentSnapshot => {
                    if (documentSnapshot._data.user_id != "") {
                        tempData.push({
                            id: documentSnapshot.id,
                            data: documentSnapshot.data(),
                        });
                    }
                    setItems(tempData);
                });
            });
    }

    return (
        <View style={styles.orderItem}>
            <FlatList data={items} renderItem={({ item, index }) => {
                console.log(item.data)
                return (
                    <View style={styles.productItem}>
                    <Image
                      source={{uri: item.data.imageUrl}}
                      style={styles.itemImage}
                    />
                    <View style={styles.nameView}>
                      <Text style={{color: 'red'}}>
                        {item.data.name}
                      </Text>
                      <Text style={{color: 'green'}}>
                        {item.data.description}
                      </Text>
                      <Text style={{color: 'green'}}>
                        {'$' + item.data.price}
                      </Text>
                    </View>
                  </View>
                )
            }} />
        </View>
    )
}

export default Orders
