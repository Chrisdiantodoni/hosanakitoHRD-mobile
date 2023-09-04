import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Button, TextInput} from './components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  LoginPage,
  ForgetPassword,
  Loan,
  Home,
  Account,
  Approval,
} from './screen';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="house" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Approval"
        component={Approval}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="dochub" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="circle-user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
      </Stack.Navigator>
    </NavigationContainer>
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
