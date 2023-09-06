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

const Leave = ({navigation}) => {
  const data = [
    {
      name: 'Leave',
      nav: 'LeaveRequest',
    },
    {
      name: 'Permit Leave Office',
      nav: 'PermitLeaveRequest',
    },
    {
      name: 'Leave History',
      nav: {
        name: 'LeaveList',
        params: {
          title: 'Leave History',
          data: [],
          headers: [],
        },
      },
    },
    {
      name: 'Permit Leave Office History',
      nav: {
        name: 'LeaveList',
        params: {
          title: 'Permit Leave Office History',
          data: [],
          headers: [],
        },
      },
    },
  ];
  return (
    <>
      <Header title="Leave" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start'}}>
        <Section data={data} account={true} />
      </Layout>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Leave;
