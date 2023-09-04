import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button, TextInput, Layout, Text} from '../components';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(true);

  const handleEmail = text => {
    setEmail(text);
  };
  const handlePassword = text => {
    setPassword(text);
  };

  return (
    <Layout>
      <Image
        source={require('../src/Logo.png')}
        style={{width: '75%', height: '50%'}}
        resizeMode="contain"
      />
      <Text>E-mail</Text>
      <TextInput type="email" onChangeText={handleEmail} value={email} />
      <Text>Password</Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextInput
          onChangeText={handlePassword}
          secureTextEntry={isShow}
          value={password}
          customStyles={{paddingRight: 40}}
        />
        <TouchableOpacity
          onPress={() => setIsShow(!isShow)}
          style={styles.iconContainer}>
          <Icon name={isShow ? 'eye-slash' : 'eye'} size={25} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{alignSelf: 'flex-end'}}
        onPress={() => navigation.navigate('ForgetPassword')}>
        <Text customStyles={{fontSize: 16}}>Forget Password?</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={() => navigation.navigate('Tabs')} />
    </Layout>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    right: 10,
  },
});

export default LoginPage;
