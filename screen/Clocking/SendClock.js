import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Header, Button, Layout} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import moment from 'moment';

const SendClock = ({route, navigation}) => {
  const {title, time} = route.params;

  return (
    <>
      <Header title={title} back={() => navigation.goBack()} />

      <Layout>
        <View>
          <Text>RESULT PHOTO</Text>
        </View>
        <View
          style={{
            width: '100%',
            paddingHorizontal: 16,
            borderWidth: 0.5,
            borderColor: '#F0F0F0',
            backgroundColor: '#F0F0F0',
            paddingVertical: 16,
          }}>
          <Text
            customStyles={{
              width: '100%',
              textAlign: 'center',
              fontSize: RFValue(24),
            }}>
            {time}
          </Text>
        </View>
        <View>
          <Text>GOOGLE MAP</Text>
        </View>
        <Button title="Send Result" />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default SendClock;
