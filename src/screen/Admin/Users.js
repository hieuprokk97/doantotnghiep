import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import UserCard from '../../common/UserCard'
import styles from '../../theme/screen/Admin/styleUser'
import firestore from '@react-native-firebase/firestore'
const Users = () => {
  const [userTypeGoogle, setUserTypeGoogle] = useState([])
  const [userNonType, setUserNonType] = useState([])
  useEffect(() => {
    getUserGoogle(), getUserNonType()
  }, [])
  const getUserGoogle = () => {
    firestore()
      .collection('users')
      .where("type", '==', 'Google')
      .get()
      .then(querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
        setUserTypeGoogle(tempData);
      });
  }
  const getUserNonType = () => {
    firestore()
      .collection('users')
      .where("type", '!=', 'Google')
      .get()
      .then(querySnapshot => {
        let tempData = [];
        querySnapshot.forEach(documentSnapshot => {
          tempData.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
        setUserNonType(tempData);
      });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google</Text>
      <FlatList data={userTypeGoogle} renderItem={({item, index}) => {
        return (
          <UserCard
            name={"displayName: " + item.data.name}
            email={"Email: " + item.data.email}
            type={"Type: " + item.data.type}/>
        ) 
      }}/>
      <Text style={styles.title}>Non Type</Text>
      <FlatList data={userNonType} renderItem={({item, index}) => {
        return (
          <UserCard
            name={"displayName: " + item.data.name} 
            email={"Email: " + item.data.email} 
            type={"Type: " + item.data.type}/>
        ) 
      }}/>
    </View>
  )
}

export default Users