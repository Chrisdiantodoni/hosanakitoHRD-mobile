import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Layout, TextInput, Header, Text} from '../../components';

// create a component
const Notification = ({navigation}) => {
  return (
    <>
      <Header title="Notification" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start'}}>
        <Text>Notification</Text>
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
export default Notification;
