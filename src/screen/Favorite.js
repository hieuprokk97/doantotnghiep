import { View, Text, ScrollView, FlatList, SafeAreaView,  } from 'react-native'
import React,  { useState }  from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import ProductCardHor from '../common/ProductCartHor';

const Favorite = () => {
  const items = useSelector(state => state.favoritelist);
    const [favoritelistItems, setFavoritelistItems] = useState(items.data);
    const navigation = useNavigation();
    return (
            <SafeAreaView style={{paddingHorizontal: 20}}>
                <FlatList data={items.data} renderItem={({item, index}) => {
                    return (
                            <ProductCardHor source={{uri: item.imageUrl}}
                                name={item.name}
                                price={item.price}
                                description={item.description}
                            onPress={() => {navigation.navigate('Detail', {data: item})}}/>
                    )
                }}/>
            </SafeAreaView>
    )
}

export default Favorite