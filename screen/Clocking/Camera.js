import React, {useState, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Image,
  Dimensions,
  StyleSheet,
  NativeModules,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Text, TextInput, Header, Button, Layout} from '../../components';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import Toast from 'react-native-toast-message';

const CameraScreen = ({navigation, route}) => {
  const {FaceRecognitionModule} = NativeModules;
  const {title, time} = route.params;
  const cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [numFaces, setNumFaces] = useState(0); // State to track the number of detected faces
  const [box, setBox] = useState(null);

  const takePicture = async () => {
    if (numFaces === 1) {
      // Allow taking a photo only if one face is detected
      if (cameraRef.current) {
        const options = {quality: 0.5, base64: true};
        const data = await cameraRef.current.takePictureAsync(options);
        setPhotoUri(data.uri);
      }
    } else {
      Toast.show({
        type: 'error',
        text2: 'Show only one face',
      });
    }
  };

  const handlerFace = ({faces}) => {
    // Count the number of detected faces
    setNumFaces(faces.length);

    if (faces[0]) {
      const face = faces[0];
      const centerX = face.bounds.origin.x + face.bounds.size.width / 2;
      const centerY = face.bounds.origin.y + face.bounds.size.height / 2;

      const boxWidth = face.bounds.size.width;
      const boxHeight = face.bounds.size.height;

      const newX = centerX - boxWidth / 2;
      const newY = centerY - boxHeight / 2;

      setBox({
        boxs: {
          width: boxWidth,
          height: boxHeight,
          x: newX,
          y: newY,
          yawAngle: face.yawAngle,
          rollAngle: face.rollAngle,
        },
        rightEyePosition: face.rightEyePosition,
        leftEyePosition: face.leftEyePosition,
        bottomMounthPosition: face.bottomMounthPosition,
      });
    } else {
      setBox(null);
    }
  };

  const detectFace = () => {
    navigation.navigate('sendClock', {
      title,
      time,
      photo: photoUri,
    });
  };

  return (
    <>
      <Header title="Clocking" back={() => navigation.goBack()} />
      <Layout>
        {photoUri ? (
          <Image
            source={{uri: photoUri}}
            style={{width: '100%', height: '70%'}}
          />
        ) : (
          <>
            <RNCamera
              ref={cameraRef}
              style={{width: '100%', height: '50%'}}
              type={RNCamera.Constants.Type.front}
              onFacesDetected={handlerFace}
              faceDetectionLandmarks={
                RNCamera.Constants.FaceDetection.Landmarks.all
              }
            />
          </>
        )}

        {photoUri === null ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
              width: '100%',
            }}>
            <Button onPress={takePicture} title="Take Photo" />
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Button onPress={detectFace} title="Send Photo" />
          </View>
        )}
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({});

export default CameraScreen;
