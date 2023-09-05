import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text, TextInput, Header, Button, Layout} from '../../components';
import Icon from 'react-native-vector-icons/dist/FontAwesome6';
import {styles} from '../../utils';

const ChangePassword = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  return (
    <>
      <Header title="Change Password" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text> Old Password</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            onChangeText={text => setPassword(text)}
            secureTextEntry={showPassword}
            value={password}
            customStyles={{paddingRight: 40}}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.iconContainer}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={25} />
          </TouchableOpacity>
        </View>
        <Text>New Password</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            onChangeText={text => setNewPassword(text)}
            secureTextEntry={showNewPassword}
            value={newPassword}
            customStyles={{paddingRight: 40}}
          />
          <TouchableOpacity
            onPress={() => setShowNewPassword(!showNewPassword)}
            style={styles.iconContainer}>
            <Icon name={showNewPassword ? 'eye-slash' : 'eye'} size={25} />
          </TouchableOpacity>
        </View>
        <Text>Confirm New Password</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TextInput
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry={showConfirmPassword}
            value={confirmPassword}
            customStyles={{paddingRight: 40}}
          />
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.iconContainer}>
            <Icon name={showConfirmPassword ? 'eye-slash' : 'eye'} size={25} />
          </TouchableOpacity>
        </View>
        {newPassword !== confirmPassword ? (
          <Text
            customStyles={{
              color: 'red',
              textAlign: 'center',
              width: '100%',
              paddingVertical: 20,
            }}>
            Password not Match
          </Text>
        ) : null}
        <Button title="Change Password" />
      </Layout>
    </>
  );
};

export default ChangePassword;
