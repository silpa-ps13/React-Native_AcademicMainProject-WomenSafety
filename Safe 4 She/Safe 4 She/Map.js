/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */import React, { Component } from 'react';
 import {StyleSheet, View, Dimensions,Text} from 'react-native';
 import Geolocation from "react-native-geolocation-service";
 import MapView,{PROVIDER_GOOGLE} from 'react-native-maps';
 import {AsyncStorage} from 'react-native'
 import { Marker } from 'react-native-maps';

class Map extends Component{
constructor(props){
super(props);
// let lat=0;
// let lon=0;
this.state={
  lat:0,
  log:0,

}

}


componentDidMount(){
  let latt="";
  let longg="";
  AsyncStorage.getItem('latitude', (error, value) => {
    if (value) {
        console.log("lat",value);
        latt=value;
        console.log('parse--',parseFloat(latt))
        this.setState({lat:parseFloat(latt)});
    }})
    AsyncStorage.getItem('longitude', (error, value) => {
      if (value) {
          console.log("long",value);
          longg=value;
          console.log('parse--',parseFloat(longg))
          this.setState({log:parseFloat(longg)})
      }})

}

renderScreen = () => {
return(
    <View style={styles.container}>
      
      <MapView
provider={PROVIDER_GOOGLE}
        style={styles.maps}
        initialRegion={{
          latitude: this.state.lat,
          longitude: this.state.log,
          latitudeDelta: 0.01,
          longitudeDelta: 0.0121,
        }}>
            <MapView.Marker
             title="You Are Here"
        coordinate={{
          latitude: this.state.lat,
          longitude: this.state.log,
        }} />
        <Text style={{color:"red"}}>Your Latitude :{this.state.lat}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Longitude :{this.state.log}</Text>
        </MapView>
      
    </View>
)
}
render() {
  return (
    
   this.renderScreen()
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
});export default Map;