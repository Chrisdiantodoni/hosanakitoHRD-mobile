import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Button,
  Layout,
  TextInput,
  Header,
  Text,
  Section,
  DropdownPicker,
  DateTimePicker,
  CustomModal,
} from '../../components';
import * as ImagePicker from 'react-native-image-picker';
import {RFValue} from 'react-native-responsive-fontsize';

const LeaveRequest = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('Cuti tidak dibayar');
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const balance = 12;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [response, setResponse] = useState(null);
  const calculateWorkDays = () => {
    const timeDifference = to - from;
    const difference = timeDifference / (1000 * 60 * 60 * 24);
    return difference.toString();
  };

  const options = [
    {
      label: 'Cuti tidak dibayar',
      value: 'Cuti tidak dibayar',
    },
    {
      label: 'Cuti sakit',
      value: 'Cuti sakit',
    },
    {
      label: 'Cuti melahirkan',
      value: 'Cuti melahirkan',
    },
    {
      label: 'Cuti kemalangan',
      value: 'Cuti kemalangan',
    },
    {
      label: 'Cuti tahunan',
      value: 'Cuti tahunan',
    },
  ];

  const cameraOptions = {
    mediaType: 'photo',
    includeBase64: false,
  };

  const libraryOptions = {
    mediaType: 'photo',
    includeBase64: false,
    selectionLimit: 1,
  };

  const onCapturePress = () => {
    ImagePicker.launchCamera(cameraOptions, setResponse);
    setIsModalVisible(false);
  };

  const onGalleryPress = () => {
    ImagePicker.launchImageLibrary(libraryOptions, setResponse);
    setIsModalVisible(false);
  };

  return (
    <>
      <Header title="Leave Request" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Leaving for</Text>
        <DropdownPicker
          options={options}
          selectedValue={selectedValue}
          onValueChange={value => setSelectedValue(value)}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{width: '48%'}}>
            <Text>From</Text>
            <DateTimePicker
              value={from}
              onChange={value => setFrom(value)}
              mode="date"
              placeholder="Select Date"
              iconColor="#a60f21"
            />
          </View>
          <View style={{width: '48%'}}>
            <Text>To</Text>
            <DateTimePicker
              value={to}
              onChange={value => setTo(value)}
              mode="date"
              placeholder="Select Date"
              iconColor="#a60f21"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View style={{width: '48%'}}>
            <Text>Balance</Text>
            <TextInput value={balance.toString()} editable={false} />
          </View>
          <View style={{width: '48%'}}>
            <Text>Number of working days</Text>
            <TextInput value={calculateWorkDays()} />
          </View>
        </View>
        <Text>Address / Phone number to contact</Text>
        <TextInput />
        <Text>Substitute (NIP)</Text>
        <TextInput />
        {selectedValue === 'Cuti sakit' || response?.assets?.uri ? (
          <Button
            title={'Upload Photo'}
            onPress={() => setIsModalVisible(!isModalVisible)}
          />
        ) : response?.assets?.uri != null ? null : null}
        <CustomModal
          title={'Upload Image'}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(!isModalVisible)}>
          <View
            style={{alignItems: 'center', flexDirection: 'row', width: '35%'}}>
            <Button onPress={onCapturePress} title={'Capture Image'}></Button>
            <Button
              onPress={onGalleryPress}
              title={'Select From Gallery'}></Button>
          </View>
        </CustomModal>
        {response?.assets &&
          response?.assets.map(({uri, index}) => (
            <View key={uri} style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{uri: uri}}
              />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setResponse(null)}>
                <Text customStyles={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
        <Button title={'Request'} />
      </Layout>
    </>
  );
};
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  image: {
    width: width - 40, // Set the image width based on screen width minus some padding
    height: (width - 40) * 0.75, // Set the height to maintain aspect ratio
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: RFValue(20),
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default LeaveRequest;
