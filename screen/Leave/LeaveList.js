import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  Layout,
  TextInput,
  Header,
  Text,
  Section,
  DropdownPicker,
  DateTimePicker,
  CustomModal,
  table,
} from '../../components';
const LeaveList = () => {
  return (
    <>
      <Header title={title} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Leave List</Text>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default LeaveList;
