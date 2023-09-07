import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, icon, back}) => {
  const fontSize = RFValue(20);

  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {back ? (
          <TouchableOpacity onPress={back}>
            <Icon name="chevron-back" size={25} color={'#FFF'} />
          </TouchableOpacity>
        ) : null}
      </View>
      <Text
        style={[
          styles.headerText,
          {
            fontSize: fontSize,
          },
        ]}>
        {title}
      </Text>
      <View style={styles.rightContainer}>
        {icon ? (
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Icon name={icon} size={25} color={'#FFF'} />
          </TouchableOpacity>
        ) : null}
      </View>
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
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontWeight: '700',
  },
  leftContainer: {
    position: 'absolute',
    left: 0,
    paddingLeft: 16,
  },
  rightContainer: {
    position: 'absolute',
    right: 0,
    paddingRight: 16,
  },
});

export default Header;
