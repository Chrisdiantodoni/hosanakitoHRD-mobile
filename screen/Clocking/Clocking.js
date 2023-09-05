import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, TextInput, Header, Button, Layout} from '../../components';
import moment from 'moment/moment';
import {RFValue} from 'react-native-responsive-fontsize';

const Clocking = ({navigation}) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = moment(currentTime).format('DD MMM YYYY h:mm:ss A');

  return (
    <>
      <Header title="Clocking" back={() => navigation.goBack()} />
      <Layout>
        <Image
          source={require('../../src/Logo.png')}
          style={{width: 500, height: 300}}
          resizeMode="contain"
        />
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
            {formattedTime}
          </Text>
        </View>

        <View style={styles.containerBtn}>
          <Button
            title="Clock-in"
            customStyles={{width: '100%'}}
            onPress={() =>
              navigation.navigate('Camera', {
                title: 'Clock-in',
                time: formattedTime,
              })
            }
          />
          <Button
            title="Clock-out"
            customStyles={{width: '100%'}}
            onPress={() =>
              navigation.navigate('Camera', {
                title: 'Clock-out',
                time: formattedTime,
              })
            }
          />
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  containerBtn: {
    flexDirection: 'row',
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Clocking;
