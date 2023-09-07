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
  return (
    <>
      <Header title="Clocking Result" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Clocking Result</Text>
        {/* <Table data={data} /> */}
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default ClockingResult;
