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
      nav: {
        name: 'ApprovalList',
        params: {
          title: 'Overtime List',
          navi_name: 'OvertimeApproval',
          data: [
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              date: '2023-08-23',
              start: '19:00',
              end: '20:00',
              status: 'APPROVE',
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              date: '2023-08-23',
              start: '19:00',
              end: '20:00',
              status: 'APPROVE',
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              date: '2023-08-23',
              start: '19:00',
              end: '20:00',
              status: 'APPROVE',
            },
          ],
          headers: [
            'No',
            'NIP',
            'FULL NAME',
            'POSITION',
            'DEPARTMENT',
            'OVERTIME DATE',
            'OVERTIME START',
            'OVERTIME END',
            'STATUS',
          ],
        },
      },
    },
    {
      name: 'Leave',
      nav: {
        name: 'ApprovalList',
        navi_name: 'LeaveRequest',
        params: {
          title: 'Leave List',
          data: [
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              from: '2023-08-23',
              To: '2023-08-23',
              status: 'APPROVE',
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              from: '2023-08-23',
              To: '2023-08-23',
              status: 'APPROVE',
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              from: '2023-08-23',
              To: '2023-08-23',
              status: 'APPROVE',
            },
          ],
          headers: [
            'No',
            'NIP',
            'FULL NAME',
            'POSITION',
            'DEPARTMENT',
            'FROM',
            'TO',
            'STATUS',
          ],
        },
      },
    },
    {
      name: 'Permit Leave Office',
      nav: {
        name: 'ApprovalList',
        params: {
          title: 'Permit Leave Office',
          navi_name: 'PermitLeaveApproval',
          data: [
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              leave_for: 'Keperluan Pribadi',
              status: 'APPROVE',
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              leave_for: 'Keperluan Pribadi',
              status: 'APPROVE',
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              leave_for: 'Keperluan Pribadi',
              status: 'APPROVE',
            },
          ],
          headers: [
            'No',
            'NIP',
            'FULL NAME',
            'POSITION',
            'DEPARTMENT',
            'LEAVE FOR',
            'STATUS',
          ],
        },
      },
    },
    {
      name: 'Loan',
      nav: {
        name: 'ApprovalList',
        params: {
          title: 'Loan',
          navi_name: 'LoanApproval',
          data: [
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              DATE: '2023-08-23',
              Assurance: 'BPKB',
              Nominal_loan: 3000000,
              Installment: 12,
              paid_month: 250000,
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              DATE: '2023-08-23',
              Assurance: 'BPKB',
              Nominal_loan: 3000000,
              Installment: 12,
              paid_month: 250000,
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              DATE: '2023-08-23',
              Assurance: 'BPKB',
              Nominal_loan: 3000000,
              Installment: 12,
              paid_month: 250000,
            },
            {
              NIP: '1808003',
              full_name: 'ZUL',
              position: 'STAFF ACC',
              department: 'HO',
              DATE: '2023-08-23',
              Assurance: 'BPKB',
              Nominal_loan: 3000000,
              Installment: 12,
              paid_month: 250000,
            },
          ],
          headers: [
            'No',
            'NIP',
            'FULL NAME',
            'POSITION',
            'DEPARTMENT',
            'DATE',
            'ASSURANCE',
            'NOMINAL LOAN',
            'INSTALLMENT',
            'PAID / MONTH',
          ],
        },
      },
    },
    {
      name: 'Man Power Plan',
      nav: {
        name: 'ApprovalList',
        params: {
          title: 'Man Power Plan',
          navi_name: 'ManPowerPlanApproval',
          data: [
            {
              SUBMITTED_BY: 'ZUL',
              full_name: '180003',
              department: 'HO',
              Needed: 3,
              Position: 'Admin Pajak',
              status: 'Approve',
            },
            {
              SUBMITTED_BY: 'ZUL',
              full_name: '180003',
              department: 'HO',
              Needed: 3,
              Position: 'Admin Pajak',
              status: 'Approve',
            },
            {
              SUBMITTED_BY: 'ZUL',
              full_name: '180003',
              department: 'HO',
              Needed: 3,
              Position: 'Admin Pajak',
              status: 'Approve',
            },
          ],
          headers: [
            'No',
            'SUBMITTED BY',
            'NIP',
            'DEPARTMENT',
            'NEEDED',
            'POSITION',
            'STATUS',
          ],
        },
      },
    },
  ];

  return (
    <>
      <Header title="Approval" />
      <Layout customStyles={{justifyContent: 'flex-start'}}>
        <Section data={data} account={true} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default Approval;
