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

const ManPowerPlanApproval = ({navigation}) => {
  return (
    <View>
      <Header
        title="Man Power Plan Approval"
        back={() => navigation.goBack()}
      />
      <Text>Man Power Plan Approval</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ManPowerPlanApproval;
