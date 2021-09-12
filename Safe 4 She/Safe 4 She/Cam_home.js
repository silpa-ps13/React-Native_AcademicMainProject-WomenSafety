import React, { Component } from 'react'
import { Button, ImageBackground, Text, View ,TouchableHighlight,Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
var logo=require('./images/cam.jpg');

export default class Cam_home extends Component {
    render() {
        return (
            <View style={{flex:1,alignItems:'center',backgroundColor:"#fff"}}>
            <Image source={logo}
                  style={{height:220,width:220,marginTop:50}}></Image>
            <TouchableHighlight  style={{backgroundColor:"#3c0a2e",width:250,height:50,alignItems:'center',justifyContent:"center",borderRadius:10,marginTop:80}}
      onPress={()=>this.props.navigation.navigate('pic')}
       ><View style={{flexDirection:"row"}}><Icon name="image-outline" size={30} color="#ccc" /><Text style={{color:"#ccc",fontSize:20}}>  Take Photo</Text></View></TouchableHighlight>
        <TouchableHighlight  style={{backgroundColor:"#3c0a2e",width:250,height:50,alignItems:'center',justifyContent:"center",borderRadius:10,marginTop:50}}
      onPress={()=>this.props.navigation.navigate('vdeo')}
      ><View style={{flexDirection:"row"}}><Icon name="videocam-outline" size={30} color="#ccc" /><Text style={{color:"#ccc",fontSize:20}}>  Record Video</Text></View></TouchableHighlight>
      
   
   
</View>


        )
    }
}
