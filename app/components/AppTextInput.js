import React from 'react';
import {TextInput, View, StyleSheet, Platform} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import color from '../config/color'

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={color.medium} style={styles.icon} />}
      <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.light,
    borderRadius: 25,
    flexDirection: "row",
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  textInput: {
    color: color.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  
  },
  icon: {
    marginRight: 10
  }
})

export default AppTextInput;