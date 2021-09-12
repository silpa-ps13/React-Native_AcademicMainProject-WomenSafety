'use strict';
import React, { PureComponent } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View ,Image} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons'
import CameraRoll from "@react-native-community/cameraroll";
var back=require('./images/arrow_back.png')
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);






export default class Cam_page extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
          {({ camera, status, recordAudioPermissionStatus }) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center',backgroundColor:"#3c0a2e" ,marginBottom:40,borderRadius:100}}>
                
                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                  <Text style={{ fontSize: 18,color:"#ccc" }}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
    );
  }

  takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    //  eslint-disable-next-line
   // ToastAndroid.show(data.uri, ToastAndroid.SHORT);
   CameraRoll.save(data.uri, 'photo').then(onfulfilled => {
    console.log("run camera")
    alert("image saved to device")
}).catch(error => {
  console.log("error=",error)
});
    
    console.log(data.uri);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
  
    borderRadius: 10,
 
    alignSelf: 'center',
    margin: 10,
  },
});