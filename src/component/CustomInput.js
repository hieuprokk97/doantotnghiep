import { View, Text, TextInput } from 'react-native'
import React from 'react';
import styles from '../theme/component/styleCustomInput'

const CustomInput = ({value, onChangeText, placeholder, secureTextEntry, keyboardType}) => {
  return (
    <View style={styles.container}>
      <TextInput  value={value}
                  onChangeText={onChangeText}
                  placeholder={placeholder} placeholderTextColor={'grey'}
                  secureTextEntry={secureTextEntry}
                  keyboardType={keyboardType}
                  style={styles.input}/>
    </View>
  )
}

export default CustomInput