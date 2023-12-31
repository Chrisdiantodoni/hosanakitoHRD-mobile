import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const text = ({children, customStyles}) => {
  const defaultFontSize = RFValue(16);

  return (
    <Text
      style={[styles.textStyles, {fontSize: defaultFontSize}, customStyles]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    color: '#000000',
    alignSelf: 'flex-start',
  },
});

export default text;
