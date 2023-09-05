import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation} from '@react-navigation/native';

const section = ({data, account}) => {
  const fontSize = RFValue(16);
  console.log(data);
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, width: '100%'}}>
      {data?.map(item => (
        <TouchableOpacity
          key={item.name}
          style={styles.section}
          onPress={() =>
            account ? navigation.navigate(item.nav) : navigation.reset(item.nav)
          }>
          <Text style={[styles.text, {fontSize: fontSize}]}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    borderBottomColor: '#F0F0F0',
    borderBottomWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 16,
  },
  text: {
    color: '#000000',
    fontWeight: '600',
  },
});

export default section;
