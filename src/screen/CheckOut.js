import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  FlatList,
  Modal,
  LogBox 
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../component/CustomButton';
import styles from '../theme/screen/styleCheckOut';
import CheckOutCard from '../common/CheckOuCard';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {RadioButton} from 'react-native-paper';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {emptyOrder, orderItems} from '../redux/slices/OrderSlice';
import {emptyCart} from '../redux/slices/CartSlice';
export default function CheckOut() {
  
  const items = useSelector(state => state.cart);
  const [cartItems, setCartItems] = useState(items.data);
  const navigation = useNavigation();
  const idFocused = useIsFocused();
  const [checked, setChecked] = useState('first');
  const user = firebase.auth().currentUser;
  const getSelectedAddress = async () => {
    setSelectedAddress(await AsyncStorage.getItem('MY_ADDRESS'));
  };
  const [selectedAddress, setSelectedAddress] = useState(
    'Please Select Address!',
  );
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);
  useEffect(() => {
    getSelectedAddress();
  }, [idFocused]);

  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      total = total + item.qty * item.price;
    });
    return total.toFixed(0);
  };
  useEffect(() => {
    orderPlace(),   LogBox.ignoreLogs(["VirtualizedLists should never be nested"])

  }, [])
  const orderPlace = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    let ampm = '';
    if (hours > 12) {
      ampm = 'pm';
    } else {
      ampm = 'am';
    }
    const data = {
      user: user,
      cartItems,
      amount: '$' + getTotal(),
      address: selectedAddress,
      createdAt:
        day +
        '/' +
        month +
        '/' +
        year +
        ' ' +
        hours +
        ':' +
        minutes +
        ' ' +
        ampm,
    };
    console.log(data)
    dispatch(orderItems(data))
    
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.content}>
          <View>
            <FlatList
              nestedScrollEnabled={true}
              data={cartItems}
              renderItem={({item, index}) => {
                return (
                  <CheckOutCard
                    source={{uri: item.imageUrl}}
                    name={item.name}
                    price={item.price}
                    description={item.description}
                    qty={item.qty == null ? 1 : item.qty}
                  />
                );
              }}
            />
          </View>
          {/* Total */}
          <View>
            <View style={styles.divider} />
            <View style={styles.totalSection}>
              <Text style={styles.total}>Totals</Text>
              <View style={styles.subTotal}>
                <Text style={styles.subText}>Sub Total</Text>
                <View style={styles.divider} />
                <Text style={styles.totalNumber}>${getTotal()}</Text>
              </View>
            </View>
            <View style={styles.divider} />
            <Text style={styles.total}>Select Payment Mode</Text>
            <TouchableOpacity style={styles.paymentMethod}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.paymentMethodText}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentMethod}>
              <RadioButton
                value="second"
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={styles.paymentMethodText}>PayPal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentMethod}>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={styles.paymentMethodText}>Cash on Delivery</Text>
            </TouchableOpacity>
          </View>
          {/*Address*/}
          <View style={styles.addressView}>
            <Text style={styles.addressTitle}>Address</Text>
            <Text
              style={styles.editButton}
              onPress={() => {
                navigation.navigate('Address', {type: 'new'});
              }}>
              Edit Address
            </Text>
          </View>

          <Text
            style={[
              styles.total,
              {marginTop: 10, fontSize: 16, marginBottom: 10, color: '#dcdcdc'},
            ]}>
            {selectedAddress}{' '}
          </Text>

          <CustomButton
            text={'Confirm'}
            bgColor={'red'}
            bdradius={30}
            onPress={() => {orderPlace(), navigation.navigate("OrderSuccess")}}></CustomButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
