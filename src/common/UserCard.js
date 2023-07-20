import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const UserCard = ({name, email, type}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={styles.text}>{name}</Text>
                            <Text style={styles.subtitle}>{email}</Text>
                            <Text style={styles.subtitle}>{type}</Text>
                        </View>
                    </View>
            </View>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        marginTop: 10, 
        backgroundColor: "#FFF",
        height: 100, 
        width: 350, 
        elevation: 2, 
        borderRadius: 10, 
        padding: 10, 
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
        fontWeight: 'bold',
        color: '#000'
    },
    subtitle: {
        fontWeight: '100',
        fontSize: 15,
        marginLeft: 10,
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