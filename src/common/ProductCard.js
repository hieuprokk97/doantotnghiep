import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

export default function ProductCard ({source, onPress, name, description, price, onPressAdd, onPressLogin}){
    return (
        <View>
          <TouchableOpacity onPress={onPress}
            style={styles.container}>
                <Image  source={source}
                        style={styles.image}/>
                <View style={styles.nameSection} >
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    <View style={{
                        height: 4, width: 4, 
                        borderRadius: 4, 
                        backgroundColor: "red",
                        marginHorizontal: 4
                    }}></View>
                    <Text style={{
                        color: "red", 
                        fontSize: 9, 
                        fontWeight: '100'
                    }}>New</Text>
                </View>
                <Text style={{
                    fontSize: 9,
                    color: "#4f4a4a",
                    fontWeight: '100'
                }}>{description}</Text>
    
                <View style={{
                    flexDirection: "row", 
                    marginTop: 20, 
                    alignItems: "center", 
                    width: "100%"
                }}>
                    <View style={{
                        width: "80%"
                    }}>
                        <Text style={{
                            fontSize: 15, fontWeight:"bold",
                            alignItems: 'flex-end', color: 'red'
                        }}>${price}</Text>
                    </View>
                    <TouchableOpacity style={{width: "20%"}} onPress={onPressAdd}>
                        <Image source={require('../../assets/images/add.png')}
                                style={{
                                    alignSelf: "flex-end",
                                    width: 30, height: 30
                                }}/>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
      )
  
}
const styles = StyleSheet.create({
    container: {
        marginTop: 30, 
        backgroundColor: "#FFF",
        height: 300, 
        width: 230, 
        elevation: 2, 
        borderRadius: 10, 
        padding: 15, 
        marginRight: 30, 
        marginLeft: 2, 
        marginBottom: 5
    },
    name: {
        fontWeight: "bold", 
        color: "#4f4a4a",
        fontSize: 12
    },
    nameSection: {
        flexDirection: "row", 
        alignItems: "center", 
        marginVertical: 10
    },
    image: {
        width: "100%", height: 170,
        borderRadius: 10,
        alignItems: 'center',
        resizeMode: 'center'
    }
})
