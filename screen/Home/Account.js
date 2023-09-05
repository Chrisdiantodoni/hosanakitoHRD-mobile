import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  Layout,
  TextInput,
  Header,
  Text,
  Section,
} from '../../components';

const Account = ({navigation}) => {
  const data = [
    {
      name: 'Account',
      nav: 'ProfileAccount',
    },
    {
      name: 'Change Password',
      nav: 'ChangePassword',
    },
    {
      name: 'Logout',
      nav: 'Login',
    },
  ];
  return (
    <>
      <Header title="Account" />
      <Layout customStyles={{justifyContent: 'flex-start'}}>
        <Section data={data} account={true} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default Account;
