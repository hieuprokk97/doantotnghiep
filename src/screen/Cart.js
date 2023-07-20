import { View, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CartCard from '../common/CartCard'
import styles from '../theme/screen/styleCart'
import CustomButton from '../component/CustomButton'
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCartList, decrementQuantity, removeFromCart, incrementQuantity} from '../redux/slices/CartSlice'
import styleEditProfile from '../theme/screen/styleEditProfile'
import AskForLoginModal from '../common/AskForLogin';
export default function Cart() {
  const navigation = useNavigation();
  const onCheckOut = () => {
    navigation.navigate('CheckOut');
  }
  const items = useSelector(state => state.cart);
  console.log(items)
  const [cartItems, setCartItems] = useState(items.data);
  const [popUp, setPopUp] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(items.data);
  }, [items]);
  const getTotal = () => {
    let total = 0;
    cartItems.map(item => {
      if (item.qty != null){
        total = total + item.qty * item.price;
      }else {
        total = total + 1 * item.price;
      }
    });
    return total.toFixed(0);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length < 1 && (
        <View style={styles.noItems}>
          <Text>No Items in Cart</Text>
        </View>
      )}
      {cartItems.length > 0 && (
        <View style={styles.container}>
          <FlatList data={cartItems} renderItem={({ item, index }) => {
            return (  
              <View>
                <CartCard source={{ uri: item.imageUrl }}
                  name={item.name}
                  price={"$" + item.price}
                  description={item.description}
                  qty={item.qty}
                  onPressAdd={() => { dispatch(incrementQuantity(item))}}
                  onPressMinus={() => {
                    if (item.qty > 1) {
                      dispatch(decrementQuantity(item))
                    } else {
                      dispatch(removeFromCart(item))
                    }
                  }}
                  onDelete={() => {setPopUp(true)}}
                />
                <AskForLoginModal
                  modalVisible={popUp}
                  onClickCancel={() => {
                    setPopUp(false);
                  }}
                  onClose={() => {
                    setPopUp(false);
                  }}
                  onClickAggree={() => {
                    setPopUp(false)
                    dispatch(removeFromCart(item))
                  }}
                  btnCancel='Cancel' btnOk='Delete'
                  txtTitle='Khách hàng có chắc chắn muốn xóa không ?'
                />
              </View>

            )
          }} />
          <View style={styles.totalSection}>
            <Text style={styles.total}>Totals</Text>
            <View style={styles.subTotal}>
              <Text style={styles.subText}>Sub Total</Text>
              <View style={styles.divider} />
              <Text style={styles.totalNumber}>${getTotal()}</Text>
            </View>
          </View>
          <CustomButton text={'Confirm'} bgColor={'red'} bdradius={30} onPress={() => {onCheckOut()}}></CustomButton>
        </View>
      )}
    </SafeAreaView>
  )        
}  

