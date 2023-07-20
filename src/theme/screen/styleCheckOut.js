import { StyleSheet} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white',
    },
    content: {
        justifyContent: 'space-between',
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
        marginBottom: 30
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
    couponSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 52, 
        borderRadius: 50, 
        borderColor: 'rgba(0, 0, 0, 0.15)',
        borderStyle: 'solid', 
        borderWidth: 1,
        paddingHorizontal: 29,
        marginBottom: 10,
        alignItems: 'center',

    },
    placeholder: {
        opacity: 0.6, 
        color: '#707070',
        fontSize: 16, 
        fontWeight: '400',
        lineHeight: 32,
        flex: 1
    }, 
    applyText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    paymentMethod: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 20
    },
    paymentMethodText: {
        marginLeft: 16, 
        fontSize: 16, 
        color: '#000'
    },
    addressView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    editButton:{
        fontSize: 15,
        fontWeight: '300',
        color: 'blue',
        textDecorationLine: 'underline'
    },
    addressTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    webViewCon: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      wbHead: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        zIndex: 25,
        elevation: 2,
      },

})
export default styles;