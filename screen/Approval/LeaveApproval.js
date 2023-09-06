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

const LeaveApproval = ({navigation}) => {
  return (
    <View>
      <Header title="Leave Approval" back={() => navigation.goBack()} />
      <Text>Leave Approval</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LeaveApproval;
