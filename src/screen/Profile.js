import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import styleProfile from '../theme/screen/styleProfile';
import React, {useState, useEffect} from 'react'
import { Header } from 'react-native-elements';
import { TouchableRipple, Title, Caption } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import auth, { firebase } from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import { deleteUser } from 'firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { userState, emptyState } from '../redux/slices/UserSlice';
const ProfileScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = firebase.auth().currentUser;
  const signOut = () => {
    try{
      if (user.displayName !== null){
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
        auth().signOut()
      }else{ 
        auth().signOut()
      }
    }
    catch (error){() => {console.log(error)}}
  }
  console.log(user.uid)
  return (
    <SafeAreaView style={styleProfile.container}>
        <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom:29}}>
            <View style={styleProfile.profileInfos}>
                <View style={styleProfile.image}/>
                <View style={styleProfile.nameSection}>
                    <Text style={styleProfile.userName}>{user.displayName ? user.displayName : user.name}</Text>
                    <Text style={styleProfile.email}>{user.email}</Text>
                </View>
            </View>

            <View style={styleProfile.menuWrapper}>
              <TouchableRipple onPress={() => navigation.navigate('Address')}>
                <View style={styleProfile.menuItem}>
                  <Icon name='card-account-details' size={25} color="#FF6347"/>
                  <Text style={styleProfile.menuItemText}>Địa chỉ</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {}}>
                <View style={styleProfile.menuItem}>
                  <Icon name='account-circle' size={25} color="#FF6347"/>
                  <Text style={styleProfile.menuItemText}>Thông tin cá nhân</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={() => {navigation.navigate("Orders")}}>
                <View style={styleProfile.menuItem}>
                  <Icon name='file-document' size={25} color="#FF6347"/>
                  <Text style={styleProfile.menuItemText}>Lịch sử mua hàng</Text>
                </View>
              </TouchableRipple>
              <TouchableRipple onPress={signOut}>
                <View style={styleProfile.menuItem}>
                  <Icon name='logout' size={25} color="#FF6347"/>
                  <Text style={styleProfile.menuItemText}>Đăng xuất</Text>
                </View>
              </TouchableRipple>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen