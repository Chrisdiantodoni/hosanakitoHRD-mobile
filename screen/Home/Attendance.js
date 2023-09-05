import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  Layout,
  TextInput,
  Header,
  Text,
  Section,
} from '../../components';

const Attendance = ({navigation}) => {
  const data = [
    {
      name: 'Clocking',
      nav: 'Clocking',
    },
    {
      name: 'Clocking Result',
      nav: 'ClockingResult',
    },
    {
      name: 'Overtime',
      nav: 'Overtime',
    },
    {
      name: 'Overtime History',
      nav: 'OvertimeHistory',
    },
    {
      name: 'Shift',
      nav: 'Shift',
    },
  ];

  return (
    <>
      <Header title="Attendance" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start'}}>
        <Section data={data} />
      </Layout>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: '',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Attendance;
