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

const OvertimeApproval = ({navigation}) => {
  return (
    <View>
      <Header title="Overtime Approval" back={() => navigation.goBack()} />
      <Text>Overtime Approval</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OvertimeApproval;
