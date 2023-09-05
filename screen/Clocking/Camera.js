import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, TextInput, Header, Button, Layout} from '../../components';

const Camera = ({navigation, route}) => {
  const {title, time} = route.params;
  return (
    <>
      <Header title={title} back={() => navigation.goBack()} />
      <Layout>
        <Text>Camera</Text>
        <Button
          title="Send Result"
          onPress={() =>
            navigation.navigate('sendClock', {
              title,
              time,
            })
          }
        />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default Camera;
