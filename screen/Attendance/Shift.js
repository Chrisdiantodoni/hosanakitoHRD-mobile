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
    <>
      <Header title="Shift" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Shift</Text>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default Shift;
