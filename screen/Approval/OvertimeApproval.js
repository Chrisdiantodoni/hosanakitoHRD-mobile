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

const OvertimeApproval = ({route, navigation}) => {
  const {rowData} = route.params;
  const [id, name, position, location, date, startTime, endTime, status] =
    rowData;
  return (
    <>
      <Header title="Overtime Approval" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>NIP</Text>
        <TextInput value={id} />
        <Text>Full Name</Text>
        <TextInput value={name} />
        <Text>Overtime Date</Text>
        <TextInput value={date} />
        <Text>Position</Text>
        <TextInput value={position} />
        <Text>Branch</Text>
        <TextInput value={location} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default OvertimeApproval;
