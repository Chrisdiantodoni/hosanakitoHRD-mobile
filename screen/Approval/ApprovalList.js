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
  const {title, data, headers, navi_name} = route.params;
  console.log(data);
  const tableData = data.map(obj => Object.values(obj));
  console.log(tableData);
  return (
    <>
      <Header title={title} back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>{title}</Text>
        <Table
          data={tableData}
          headers={headers}
          title={title}
          onRowPress={(rowData, rowID) => {
            navigation.navigate(navi_name, {rowData});
          }}
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default ApprovalList;
