import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from '../theme/screen/styleOrderSuccess'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import auth, { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import { emptyOrder, orderItems } from '../redux/slices/OrderSlice'
import { counterEvent } from 'react-native/Libraries/Performance/Systrace'
import { emptyCart } from '../redux/slices/CartSlice'

const OrderSuccess = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()
  const orderList = useSelector(state => state.order)
  const [userId, setUserId] = useState("")
  const [countOrder, setCountOrder] = useState(0)
  const [addCount, setAddCount] = useState(1)
  const user = firebase.auth().currentUser;
  useEffect(() => { }, [])
  firestore()
    .collection("orders")
    .get()
    .then(snapShot => {
      console.log(snapShot.size)
    })
  return (
    <View style={styles.container}>
      <FlatList data={orderList.data} renderItem={({ item, index }) => {
        return (
          <View>
            <FlatList data={item.cartItems} renderItem={({ item, index }) => {
              firestore()
              .collection('orders')
              .doc()
              .set({
                imageUrl: item.imageUrl,
                user_id: user.uid,
                name: item.name,
                price: item.price,
                category: item.category,
                description: item.description,
                qty: item.qty
              })
              .then(() => {
                Alert.alert(
                  'Success',
                  'You are Registered Successfully',
                  [
                    {
                      text: 'Ok',
                      onPress:
                        () => {navigation.navigate('HomeScreen'), dispatch(emptyCart([]))},
                    },
                  ],
                  { cancelable: false },
                );
              })
              .catch((error) => {
                Alert.alert(
                  'Exception',
                  error,
                  [
                    {
                      text: 'Ok',
                      onPress:
                        () => navigation.navigate('HomeScreen'),
                    },
                  ],
                  { cancelable: false },
                );
              });
            }} />
          </View>
        )
      }} />
      <Image source={require("../../assets/images/checked.png")} style={styles.image} />
      <Text>Order Placed Successfully...</Text>
      <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("HomeScreen") }}>
        <Text>
          Back To Home
        </Text>
      </TouchableOpacity>
    </View>

  )
}

export default OrderSuccess