import Geolocation from '@react-native-community/geolocation';

// Inside your component or function
const getLocation = () => {
  Geolocation.getCurrentPosition(
    position => {
      const {latitude, longitude} = position.coords;
      // Now you have the latitude and longitude, you can update your state or use it as needed.
    },
    error => {
      console.log('Error getting location:', error);
    },
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
};

export default getLocation;
