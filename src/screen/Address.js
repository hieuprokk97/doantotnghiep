import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddressCard } from '../common/AddressCard'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navigation from '../navigation/Navigation'
import Items from './Admin/Items'
import { deleteAddress } from '../redux/slices/AddressSlice'

const Address = () => {
  const addressList = useSelector(state => state.address)
  console.log(addressList)
  const navigation = useNavigation()
  const idFocused = useIsFocused()
  const dispatch = useDispatch()
  const defaultAddress = async item => {
    await AsyncStorage.setItem(
      "MY_ADDRESS", 
      '' + 
        item.sonha + 
        " " +
        item.duong + 
        " " +
        item.phuong + 
        " " + 
        item.quan + 
        " " +
        item.thanhpho);
    navigation.goBack()
  }
  const isFocused = useIsFocused()
  useEffect(()=>{
    console.log(addressList)
  }, [isFocused])
  return (
    <View >
      <FlatList data={addressList.data} renderItem={({item, index}) => {
        return (
            <AddressCard onPress={() => {defaultAddress(item)}}
                      title={item.checked}
                      address={item.sonha + " " + 
                                item.duong + ", Phường " + 
                                item.phuong + ", QUận " + 
                                item.quan + ", Thành Phố " + 
                                item.thanhpho}
                      phone={item.sdt}
                      onPressDelete={() => {dispatch(deleteAddress(item.id))}}
                      onPressEdit={() => {navigation.navigate("EditAddress", {data: item})}}/>
          
        )
        
      }}/>
    </View>
  )
}

export default Address