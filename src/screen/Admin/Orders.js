import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import styles from '../../theme/screen/Admin/styleItems'
import firestore from '@react-native-firebase/firestore'
import OrderCard from '../../common/OrderCard'
const Orders = () => {
  const [items, setItems] = useState([])
  const idFocused = useIsFocused();
  const [userEmail, setUserEmail] = useState("")
  useEffect(() => {
    getOrders()
  }, [idFocused])
  const getOrders = () => {
    firestore()
      .collection('orders')
      .get()
      .then(querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          if (documentSnapshot.docs !== "") {
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
    <View style={styles.container}>
      <FlatList data={items} renderItem={({ item, index }) => {
        return (
          <View>
            <Text style={{color: 'black'}}>{userEmail}</Text>
            <OrderCard source={{ uri: item.data.imageUrl }}
              name={item.data.name}
              description={item.data.description}
              price={"$" + item.data.price}
              userId={item.data.user_id}
              qty={item.data.qty}/>
          </View>

        )
      }}
      />

    </View>
  )
}

export default Orders