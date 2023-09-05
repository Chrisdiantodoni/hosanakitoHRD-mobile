import React, {Component, useState, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  Button,
  Layout,
  TextInput,
  Header,
  Text,
  CustomModal,
} from '../components';
import {currency} from '../utils';
import * as ImagePicker from 'react-native-image-picker';

const Loan = ({navigation}) => {
  const [response, setResponse] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loan, setLoan] = useState('');
  const [installment, setInstallment] = useState('');
  const [assurance, setAssurance] = useState('');

  const cameraOptions = {
    mediaType: 'photo',
    includeBase64: false,
  };

  // Options for selecting an image from the gallery
  const libraryOptions = {
    mediaType: 'photo',
    includeBase64: false,
    selectionLimit: 1, // Limit to one selection from the gallery
  };

  const onCapturePress = () => {
    ImagePicker.launchCamera(cameraOptions, setResponse);
  };

  const onGalleryPress = () => {
    ImagePicker.launchImageLibrary(libraryOptions, setResponse);
  };

  const calculatePaidMonth = () => {
    if (loan && installment) {
      const loanAmount = parseFloat(loan);
      const installmentAmount = parseFloat(installment);

      if (
        !isNaN(loanAmount) &&
        !isNaN(installmentAmount) &&
        installmentAmount !== 0
      ) {
        const paidPerMonth = loanAmount / installmentAmount;
        return currency(paidPerMonth);
      }
    }
    return '';
  };

  return (
    <>
      <Header title="Loan" back={() => navigation.goBack()} />
      <Layout customStyles={{justifyContent: 'flex-start', paddingTop: 20}}>
        <Text>Loan Nominal</Text>
        <TextInput
          type={'number-pad'}
          value={loan}
          onChangeText={text => setLoan(text)}
        />
        <Text>Installment</Text>
        <TextInput
          type={'number-pad'}
          value={installment}
          onChangeText={text => setInstallment(text)}
        />
        <Text>Paid / Month</Text>
        <TextInput
          type={'number-pad'}
          disabled={false}
          value={calculatePaidMonth()}
        />
        <Text>Assurance</Text>
        <TextInput
          value={assurance}
          onChangeText={text => setAssurance(text)}
        />
        <TouchableOpacity
          onPress={() => setIsModalVisible(!isModalVisible)}
          style={[
            styles.imageContainer,
            {
              width: width - 40,
              height: (width - 40) * 0.5,
              justifyContent: 'center',
              backgroundColor: '#F0F0F0',
              alignItems: 'center',
              padding: 10,
            },
          ]}>
          <Text customStyles={{alignSelf: 'center'}}>
            Upload or Select from Gallery
          </Text>
        </TouchableOpacity>
        <CustomModal
          title={'Upload Image'}
          visible={isModalVisible}
          onClose={() => setIsModalVisible(!isModalVisible)}>
          <View style={{alignItems: 'center'}}>
            <Button onPress={onCapturePress} title={'Capture Image'}></Button>
            <Button
              onPress={onGalleryPress}
              title={'Select From Gallery'}></Button>
          </View>
        </CustomModal>

        {response?.assets &&
          response?.assets.map(({uri}) => (
            <View key={uri} style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{uri: uri}}
              />
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
});

export default Loan;
