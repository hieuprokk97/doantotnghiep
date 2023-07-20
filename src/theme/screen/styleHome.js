import { StyleSheet} from 'react-native'
import React from 'react'

const styleHome = StyleSheet.create({
    topStyle:{
        flexDirection: "row", 
        width: "100%",
        marginTop: 40,
        alignItems: 'center',
    },
    searchStyle:{
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        marginVertical: 30
    },
    searchSize: {
        flexDirection: 'row', 
        alignItems: "center",
        elevation: 2,
        width: "83%",
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        height: 35, 
        borderRadius: 10,
        marginLeft: 1
    },
    logoSize: {
        width: 90, height: 80
    },
    shopbagSize: {
        width: 20, height: 23
    },
    category: {
        paddingTop: 10, 
        fontWeight: 'bold',
        fontSize: 16
    },
    dotNew: {
        width: 5, 
        height: 5,
        borderRadius: 4, 
        marginHorizontal: 4,
        backgroundColor: "red",
    }
})

export default styleHome