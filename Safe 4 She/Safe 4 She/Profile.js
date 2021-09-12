import React, { Component } from 'react'
import { Text, View,Dimensions, Button, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import RBSheet from "react-native-raw-bottom-sheet";
import Icon from 'react-native-vector-icons/Ionicons'
import {AsyncStorage} from 'react-native'
import axios from 'react-native-axios'
import Urls from './Urls'
var logo=require('./images/pc.png');
export default class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            nme:"",
            plc:"",
            phno:"",
            psw:"",
            eml:"",
            uid:"",
            oldpass:"",
            newpass:"",
            repass:"",
            filepath:"./images/women.jpg",

        }
    }
    componentDidMount(){
        this.props.navigation.addListener('focus', () => {
            console.log('Screen.js focused')
          
        console.log("didmount")
        let user="";
        AsyncStorage.getItem('name', (error, value) => {
            if (value) {
                console.log("userid",value);
                user=value;
            }

            axios.post(Urls.profileurl, {
                loginid:user,
                
                
                
              
            }).then(response => {
          console.log(response.data);
        
          let res=response.data;
              let i=0;
              res.map((item)=>{
                  if(i==0){
                      console.log(item);
                  }
                  i++;
                  console.log(item.name);
                  console.log(item.email);
                  this.setState({nme:item.name})
                  this.setState({plc:item.plc})
                  this.setState({eml:item.email})
                  this.setState({psw:item.pass})
                  this.setState({phno:item.phno})
                  this.setState({uid:item.userid})
                  if(item.impath=="" || null){
                    console.log("np image")
                  }
                  else{
                  this.setState({filepath:item.impath})
                  }
              })
        
        
        
        });


        });
    });

    }
    
    render() {
        return (
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"#fff"}}>

                <Image source={{uri:this.state.filepath}} style={{height:150,width:150,borderRadius:100,marginTop:0}}></Image>
                <TouchableOpacity
                onPress={()=>{this.props.navigation.navigate('profilepic')}}
                >
                   <Image source={logo}
                  style={{height:50,width:50,marginLeft:70,marginTop:0}}></Image>   
                  </TouchableOpacity>
                <View >
                    <Text style={{fontSize:18,fontFamily:"Calibri", marginTop:30,alignItems:'center',marginLeft:30,borderBottomWidth:1,borderBottomColor:"#ccc",padding:10}}><Icon name="person-outline" size={20} color="#ccc" />     {this.state.nme}</Text>
                    <Text style={{fontSize:18,marginTop:30,marginLeft:30,borderBottomWidth:1,borderBottomColor:"#ccc",padding:10}}><Icon name="location-outline" size={20} color="#ccc"/>    {this.state.plc}</Text>
                    <Text style={{fontSize:18,marginTop:30,marginLeft:30,borderBottomWidth:1,borderBottomColor:"#ccc",padding:10}}><Icon name="call-outline" size={20} color="#ccc"/>    {this.state.phno}</Text>
                    <Text style={{fontSize:18,marginTop:30,marginLeft:30,borderBottomWidth:1,borderBottomColor:"#ccc",padding:10}}><Icon name="mail" size={20} color="#ccc"/>     {this.state.eml}</Text>
                    <TouchableHighlight style={{alignItems:"center",borderRadius:10,backgroundColor:"#3c0a2e",width:200,height:50,marginTop:40,marginLeft:30}}
                    onPress={()=>{this.RBSheet.open()}}
                    >
                        <Text style={{color:"white",fontSize:15,marginTop:10,alignItems:'center'}}>Update Password</Text>
                    </TouchableHighlight>
                     
              <RBSheet 
              ref={cc => {
                this.RBSheet = cc;
              }}
              
              height={350}
              
              openDuration={350}
              customStyles={{
                container: {
                   // flex:1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius:10,
                }
              }}><View style={{flex:1,width:Dimensions.get("window").width,borderRadius:10,flexDirection:"row", backgroundColor:'#003445'}}>
    
              <View style={{flex:1,width:Dimensions.get("window").width,alignItems:"center"}}>
                  <Text style={{color:"#fff",fontSize:20,marginTop:15}}>Change Password</Text>
                  <TextInput placeholder="Enter Old Password" style={{borderWidth:2,height:50,width:250,marginTop:10,borderColor:"#ccc",borderRadius:10}} onChangeText={(Text)=>{this.setState({oldpass:Text})}}></TextInput>
                  <TextInput placeholder="Enter New Password" style={{borderWidth:2,height:50,width:250,marginTop:10,borderColor:"#ccc",borderRadius:10}} onChangeText={(Text)=>{this.setState({newpass:Text})}}></TextInput>
                  <TextInput placeholder="Re Enter New Password" style={{borderWidth:2,height:50,width:250,marginTop:10,borderColor:"#ccc",borderRadius:10}} onChangeText={(Text)=>{this.setState({repass:Text})}}></TextInput>
                  <View style={{height:50,marginTop:15}}><Button color="#3c0a2e" backgroundColor="#3c0a2e" title="Change Password"onPress={()=>{
                    if(this.state.oldpass=="" || this.state.newpass=="" || this.state.repass==""){
                        alert("Please fill all the fields")
                    }
                    else{


                    if(this.state.oldpass!=this.state.psw){
                        alert("Password incorrect")
                    }
                    else if(this.state.newpass!=this.state.repass){
                        alert("Passwords Should be same")
                    }
                    else{
                        axios.post(Urls.updpassurl, {
                            loginid:this.state.uid,
                            npass:this.state.newpass,
                            
                            
                            
                          
                        }).then(response => {
                      console.log(response.data);
                    alert("Password Updated Successfully")
                    this.RBSheet.close()
                    })
                      
                    }

                }

                  }}
                  /></View>

                  </View></View>


              </RBSheet>
    
                </View>
            
            </View>
        )
    }
}
