import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons'
import Userhome from './Userhome';
import Profile from './Profile';
import Contact from './Contact';
import Cam_home from './Cam_home'
import Map from './Map';
import { createStackNavigator } from '@react-navigation/stack';
import Logout from './Logout';
import Choosepic from './Choosepic';

const dw=createDrawerNavigator();
const Stack=createStackNavigator();


const homestack=({navigation})=> (
    
      
    <Stack.Navigator>
    
    <Stack.Screen 
        name='home'
        component={Userhome}
        options={{ 
    headerLeft:()=>(
<Icon.Button name='ios-menu' size={25} backgroundColor="#003445" 
onPress={()=>{navigation.openDrawer()}}
></Icon.Button>
)
}}
      />
      </Stack.Navigator>

)


const profilestack=({navigation})=> (
      
    <Stack.Navigator>
    
    <Stack.Screen
        name='profile'
        component={Profile}
        options={{ 
    headerLeft:()=>(
<Icon.Button name='ios-menu' size={25} backgroundColor="#003445" 
onPress={()=>{navigation.openDrawer()}}
></Icon.Button>
)
}}
      />
          <Stack.Screen options={{ headerShown: false }}
        name='profilepic'
        component={Choosepic}
        />
      </Stack.Navigator>

)




const contactstack=({navigation})=> (
    
      
    <Stack.Navigator>
    
    <Stack.Screen
        name='contact'
        component={Contact}
        options={{ 
    headerLeft:()=>(
<Icon.Button name='ios-menu' size={25} backgroundColor="#003445" 
onPress={()=>{navigation.openDrawer()}}
></Icon.Button>
)
}}
      />
      </Stack.Navigator>

)



const camerastack=({navigation})=> (
    
      
    <Stack.Navigator>
    
    <Stack.Screen
        name='camara'
        component={Cam_home}
        options={{ 
    headerLeft:()=>(
<Icon.Button name='ios-menu' size={25} backgroundColor="#003445" 
onPress={()=>{navigation.openDrawer()}}
></Icon.Button>
)
}}
      />
      </Stack.Navigator>

)

const mapstack=({navigation})=> (
    
      
    <Stack.Navigator>
    
    <Stack.Screen
        name='map'
        component={Map}
        options={{ 
    headerLeft:()=>(
<Icon.Button name='ios-menu' size={25} backgroundColor="#003445" 
onPress={()=>{navigation.openDrawer()}}
></Icon.Button>
)
}}
      />
      </Stack.Navigator>

)
const logotstack=({navigation})=> (
    
      
    <Stack.Navigator>
    
    <Stack.Screen
        name='logout'
        component={Logout}
        options={{ 
    headerLeft:()=>(
<Icon.Button name='ios-menu' size={25} backgroundColor="#003445" 
onPress={()=>{navigation.openDrawer()}}
></Icon.Button>
)
}}
      />
      </Stack.Navigator>

)


export default class Home_drawer extends Component {




    




    render() {
        return (
            
               <dw.Navigator >
                   <dw.Screen 
                   options={{
                    title: 'Home',
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="home" size={30} color="black" />)
                  }}
                   
                   name="home" component={homestack}></dw.Screen>
                   <dw.Screen
                   options={{
                    title: 'Profile',
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="person-outline" size={30} color="black" />)
                  }}
                   name="profile" component={profilestack}></dw.Screen>
                   <dw.Screen 
                   options={{
                    title: 'Contact',
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="call-outline" size={30} color="black" />)
                  }}
                   name="contact" component={contactstack}></dw.Screen>
                   <dw.Screen
                   options={{
                    title: 'Camera',
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="camera-outline" size={30} color="black" />)
                  }}
                    name="camera" component={camerastack}></dw.Screen>
                   <dw.Screen
                   options={{
                    title: 'Map',
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="location-outline" size={30} color="black" />)
                  }}
                   name="map" component={mapstack}></dw.Screen>
                
                   <dw.Screen
                   onPress={()=>{console.log("logout clicked")}}
                   options={{
                    title: 'Logout',
                    drawerIcon: ({ focused, size }) => (
                        <Icon name="log-out-outline" size={30} color="black" />)
                  }}
                   name="logout" component={logotstack}></dw.Screen>
                   
                   

               </dw.Navigator>
           
        )
    }
}
