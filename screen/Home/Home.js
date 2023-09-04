import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Button, Layout, TextInput, Header, Text} from '../../components';

const Home = ({navigation}) => {
  const data = [
    {
      img: require('../../src/attendance.jpg'),
      text: 'Attendance',
      nav: 'Attendance',
    },
    {
      img: require('../../src/leave.jpg'),
      text: 'Leave',
      nav: 'Leave',
    },
    {
      img: require('../../src/loan.jpg'),
      text: 'Loan',
      nav: 'Loan',
    },
  ];
  return (
    <>
      <Header title="Home" icon="notifications" />
      <Layout>
        <View style={styles.container}>
          {data.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.imgBtn}
              onPress={() => navigation.navigate(item.nav)}>
              <Image
                source={item.img}
                style={{width: '95%', height: '95%', borderRadius: 8}}
                resizeMode="cover"
              />
              <Text
                customStyles={{
                  textAlign: 'center',
                  width: '100%',
                  color: 'gray',
                }}>
                {item.text}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: '90%',
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imgBtn: {
    borderRadius: 8,
    width: '30%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
