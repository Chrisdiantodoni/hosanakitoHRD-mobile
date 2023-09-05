import React, {Component, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  Layout,
  TextInput,
  Header,
  Text,
  Section,
  RadioButton,
} from '../../components';
import Icon from 'react-native-vector-icons/Ionicons';

const LeaveFromOffice = ({navigation}) => {
  const [selectedOption, setSelectedOption] = useState('Keperluan Pribadi');

  const handleRadioSelect = option => {
    setSelectedOption(option);
  };

  const RenderKeperluanPribadi = () => {
    return (
      <View style={{display: 'flex', width: '100%', marginTop: 20}}>
        <View style={styles.ViewRender}>
          <View style={styles.subContainerViewRender}>
            <Text>From</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TextInput />
              <Icon
                name="time-outline"
                size={25}
                color={'#a60f21'}
                style={{position: 'absolute', paddingRight: 10}}
              />
            </View>
          </View>
          <View style={styles.subContainerViewRender}>
            <Text>To</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TextInput />
              <Icon
                name="time-outline"
                size={25}
                color={'#a60f21'}
                style={{position: 'absolute', paddingRight: 10}}
              />
            </View>
          </View>
        </View>
        <Text>Description</Text>
        <TextInput />

        <Button title="request" />
      </View>
    );
  };
  const RenderDinasKerjaLuar = () => {
    return (
      <View style={{display: 'flex', width: '100%', marginTop: 20}}>
        <View style={styles.ViewRender}>
          <View style={styles.subContainerViewRender}>
            <Text>Origin</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TextInput />
            </View>
          </View>
          <View style={styles.subContainerViewRender}>
            <Text>Out</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TextInput />
              <Icon
                name="time-outline"
                size={25}
                color={'#a60f21'}
                style={{position: 'absolute', paddingRight: 10}}
              />
            </View>
          </View>
        </View>
        <View style={styles.ViewRender}>
          <View style={styles.subContainerViewRender}>
            <Text>Destination</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TextInput />
            </View>
          </View>
          <View style={styles.subContainerViewRender}>
            <Text>Arrive</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <TextInput />
              <Icon
                name="time-outline"
                size={25}
                color={'#a60f21'}
                style={{position: 'absolute', paddingRight: 10}}
              />
            </View>
          </View>
        </View>
        <Text>Description</Text>
        <TextInput />
        <Text>Instruction</Text>
        <TextInput />
        <Button title="request" />
      </View>
    );
  };

  return (
    <>
      <Header title="Leave From Office" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Leaving for</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <RadioButton
            label="Keperluan Pribadi"
            selected={selectedOption === 'Keperluan Pribadi'}
            onSelect={() => handleRadioSelect('Keperluan Pribadi')}
          />
          <RadioButton
            label="Dinas Kerja Luar"
            selected={selectedOption === 'Dinas Kerja Luar'}
            onSelect={() => handleRadioSelect('Dinas Kerja Luar')}
          />
        </View>
        {selectedOption === 'Keperluan Pribadi' ? (
          <RenderKeperluanPribadi />
        ) : (
          <RenderDinasKerjaLuar />
        )}
      </Layout>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  ViewRender: {
    justifyContent: 'space-between',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  subContainerViewRender: {
    width: '45%',
  },
});

//make this component available to the app
export default LeaveFromOffice;
