import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, TextInput, Header, Button, Layout} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';

const ProfileAccount = ({navigation}) => {
  const data = {
    name: 'John Doe',
    NIP: '12345',
    Branch: 'GH',
    BPJSKesehatan: '212313131231',
    BPJSKetenagaKerjaan: '123132131231',
    Gender: 'Male',
    Email: 'JohnDoe@gmail.com',
    Position: 'CEO',
    Superior: 'Doni Chrisdianto K',
    PhoneNumber: '086231231223',
  };

  const fontSize = RFValue(24);

  return (
    <>
      <Header title="Account" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Image
          source={require('../../src/ProfilePic.jpg')}
          style={{width: 100, height: 100, borderRadius: 100 / 2}}
        />
        <View style={styles.profileContainer}>
          <Text customStyles={{fontSize: fontSize}}>Information</Text>
          {Object.keys(data).map(key => (
            <View key={key} style={styles.row}>
              <Text style={styles.label}>{key}</Text>
              <TextInput
                value={data[key]}
                style={styles.value}
                editable={false}
              />
            </View>
          ))}
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    justifyContent: 'flex-start',
    paddingTop: 20,
    flex: 1,
    width: '100%',
  },
  row: {
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    width: '40%',
    fontWeight: 'bold',
  },
  value: {
    width: '60%',
  },
});

export default ProfileAccount;
