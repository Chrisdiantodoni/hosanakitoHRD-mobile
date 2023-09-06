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

const LoanApproval = ({navigation}) => {
  return (
    <View>
      <Header title="Loan Approval" back={() => navigation.goBack()} />
      <Text>Loan Approval</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoanApproval;
