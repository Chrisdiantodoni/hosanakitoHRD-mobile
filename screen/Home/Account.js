import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Layout, TextInput, Header, Text} from '../../components';

const Account = () => {
  return (
    <>
      <Header title="Account" />
      <Layout customStyles={{justifyContent: 'flex-start'}}>
        <Text>Account</Text>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default Account;
