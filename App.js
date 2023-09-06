import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Button, TextInput} from './components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginPage,
  Loan,
  ForgetPassword,
  Home,
  Account,
  Approval,
  Attendance,
  Leave,
  ChangePassword,
  ProfileAccount,
  Notification,
  Clocking,
  SendClock,
  Camera,
  LeaveFromOffice,
  LeaveHistory,
  PermitLeaveOfficeHistory,
  LeaveRequest,
  Overtime,
  ClockingResult,
  OvertimeHistory,
  LeaveApproval,
  ManPowerPlanApproval,
  LoanApproval,
  OvertimeApproval,
  PermitLeaveOfficeApproval,
  ApprovalList,
  LeaveList,
} from './screen';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {RFValue} from 'react-native-responsive-fontsize';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Approval') {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#a60f21',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: props => <Text style={{color: props.color}}>Home</Text>,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Approval"
        component={Approval}
        options={{
          tabBarLabel: props => (
            <Text style={{color: props.color}}>Approval</Text>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: props => (
            <Text style={{color: props.color}}>Account</Text>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: '#198754'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize: RFValue(15),
        fontWeight: '400',
        color: '#198754',
      }}
    />
  ),

  error: props => (
    <ErrorToast
      style={{borderLeftColor: '#CC0000'}}
      {...props}
      text1Style={{
        fontSize: RFValue(17),
        fontWeight: '400',
        color: '#CC0000',
      }}
      text2Style={{
        fontSize: RFValue(15),
        fontWeight: '400',
        color: '#CC0000',
      }}
    />
  ),
};

function App(props) {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginPage}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ForgetPassword"
            component={ForgetPassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Tabs"
            component={MyTabs}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Attendance"
            component={Attendance}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Loan"
            component={Loan}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Leave"
            component={Leave}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Notifications"
            component={Notification}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ChangePassword"
            component={ChangePassword}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ProfileAccount"
            component={ProfileAccount}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Clocking"
            component={Clocking}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="sendClock"
            component={SendClock}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Camera"
            component={Camera}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PermitLeaveRequest"
            component={LeaveFromOffice}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LeaveHistory"
            component={LeaveHistory}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PermitLeaveHistory"
            component={PermitLeaveOfficeHistory}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LeaveRequest"
            component={LeaveRequest}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Overtime"
            component={Overtime}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ClockingResult"
            component={ClockingResult}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="OvertimeHistory"
            component={OvertimeHistory}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LeaveApproval"
            component={LeaveApproval}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ManPowerPlanApproval"
            component={ManPowerPlanApproval}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LoanApproval"
            component={LoanApproval}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="OvertimeApproval"
            component={OvertimeApproval}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="PermitLeaveApproval"
            component={PermitLeaveOfficeApproval}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ApprovalList"
            component={ApprovalList}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LeaveList"
            component={LeaveList}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C0C0C0',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
