import { StyleSheet} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      orderItem: {
        width: '90%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 0.3,
        padding: 10,
        borderRadius: 10,
        borderColor: '#7D7D7DF2',
      },
      productItem: {
        width: '95%',
        flexDirection: 'row',
    
        alignSelf: 'center',
      },
      itemImage: {
        width: 50,
        height: 50,
      },
      nameView: {
        marginLeft: 10,
      },
      name: {
        fontSize: 15,
        color: '#000'
      }
})
export default styles;