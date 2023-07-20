import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
    searchStyle:{
        flexDirection: "row",
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
        
    },
    searchSize: {
        flexDirection: 'row', 
        alignItems: "center",
        elevation: 2,
        width: "100%",
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
        height: 35, 
        borderRadius: 10,
        marginLeft: 1, 
        justifyContent: 'space-between'
    },
})

export default styles