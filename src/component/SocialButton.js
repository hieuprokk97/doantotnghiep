import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../component/CustomButton'
import { useDispatch, useSelector } from 'react-redux'; 
import { setActiveUser, setUserLogOutState } from '../redux/slices/AddressSlice';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
const SocialSignInButton = () => {
    const dispatch = useDispatch();
    const onSignInFacebook = () => {
        console.warn("Sign In With Facebook");
    }
    const onSignInGoogle = () => {
        console.warn("Sign In With Google");
    }
    return (
        <>
        <CustomButton text="Sign In with Google" onPress={() => {
            onGoogleButtonPress()
            .then(() => {console.log("Signned in with google")})
            .catch(error => console.log(error))}} bgColor="#fae9ea" fgColor="#DD4DD4" />
        </>
    )
}

export default SocialSignInButton   

GoogleSignin.configure({
    webClientId: '1085689343289-oc03egkb7qv2cbc3kcfdi5cth87ucaq1.apps.googleusercontent.com',
  });
async function onGoogleButtonPress(){
    //Check if your device support Google play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})

    const {idToken} = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
    return auth().signInWithCredential(googleCredential);
}