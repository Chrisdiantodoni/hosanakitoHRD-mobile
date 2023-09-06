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
const ApprovalList = ({route, navigation}) => {
  const {title, data, headers} = route.params;
  console.log(data);
  const tableData = data.map(obj => Object.values(obj));
  tableData.forEach(innerArray => console.log(innerArray));
  console.log(tableData);
  return (
    <>
      <Header title={title} back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>{title}</Text>
        <Table data={tableData} headers={headers} title={title} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default ApprovalList;
