import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const DropdownPicker = ({options, selectedValue, onValueChange}) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        mode="dropdown"
        onValueChange={itemValue => onValueChange(itemValue)}>
        {options.map(option => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginVertical: 8,
    paddingHorizontal: 8,
  },
});

export default DropdownPicker;
