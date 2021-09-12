import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'
import Splash from './Splash';
import indexpage from './indexpage';
import Register_page from './Register_page';
import Home_drawer from './Home_drawer';
import Forgotpass from './Forgotpass';
import Resetpass from './Resetpass';
import Cam_page from './Cam_page';
import Video_page from './Video_page';
import TermsCon from './TermsCon';
import Profile from './Profile';
import Contact from './Contact';
import Contactlist from './Contactlist';
import Alarm from './Alarm';


const stck=createStackNavigator();
export default class Home_stack extends Component {
    
    render() {
        return (
            <NavigationContainer>
                <stck.Navigator  screenOptions={{
    headerShown: false
  }}> 
  <stck.Screen name="splash" component={Splash}    
            ></stck.Screen>
                <stck.Screen name="index" component={indexpage}    
            ></stck.Screen>
             <stck.Screen name="terms" component={TermsCon}    
            ></stck.Screen>
                <stck.Screen name="register" component={Register_page}></stck.Screen>
                <stck.Screen name="home" component={Home_drawer}    screenOptions={{
              headerShown: true 
            }}></stck.Screen>
            <stck.Screen name="forgot" component={Forgotpass}></stck.Screen>
            <stck.Screen name="reset" component={Resetpass}></stck.Screen>
            <stck.Screen name="profile" component={Profile}></stck.Screen>
            <stck.Screen name="pic" component={Cam_page}></stck.Screen>
            <stck.Screen name="vdeo" component={Video_page}></stck.Screen>
            <stck.Screen name="contactlist" component={Contactlist}></stck.Screen>
            <stck.Screen name="alarm" component={Alarm}></stck.Screen>
       
                </stck.Navigator>
            </NavigationContainer>
        )
    }
}
