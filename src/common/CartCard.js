import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCartList } from '../redux/slices/CartSlice';


export default function CartCard({ source, name, description, price, qty, onPressAdd, onPressMinus, onDelete }) {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Image source={source} style={styles.image} />
                <View style={styles.titleSection}>
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>
                            {description}
                        </Text>
                    </View>
                    <View style={styles.action}>
                        <TouchableOpacity onPress={onPressMinus}>
                            <Text style={styles.caption}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.caption}>{qty}</Text>
                        <TouchableOpacity onPress={onPressAdd}>
                            <Text style={styles.caption}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.delete}>
                <Text style={styles.price}>{price}</Text>
                <TouchableOpacity onPress={onDelete}>
                    <View style={styles.trash}>
                        <Icon name='delete' size={25} color={'white'} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    card: {
        flexDirection: 'row',
        marginTop: 32,
        justifyContent: 'space-between'
    },
    image: {
        width: 124,
        height: 121,
        borderRadius: 20,
        backgroundColor: "#808080",
        resizeMode: 'center'
    },
    titleSection: {
        marginLeft: 16,
        justifyContent: 'space-between'
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 95,
        height: 30,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        alignItems: 'center'
    },
    caption: {
        textAlignVertical: 'bottom',
        fontWeight: '200', color: '#000'
    },
    price: {
        fontWeight: '100',
        color: 'red'
    },
    delete: {
        justifyContent: 'space-between',
    },
    trash: {
        width: 53,
        height: 55,
        borderRadius: 20,
        borderColor: '#FFF',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ff3d00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 14,
        color: '#000',
        width: 150
    },
    subtitle: {
        fontWeight: '100',
        color: '#000',
        width: 150
    }

})