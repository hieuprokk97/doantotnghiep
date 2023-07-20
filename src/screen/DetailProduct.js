import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import SwiperComponent from '../common/SwiperComponent'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import BottomSheet from 'reanimated-bottom-sheet';

import styles from '../theme/screen/styleDetail'
import { useDispatch, useSelector } from "react-redux";
import { addItemToFavoriteList } from "../redux/slices/FavoriteListSlice";
import { addItemToCart } from '../redux/slices/CartSlice';
import { useNavigation, useRoute,  } from "@react-navigation/native";
import AskForLoginModal from '../common/AskForLogin';
import auth from '@react-native-firebase/auth'


export default function DetailProduct () {
    const navigation = useNavigation();
    const route = useRoute();
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch(); 
    const [modalVisible, setModalVisible] = useState(false);
    const userLogged = useSelector(state => state.users)
    console.log(quantity)
    return(
      <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
        <View style={{backgroundColor: "#FFF", width: '100%', padding: 20,
                               justifyContent: 'space-between'}}>
          <View>
            <View style={styles.imageSection}>
                <View style={{marginTop: 150}}>
                </View>
                <SwiperComponent source={{uri: route.params.data.imageUrl}}/>
            </View>
            <View style={styles.favorite}>
              <TouchableOpacity onPress={() => {
                if (userLogged != null){
                  dispatch(addItemToFavoriteList(route.params.data));
                }
                else{ 
                  setModalVisible(true)
                }
              }}>
                <MaterialIcons name="favorite-border" size={25} color={'#000'}/>
              </TouchableOpacity>
            </View>
            <View style={styles.titleSection}>
              <View>
                <Text style={{fontWeight: 'bold', color: '#000'}}>{route.params.data.name}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.price}>${route.params.data.price}</Text>
              <Text style={styles.description}>
                  {route.params.data.description}
              </Text>
            </View>
          </View>
          <View style={styles.action}>
            <TouchableOpacity onPress={() => {if (qty > 1){setQuantity(quantity-1)}}}>
                <Text style={styles.caption}>-</Text>
            </TouchableOpacity>
            <Text style={styles.caption}>{quantity}</Text>
            <TouchableOpacity onPress={() => {setQuantity(quantity+1)}}>
                <Text style={styles.caption}>+</Text>
            </TouchableOpacity>
            <View/>
            <View/>
          </View>
        
        
          <TouchableOpacity style={styles.btnStyle} onPress={() => {
            if (userLogged != null) {
              dispatch(addItemToCart(
                { name: route.params.data.name,
                  category: route.params.data.category, 
                  description: route.params.data.description, 
                  id: route.params.data.id, 
                  imageUrl: route.params.data.imageUrl, 
                  price: route.params.data.price, 
                  qty: quantity,}
              ));
            }else{ 
              setModalVisible(true)
            }
          }}>
            <Image source={require("../../assets/images/shopping-bag-outline.png")}
                  style={{width: 16, height: 20}}/>
            <Text style={styles.btnText}> 
                Add to Cart
            </Text>
          </TouchableOpacity>
          
          
        </View>
    </View>
    )
  }
