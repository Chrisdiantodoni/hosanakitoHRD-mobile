import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const Button = ({onPress, customStyles, title, textStyle}) => {
  const fontSize = RFValue(16);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, customStyles]}>
      <Text style={[styles.text, textStyle, {fontSize}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#a60f21',
    marginHorizontal: 8,
    marginVertical: 18,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
});
export default Button;
