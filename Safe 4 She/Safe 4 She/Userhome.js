import React, { Component,useEffect } from 'react'
import { SafeAreaView,
  StyleSheet, ScrollView,Text, View ,Image, TouchableHighlight,Linking,TouchableOpacity,Button} from 'react-native'
import Geolocation from "react-native-geolocation-service";
import {AsyncStorage} from 'react-native'
import Torch from 'react-native-torch';
import Sound from 'react-native-sound';

var psw=require('./images/help.png');
var hb=require('./images/HB.png');
var fla=require('./images/flash.png');
var si=require('./images/si.png');
export default class Userhome extends Component {
  constructor(props){
    super(props);
    this.state={
        phno1:"",
        isTorchOn: false,
        
    };
}
_handlePress() {
  const { isTorchOn } = this.state;
  Torch.switchState(!isTorchOn);
  this.setState({ isTorchOn: !isTorchOn });
} 
componentDidMount(){
      Geolocation.getCurrentPosition(
    position => {
        AsyncStorage.setItem('latitude', position.coords.latitude+"").then(()=>{
            console.log("set storage")
          })
          AsyncStorage.setItem('longitude', position.coords.longitude+"").then(()=>{
            console.log("set storage")
          })
      console.log("lattitide=",position.coords.latitude,"longitude",position.coords.longitude)
     


    },
    error => {
      console.log(error.message.toString())
    //  Alert.alert(error.message.toString());
    },
    {
      showLocationDialog: true,
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );

     
    }

    render() {
        return (
            <View style={{flex:1,alignItems:'center',backgroundColor:"#fff" }}>
               <Image source={psw}
                    style={{height:200,width:200,}}></Image>
                <TouchableOpacity   onPress={()=>{
        Linking.openURL(`tel:${this.state.phno1}`)
    }
    }><Image source={hb}
                    style={{height:300,width:300,alignItems:'center',marginLeft:20}}></Image></TouchableOpacity>
                      <TouchableOpacity   style={{flex:1,}}
          
        onPress={this._handlePress.bind(this)} ><Image source={fla} 
         style={{height:50,width:50,backgroundColor:"#122836",borderRadius:30,tintColor:"#ccc"}} ></Image>
        </TouchableOpacity>
        <View><TouchableOpacity  onPress={()=>this.props.navigation.navigate('alarm')}><Image source={si} style={{height:50,width:50,backgroundColor:"#122836",borderRadius:30,marginBottom:60}}></Image></TouchableOpacity></View>
        </View>
      
        )
    }
}
