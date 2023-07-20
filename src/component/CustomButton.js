import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../theme/component/styleCustomButton'
const CustomButton = ({onPress, text, type = "PRIMARY", bgColor, fgColor, bdradius}) => {
    return (
      <TouchableOpacity  
        onPress={onPress} 
          style={[
            styles.container, 
            styles[`container_${type}`],
            bgColor ? {backgroundColor: bgColor}: {},
            bdradius ? {borderRadius: bdradius} :  {}
          ]}>
          <Text 
            style={[
              styles.text, 
              styles[`text_${type}`],
              fgColor ? {color: fgColor} : {}
             ]}>{text}</Text>
      </TouchableOpacity>
  )
}

export default CustomButton
