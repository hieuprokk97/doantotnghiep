import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ProductCardHor({onPress, source, name, description, price}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image source={source} style={styles.image}/>
                <View style={{justifyContent: 'space-between'}}>
                    <View>
                        <Text style={styles.text}>{name}</Text>
                        <Text style={styles.subtitle}>{description}</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 200}}>
                        <Text style={styles.price}>${price}</Text>
                        <TouchableOpacity style={styles.addStyle}>
                            <Icon name='add' size={29} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10, 
        backgroundColor: "#FFF",
        height: 200, 
        width: 350, 
        elevation: 2, 
        borderRadius: 10, 
        padding: 15, 
        marginLeft: 2,
        marginRight: 10, 
        marginBottom: 5,
    },
    image: {
        height: '100%',
        width: 130,
        resizeMode: 'stretch',
        marginLeft: -10
    },
    text: {
        marginLeft: 10,
        width: 150,
        fontWeight: 'bold',
        color: '#000'
    },
    subtitle: {
        fontWeight: '100',
        fontSize: 10,
        marginLeft: 10,
        width: 150,
        color: '#000'
    },
    price: {
        fontWeight: '200',
        color: 'red', 
        fontSize: 20, 
        marginLeft: 10,
        marginTop: 10,
    },
    addStyle: {
        width: 53, 
        height: 55, 
        borderRadius: 20, 
        borderColor: '#FFF',
        borderStyle: 'solid',
        borderWidth: 1, 
        backgroundColor: '#ff3d00',
        justifyContent: 'center',
        alignItems: 'center',
    }
})