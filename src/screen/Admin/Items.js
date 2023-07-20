import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import ItemCard from '../../common/ItemCard'
import styles from '../../theme/screen/Admin/styleItems'
import { useIsFocused, useNavigation } from '@react-navigation/native'
const Items = () => {
  const navigation = useNavigation()
  const [items, setItems] = useState([])
  const idFocused = useIsFocused();
  useEffect(() => {
    getItems()
  }, [idFocused])
  const getItems = () => {
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
        setItems(tempData);
      });
  }
  const deleteItem = docId => {
    firestore()
      .collection('items')
      .doc(docId)
      .delete()
      .then(() => {
        console.log("Item deleted!")
        getItems()
      })
  }
  return (
    <View style={styles.container}>
      <FlatList data={items} renderItem={({ item, index }) => {
        return (
          <ItemCard 
            source={{ uri: item.data.imageUrl }} 
            name={item.data.name} 
            price={item.data.price} 
            description={item.data.description}
            onPressDelete={() => {deleteItem(item.id)}} 
            onPressEdit={() => {
              navigation.navigate('EditItemScreen', {
                data:item.data,
                id: item.id
              })
            }}/>
        )
      }} />
    </View>
  )
}

export default Items