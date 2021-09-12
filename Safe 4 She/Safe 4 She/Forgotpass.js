import React, { Component } from 'react'
import { Text, View,Dimensions,Button,TextInput,Image ,StyleSheet,TouchableOpacity} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import axios from 'react-native-axios'
import Urls from './Urls'
import {AsyncStorage} from 'react-native'
var back=require('./images/arrow_back.png');
var psw=require('./images/psw.png');
var back=require('./images/arrow_back.png')
export default class Forgotpass extends Component {
    constructor(props){
        super(props);
        this.state={
            eml:"",
            otp:"",
            otpcheck:"",
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
     <TouchableOpacity onPress={()=>this.props.navigation.navigate('index')}><Image source={back}
                  style={{height:20,width:20,marginRight:350,marginTop:20,marginLeft:20}}></Image></TouchableOpacity>
              <View style={{flex:1,width:Dimensions.get("window").width,alignItems:"center"}}>
              <Text  style={styles.RpswText}>Forgot Password</Text>
            <Image source={psw}
                    style={{height:300,width:300}}></Image>
      
                  

                  <TextInput placeholder="Enter Email ID " style={styles.inputView}  placeholderTextColor="#fff" onChangeText={(Text)=>{this.setState({eml:Text})}}/>
                  <Text style={{ fontFamily:"arial",
                fontSize:12,
                color:"#8a898a"
                ,marginTop:10}}>You will receive email with password reset link.</Text>
                  <View style={{marginTop:40}}><Button color="#3c0a2e" width="300" backgroundColor="#3c0a2e"
      borderRadius="10"
      height="50"  title="   Submit   " onPress={()=>{
                    if(this.state.eml==""){
                        alert("Please enter email id")
                    }
                    else{
                        axios.post(Urls.resetotp, {
                            email:this.state.eml,
                            
                    
                    
                        }).then(response => {
                      console.log("response--->",response.data);
                      this.setState({otpcheck:response.data})
                      if(response.data=="exist"){
                          alert("Invalid Email id ")
                      }
                      else{
                            
                      this.RBSheet.open()
                      }
                    })

                  }}}/></View>
                  

                  </View>
                  <RBSheet 
              ref={cc => {
                this.RBSheet = cc;
              }}
              
              height={250}
              
              openDuration={350}
              customStyles={{
                container: {
                   // flex:1,
                  justifyContent: "center",
                  alignItems: "center",
              
                }
              }}><View style={{flex:1,width:Dimensions.get("window").width,flexDirection:"row", backgroundColor:'#003445'}}>
    
              <View style={{flex:1,width:Dimensions.get("window").width,alignItems:"center"}}>
                  <Text style={{color:"#fff",fontSize:20,marginTop:15}}>OTP VERIFICATION</Text>
                  <Text style={{color:"#e1e3da",fontSize:15,marginTop:5}}>An OTP has been send to your email id</Text>
                  <TextInput placeholder="Enter OTP" style={{borderWidth:1,height:50,width:250,marginTop:20,borderRadius:10,borderColor:"#545453"}} onChangeText={(Text)=>{this.setState({otp:Text})}}></TextInput>
                  <View style={{height:50,marginTop:25}}><Button color="#3c0a2e" width="300" backgroundColor="#3c0a2e" title="Verify OTP" onPress={()=>{
                      if(this.state.otp==""){
                          alert("Please enter otp")
                      }
                      else if(this.state.otp==this.state.otpcheck){
                          alert("OTP verification Successfull")
                          AsyncStorage.setItem('email', this.state.eml).then(()=>{
                            console.log("set storage")
                          })
                        this.props.navigation.navigate('reset')
                      }
                      else{
                          alert("Wrong OTP")
                      }
                      }}
                  /></View>

                  </View></View>


              </RBSheet></View>


            
        )
    }
}
const styles = StyleSheet.create({

  loginBtn:{
      width:"65%",
      backgroundColor:"#3c0a2e",
      borderRadius:10,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      marginBottom:5
    },
   
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputView:{
          width:"75%",
          backgroundColor:"#d6d7d8",
          borderRadius:10,
          height:50,
          justifyContent:"center",
          marginTop:20,
          marginBottom:5,
          paddingLeft:10,
          color:"#000"
        },
        inputText:{
          height:50,
          color:"#a1a1ac"
        },
        loginText:{
          color:"#f9e1f9", fontSize:16,
        
      
        },
        RpswText:{
          fontFamily:"arial",
          fontSize:32,
          fontWeight: 'bold',
          color:"#2b2c2c" ,marginBottom:20,
          marginTop:60
        },
     
})
