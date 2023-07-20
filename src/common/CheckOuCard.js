import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function CartCard({source, name, description, price, qty}) {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <Image style={styles.image} source={source}/>
                    <View style={styles.titleSection}>
                        <View>
                            <Text style={styles.title}>{name}</Text>
                            <Text style={styles.subtitle}>
                                {description}
                            </Text>
                        </View>
                        <View style={styles.action}>
                            <Text style={styles.caption}>{qty}</Text>
                        </View>
                </View>
            </View>
            <View style={styles.delete}>
                <Text style={styles.price}>${price}</Text>
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
        backgroundColor: "#808080"
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
        fontWeight: '200',
        color: '#000'
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
        fontSize: 16,
        color: '#000',
        width: 150
        
    },
    subtitle: {
        fontWeight: '100',
        color: '#000',
    }

})