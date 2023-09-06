import React from 'react';
import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const textInput = ({
  onChangeText,
  customStyles,
  type,
  Appearance,
  editable,
  secureTextEntry,
  value,
  onContentSizeChange,
  multiline,
}) => {
  const fontSize = RFValue(16);

  return (
    <TextInput
      onChangeText={onChangeText}
      style={[
        styles.textInput,
        customStyles,
        {fontSize}, // Terapkan ukuran teks responsif di sini
      ]}
      multiline={multiline}
      onContentSizeChange={onContentSizeChange}
      editable={editable}
      secureTextEntry={secureTextEntry}
      value={value}
      keyboardType={type}></TextInput>
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#F0F0F0',
    color: '#000000',
    width: '100%',
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});

export default textInput;
