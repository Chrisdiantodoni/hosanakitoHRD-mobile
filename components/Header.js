import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, icon, back}) => {
  const fontSize = RFValue(20);
  const headerStyle = {
    ...styles.header,
    justifyContent: back ? 'flex-start' : 'space-between',
  };
  const navigation = useNavigation();
  return (
    <View style={headerStyle}>
      {back ? (
        <TouchableOpacity onPress={back}>
          <Icon name="chevron-back" size={25} color={'#FFF'} />
        </TouchableOpacity>
      ) : null}
      <Text
        style={[
          styles.headerText,
          {fontSize: fontSize, marginLeft: back ? 20 : 0},
        ]}>
        {title}
      </Text>
      {icon ? (
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Icon name={icon} size={25} color={'#FFF'} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#a60f21',
    height: 60,
    paddingHorizontal: 0,
    width: '100%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24, // Change to your desired font size
    color: 'white', // Change to your desired text color
    fontWeight: 'bold', // You can adjust the font weight
  },
});

export default Header;
