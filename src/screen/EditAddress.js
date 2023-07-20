import { View, Text } from 'react-native'
import React, {useState}from 'react'
import CustomInput from '../component/CustomInput'
import { styles } from '../theme/screen/styleAddAddress'
import { RadioButton } from 'react-native-paper'
import CustomButton from '../component/CustomButton'
import { useDispatch } from 'react-redux'
import { addAddress, updateAddress } from '../redux/slices/AddressSlice'
import { useNavigation, useRoute } from '@react-navigation/native'
import uuid from 'react-native-uuid'
const EditAddress = () => {
  const navigation = useNavigation()
  const route = useRoute()
  const [checked, setChecked] =useState(route.params.data.checked == "Home" ? 'first' : 'second')
  const [sonha, setSonha] = useState(route.params.data.sonha)
  const [duong, setDuong] = useState(route.params.data.duong)
  const [phuong, setPhuong] = useState(route.params.data.phuong)
  const [quan, setQuan] = useState(route.params.data.quan)
  const [sdt, setSdt] = useState(route.params.data.sdt)
  const [thanhpho, setThanhpho] = useState(route.params.data.thanhpho)
  const dispatch = useDispatch()
  return (
    <View style={styles.container}>
        <CustomInput placeholder={'Nhập Số nhà'}  
                    value={sonha}
                    onChangeText={txt => setSonha(txt)}/>
        <CustomInput placeholder={'Nhập đường'}
                    value={duong}
                    onChangeText={txt => setDuong(txt)}/>
        <CustomInput placeholder={'Nhập phường'}
                    value={phuong}
                    onChangeText={txt => setPhuong(txt)}/>
        <CustomInput placeholder={'Nhập quận'}
                    value={quan}
                    onChangeText={txt => setQuan(txt)}/>
        <CustomInput placeholder={'Số điện thoại'} 
                    keyboardType={'number-pad'}
                    value={sdt}
                    onChangeText={txt => setSdt(txt)}/>
        <CustomInput placeholder={'Nhập Thành phố'}
                    value={thanhpho}
                    onChangeText={txt => setThanhpho(txt)}/>
        <View style={styles.typeView}>
            <View style={styles.typeBtn}>
               <RadioButton 
                  value='first'
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}/>
                <Text style={styles.radioText}>Home</Text>
            </View>
            <View style={styles.typeBtn}>
                <RadioButton 
                  value='second'
                  status={ checked === 'second' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('second')}/>
                <Text style={styles.radioText}>Office</Text>
            </View>
        </View>
        <CustomButton bgColor={'#ff8c00'} text={"Save Address"} 
            onPress={() => {
              dispatch(
                updateAddress({
                    sonha: sonha,
                    duong: duong, 
                    phuong: phuong, 
                    quan: quan,
                    sdt: sdt,
                    thanhpho: thanhpho, 
                    checked: checked == "first" ? "Home" : "Office",
                    id: route.params.data.id
                }),
                navigation.goBack()
              );  
            }}/>
    </View>
  )
}

export default EditAddress