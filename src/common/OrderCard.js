import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const OrderCard = ({onPressEdit, source, name, description, price, userId, qty}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <Image source={source} style={styles.image}/>
                <View style={{justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.text}>{name}</Text>
                            <Text style={styles.subtitle}>{description}</Text>
                            <Text style={styles.subtitle}>Price: {price}</Text>
                            <Text style={styles.subtitle}>Quantity: {qty}</Text>
                            <Text style={styles.subtitle}>User_ID: {userId}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default OrderCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10, 
        backgroundColor: "#FFF",
        height: 150, 
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
        justifyContent: 'center',
        alignItems: 'center',
    }
})