import { View, Text, StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 10
    },
    container_PRIMARY: {
        backgroundColor: "#3B71F3",
    },
    container_SECONDARY: {
        borderColor: "#3b71F3",
        borderWidth: 2
    }
    ,
    container_TERTIARY: {},
    text: {
        fontWeight: 'bold',
        color: 'white'
    },
    text_SECONDARY:{
        color: "#3b71F3"
    },
    text_TERTIARY:{
        color: "gray",
        fontSize: 12
    },
    
})

export default styles