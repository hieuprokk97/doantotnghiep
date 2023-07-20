import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 200, 
        maxHeight: 200
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051c60',
        margin: 10,
        marginTop: 50
    },
    text:{
        color: 'gray',
        marginVertical: 10
    },
    link: {
        color: "#fdb075"
    },
    textFailed: {
        alignSelf: 'flex-end',
        color: 'red',
    },

})

export default styles