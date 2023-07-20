import { StyleSheet} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white', 
        paddingHorizontal: 10
    },
    content: {
        marginHorizontal: 29,
        paddingBottom: 32
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    totalSection: {
        marginTop: 32,
        marginBottom: 30,
        paddingHorizontal: 20
    },
    subTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    subText: {
        fontSize: 15,
        fontWeight: '200',
        color: '#000'
    },
    divider: {
        height: 1,
        borderColor: '#dddddd',
        borderWidth: StyleSheet.hairlineWidth,
        flex: 1,
        marginHorizontal: 16,
        marginTop:13
    },
    totalNumber: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'
    },
    noItems: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000'
    }
    
})
export default styles;