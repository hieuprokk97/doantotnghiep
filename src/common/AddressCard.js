import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export const AddressCard = ({onPress, title, address, phone, onPressEdit, onPressDelete}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
        <View style={{justifyContent: 'space-between'}} >
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.phone}>{phone}</Text>
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={onPressEdit}>
                        <MaterialIcons name='edit' size={25}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPressDelete}>
                        <MaterialIcons name='delete' size={25}/>
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
        height: 130, 
        width: 350, 
        elevation: 2, 
        borderRadius: 10, 
        padding: 15, 
        marginRight: 10, 
        marginLeft: 17, 
        marginBottom: 10,
        flexShrink: 1
    },
    address: {
        marginLeft: 10, 
        fontWeight: '200',
        fontSize: 12,
        marginTop: 5,
        width: 300,
        color: '#000'
    },
    title: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'red',
    },
    phone: {
        marginLeft: 10,
        width: 200,
        fontWeight: 'bold',
        color: '#000'
    }
})