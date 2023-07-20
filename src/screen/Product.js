import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from '../theme/screen/styleProduct'
import Icon from 'react-native-vector-icons/Ionicons'
import ProductCardHor from '../common/ProductCartHor'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function Product (){
    const navigation = useNavigation()
    const products = useSelector(state => state);
    const [search, setSearch] = useState('');
    const [oldData, setOldData] = useState(products.product.data);
    const [searchedList, setSearchedList] = useState(oldData); 
    const filterData =(txt) => {
        let newData = oldData.filter(item=>{
            return item.title.toLowerCase().match(txt.toLowerCase());
        });
        setSearchedList(newData)
    }
    return ( 
        <View style={{paddingHorizontal: 20}}>
            <View style={styles.searchStyle}>
                <View style={styles.searchSize}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="ios-search" size={22} color="#4f4a4a"/>
                        <TextInput 
                            value={search}
                            onChangeText={txt => {
                                setSearch(txt);
                                filterData(txt);
                            }}
                            placeholder='Search name...'
                                    style={{
                                    paddingHorizontal: 10,
                                    fontSize: 12
                                    }}/>
                    </View>
                    {search!=='' && (
                        <TouchableOpacity onPress={() => {setSearch(''); filterData('')}}>
                            <Icon name='ios-close-outline' size={22}/>
                        </TouchableOpacity>  
                    )}
                </View>
            </View>
            <FlatList scrollEnabled={true} data={searchedList} renderItem={({item, index}) => {
                return (
                        <ProductCardHor source={{uri: item.data.imageUrl}}
                            name={item.data.name}
                            price={item.data.price}
                            description={item.data.description}
                        onPress={() => {navigation.navigate('Detail', {data: item.data})}}/>
                )
            }}/>
        </View>
    )
}