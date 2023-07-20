import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

export const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20, 
        backgroundColor: '#fff'
    },
    typeView: {
        width: "100%",
        flexDirection: 'row', 
        marginTop: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 20
    },
    typeBtn: {
        width: '40%',
        height: 50, 
        borderRadius: 10, 
        flexDirection: 'row',
        paddingLeft: 10,
        borderWidth: 0.3,
        alignItems: 'center'
    },
    radioText: {
        color: '#000', marginLeft: 10
    }
})