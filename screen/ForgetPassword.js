import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Text, Layout, Button, TextInput} from '../components';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const [isVerifying, setIsVerifying] = useState(false);

  const handleVerifying = () => {
    setIsVerifying(!isVerifying);
  };

  return (
    <Layout>
      <Image
        source={require('../src/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text>E-mail</Text>
      <TextInput
        type="email-address"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text>OTP</Text>
      <TextInput
        type="number-pad"
        onChangeText={text => setOtp(text)}
        value={otp}
      />
      <Button
        title={
          isVerifying ? <ActivityIndicator color={'white'} /> : 'Verifying'
        }
        onPress={handleVerifying}
      />

      {isVerifying ? (
        <>
          <Text>New Password</Text>
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <Button title="Change Password" />
        </>
      ) : null}
    </Layout>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  logo: {
    width: 500,
    height: 300,
  },
});

export default ForgetPassword;
