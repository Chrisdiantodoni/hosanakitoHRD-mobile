import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions, Permission} from 'react-native';
import {
  Text,
  TextInput,
  Header,
  Button,
  Layout,
  MapScreen,
} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import moment from 'moment';
import Geolocation from '@react-native-community/geolocation';
import MapView from 'react-native-maps';
import {Marker, Circle} from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';

const SendClock = ({route, navigation}) => {
  const {title, time, photo} = route.params;
  const [userLocation, setUserLocation] = useState(null);
  const [mapReady, setMapReady] = useState(false);

  console.log(photo);

  useEffect(() => {
    let isMounted = true;
    const getUserLocation = () => {
      Geolocation.getCurrentPosition(position => {
        // const latitude = 3.590482;
        // const longitude = 98.653645;
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log({longitude, latitude});
        setUserLocation({latitude, longitude});
      });
    };

    getUserLocation();

    return () => {
      isMounted = false; // Mark the component as unmounted
    };
  }, [mapReady]);

  const initialRegion = {
    latitude: 3.5895107,
    longitude: 98.6549554,
    latitudeDelta: 0.003,
    longitudeDelta: 0.003,
  };
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000;
    return distance;
  };
  const distanceFromInitialRegion = calculateDistance(
    initialRegion.latitude,
    initialRegion.longitude,
    userLocation?.latitude || 0,
    userLocation?.longitude || 0,
  );
  const handleSendResult = async () => {
    if (distanceFromInitialRegion >= 100) {
      Toast.show({
        type: 'error',
        text2: 'You are out of reach',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Success send clocking time',
      });
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigation.navigate('Home');
    }
  };

  return (
    <>
      <Header title={title} back={() => navigation.goBack()} />
      <Layout>
        <Image source={{uri: photo}} style={{width: '100%', height: 400}} />
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
            {time}
          </Text>
        </View>
        <MapView
          style={styles.map}
          initialRegion={initialRegion}
          onMapReady={() => setMapReady(true)}>
          {mapReady && userLocation && (
            <>
              <Marker coordinate={userLocation} title="Your Location">
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    backgroundColor: '#2b5ce2',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: 'white',
                    borderWidth: 2,
                  }}>
                  <View
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: 2.5,
                      backgroundColor: '#2b5ce2',
                    }}
                  />
                </View>
              </Marker>
              <Circle
                center={initialRegion}
                radius={100}
                strokeColor="#2b5ce2"
                fillColor="#2b5ce250"
              />
            </>
          )}
        </MapView>
        <Button title="Send Result" onPress={handleSendResult} />
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 200,
  },
});

export default SendClock;
