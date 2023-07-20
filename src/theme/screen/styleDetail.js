import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1, 
      }, 
      imageSection: {
        flexDirection: "row",height: 340, width: "100%"
      },
      favorite: {
        width: "100%", alignItems:"flex-end", color: '#000'
      },
      titleSection: {
        flexDirection: "row", 
        alignItems: "center",
        width: 15, marginTop: 20, width: "100%"
      },
      price: {
        fontWeight: 'bold', fontSize:16, color: "#b3aeae"
      },
      description: {
        fontWeight: '200', 
        fontSize:14, 
        color: "#b3aeae",
        marginTop: 20,
        lineHeight: 20
      },
      btnStyle: {
        flexDirection: "row",
        justifyContent: 'center',
        backgroundColor: "#FFF",
        alignItems: 'center',
        borderRadius: 10, 
        borderColor: "#000",
        borderWidth: 2,
        padding: 12, 
        marginBottom: 15,
      },
      btnText: {
        fontWeight: 'bold', 
        fontSize: 20, 
        marginHorizontal: 15,
        color: "#000"
      },
      action: {
        flexDirection: 'row',
        width: 95, 
        height: 30,
        borderRadius: 20, 
        backgroundColor: 'rgba(0, 0, 0, 0.06)',
        alignItems: 'center'
      },
      caption: {
          textAlignVertical: 'bottom',
          fontWeight: '200',
          paddingHorizontal: 12,
          color: '#000'
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
        shadowOpacity: 0.4,
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 6,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
})

export default styles