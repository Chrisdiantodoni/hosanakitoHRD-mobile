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

const PermitLeaveOfficeApproval = ({navigation}) => {
  return (
    <View>
      <Header
        title="Permit Leave Office Approval"
        back={() => navigation.goBack()}
      />
      <Text>Permit Leave Office Approval</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PermitLeaveOfficeApproval;
