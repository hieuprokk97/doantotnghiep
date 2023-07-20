import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, ToastAndroid } from 'react-native'
import React, {useState, useContext} from 'react';
import CustomInput from '../component/CustomInput';
import CustomButton from '../component/CustomButton';
import styles from '../theme/screen/styleSignUp';
import SocialSignInButton from '../component/SocialButton/';
import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { create } from 'react-test-renderer';
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import AskForLoginModal from '../common/AskForLogin';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/AddressSlice';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import SQLite from 'react-native-sqlite-storage'
const SignUp = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const [showErrors, setShowErrors] = useState(false)
    const [errors, setErrors] = useState({});
    const getErrors = (username, email, password, passwordRepeat) =>{
        const isNonWhiteSpace = /^\S*$/;
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        const isValidLength = /^.{8,16}$/;
        const errors = {}
        if (!username){
            errors.username = 'Please Enter Username'   
        }
        if (!email) {
            errors.email = 'Please Enter Email'
        }else if (!email.includes('@') || !email.includes('.com')){
            errors.email = 'Wrong Format Email'
        }
        if (!password) { 
            errors.password = 'Enter Password'
        }else if (!isNonWhiteSpace.test(password)){
            errors.password = 'Password must not contain Whitespaces.'
        }else if (!isContainsUppercase.test(password)){
            errors.password = 'Password must have at least one Uppercase Character.'
        }else if (!isContainsLowercase.test(password)){
            errors.password = 'Password must have at least one Lowercase Character.'
        }else if (!isContainsNumber.test(password)){
            errors.password = 'Password must contain at least one Digit.'
        }else if (!isValidLength.test(password)){
            errors.password = 'Password must be 8-16 Characters Long.'
        }

        if (!passwordRepeat) { 
            errors.passwordRepeat = 'Enter Password'
        }else if (password !== passwordRepeat){
            errors.passwordRepeat = 'Enter correct password'
        }

        return errors;
    }

    const handleCreateAccount = () => {
        const errors = getErrors(username, email, password, passwordRepeat);
        if (Object.keys(errors).length > 0){
            setShowErrors(true);
            setErrors(showErrors && errors);
            console.log(errors)
        }
        else{
            firestore().collection("users")
            .add({
                name: username, 
                email: email, 
                type: 'Normal',
                id: "id_" + email + "_Normal"
            })
            setErrors({});
            setShowErrors(false)
            auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                ToastAndroid.show('Account Created', ToastAndroid.SHORT)
            })
            .catch((error) => {
                if (error.code == "auth/email-already-in-use"){
                    Alert.alert("Email already in use!")
                }
            })
        }
    }

    const onSignInPress = () =>{
        navigation.navigate("SignIn");
    }
    const onTermOfUsePressed = () => {
        console.warn("onTermOfUsePressed")
    }
    const onPrivacyPolicyPressed = () => {
        console.warn("onPrivacyPolicyPressed")
    }
    return (
        <ScrollView>
        <View style={styles.root}>
            <Text style={styles.title}>Create an account</Text>
            <CustomInput placeholder="Username" value={username} onChangeText={text => setUsername(text)}/>
            {errors.username && (<Text style={{color: 'red'}}>{errors.username}</Text>)}
            <CustomInput placeholder="Email" value={email} onChangeText={text => setEmail(text)}/>
            {errors.email && (<Text style={{color: 'red'}}>{errors.email}</Text>)}
            <CustomInput placeholder="Password" value={password} onChangeText={text => setPassword(text)} secureTextEntry/> 
            {errors.password && (<Text style={{color: 'red'}}>{errors.password}</Text>)}
            <CustomInput placeholder="Password Repeat" value={passwordRepeat} onChangeText={text => setPasswordRepeat(text)} secureTextEntry/>
            {errors.passwordRepeat && (<Text style={{color: 'red'}}>{errors.passwordRepeat}</Text>)}

           
            <CustomButton text="Register" onPress={handleCreateAccount}/>
            
            
            <Text style={styles.text}>By registering, you confirm that you accept our{' '}
                <Text style={styles.link} onPress={onTermOfUsePressed}>Terms of Use</Text> and{' '}
                <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
            </Text>
            <SocialSignInButton/>
            <CustomButton text="Have an account? Sign In" onPress={onSignInPress} type="TERTIARY" />
        </View>
        </ScrollView>
    )
}

export default SignUp