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

const Approval = () => {
  const data = [
    {
      name: 'Overtime',
      nav: 'OvertimeApproval',
    },
    {
      name: 'Leave',
      nav: 'LeaveApproval',
    },
    {
      name: 'Permit Leave Office',
      nav: 'PermitLeaveApproval',
    },
    {
      name: 'Loan',
      nav: 'LoanApproval',
    },
    {
      name: 'Man Power Plan',
      nav: 'ManPowerPlanApproval',
    },
  ];

  return (
    <>
      <Header title="Approval" />
      <Layout customStyles={{justifyContent: 'flex-start'}}>
        <Section data={data} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default Approval;
