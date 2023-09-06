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
  Table,
} from '../../components';

const ClockingResult = ({navigation}) => {
  const data = [];
  return (
    <>
      <Header title="Clocking Result" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Overtime History</Text>
        <Table data={data} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default ClockingResult;
