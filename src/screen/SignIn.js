import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, ToastAndroid } from 'react-native';
import React, {useEffect, useState} from 'react';

import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import styles from '../theme/screen/styleSignIn';
import SocialButton from '../component/SocialButton/';
import { useNavigation } from '@react-navigation/native';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'; 
import { addUser, setActiveUser, setUserLogOutState } from '../redux/slices/AddressSlice';
import auth from '@react-native-firebase/auth'
export default function SignIn(){
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    
    const onSignUpPress = () =>{
        navigation.navigate("SignUp");
    }
    const handleSignInAccount = async () => {
        const admins = await firestore().collection('admin').get();
        if (email == admins.docs[0]._data.email && password == admins.docs[0]._data.password){
            navigation.navigate("Admin")
        }else{
            auth().signInWithEmailAndPassword(email, password)
            .then(()=>{
                ToastAndroid.show('Signned In', ToastAndroid.SHORT) 
                dispatch(addUser())
            })
            .catch(error => {
                if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found'){
                    ToastAndroid.show('email or password incorrect', ToastAndroid.SHORT)
                }
            })
        }
    }
    return (
        <ScrollView>
            <View style={styles.root}>
                <Image 
                    source={require('../../assets/images/logo.png')} 
                    style={[styles.logo, {height: height * 0.5}]} 
                    resizeMode='contain'/>
                <CustomInput placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
                <CustomInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} secureTextEntry/> 
                <CustomButton text="Sign In" onPress={handleSignInAccount} />
                <CustomButton text="Forgot Password?" onPress={() => {}} type="TERTIARY"/>
                <SocialButton/>
                <CustomButton text="Don't have a account? Create one" onPress={onSignUpPress} type="TERTIARY" />
            </View>
        </ScrollView>
    )
}
