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

const OvertimeHistory = ({navigation}) => {
  return (
    <>
      <Header title="Overtime History" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Overtime History</Text>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default OvertimeHistory;
