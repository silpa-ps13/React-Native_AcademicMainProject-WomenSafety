'use strict';
import React, { PureComponent } from 'react';
import {  Button, StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons'
import CameraRoll from "@react-native-community/cameraroll";

export default class Video_page extends PureComponent {
constructor(props){
    super(props)
    this.state={
recording:false,
processing:false,
    }
}
    
async startRecording() {
    console.log("recording started")
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();
    CameraRoll.save(uri, 'video').then(onfulfilled => {
        alert("Video saved to device")
    }).catch(error => {
      console.log("error=",error)
    });
    console.log("uri-->",uri)
}

stopRecording() {
    this.camera.stopRecording();
    console.log("recording stopped")
    this.startRecording.bind(this)
}
    
    render() {
     const { recording, processing } = this.state;
    
        let button = (
          <TouchableOpacity style={{height:50,width:100,backgroundColor:"#3c0a2e",alignItems:"center",justifyContent:"center",borderRadius:10}}
          
            onPress={this.startRecording.bind(this)}
            
          >
            <Text style={{ fontSize: 14,color:"#ccc" }}> RECORD </Text>
          </TouchableOpacity>
        );
    
        if (recording) {
          button = (
            <TouchableOpacity style={{height:50,width:100,backgroundColor:"#3c0a2e",alignItems:"center",justifyContent:"center",borderRadius:10}}
              onPress={this.stopRecording.bind(this)}
              
            //   style={styles.capture}
            >
              <Text style={{ fontSize: 14 ,color:"#ccc"}}> STOP </Text>
            </TouchableOpacity>
          );
        }
    
        if (processing) {
          button = (
            <View>

              <Text>Processing</Text>
            </View>
          );
        }
        
    
        return (
          <View >
            <RNCamera style={{width:Dimensions.get("window").width,height:540}}
              ref={ref => {
                this.camera = ref;
              }}
            
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.off}
              
            />
            <View style={{height:80,flexDirection: 'row', alignItems:"center",justifyContent: 'center' ,backgroundColor:"black"}}>
                {button}
              </View>
            
          </View>
        );

        
      }
}
