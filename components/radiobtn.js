import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from './text';

const radiobtn = ({label, selected, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.radioButton}>
        <View
          style={[
            styles.radioButtonIcon,
            {backgroundColor: selected ? '#a60f21' : 'transparent'},
          ]}
        />
        <Text>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 30,
  },
  radioButtonIcon: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 2,
    borderColor: '#a60f21',
    marginRight: 10,
  },
});

export default radiobtn;
