import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Text,
  Header,
  Layout,
  RadioButton,
  TextInput,
  Section,
  Button,
} from '../../components';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

const Shift = ({navigation}) => {
  return (
    <View>
      <Header title="Overtime" back={() => navigation.goBack()} />
      <Text>Shift</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Shift;
