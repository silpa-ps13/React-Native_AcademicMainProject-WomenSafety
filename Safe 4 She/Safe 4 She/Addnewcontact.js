import React, { Component } from 'react'
import { Text, View,TextInput, Button, TouchableHighlight,TouchableOpacity, Image,ImageBackground ,Dimensions,Pressable} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import axios from 'react-native-axios'
import Urls from './Urls'
var back=require('./images/arrow_back.png');
var sign=require('./images/new.jpg');
export default class Addnewcontact extends Component {
    constructor(props){
        super(props);
        this.state={ 
            nme:"",
            phno:"",
            eml:"",
            e:"",
        }
    }
   render() {
        return (
        
               <View style={{flex:1,alignItems:"center"}}>
                  
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('contactlist')}><Image source={back}
                  style={{height:20,width:20,marginRight:350,marginTop:20,marginLeft:20}}></Image></TouchableOpacity>      

                                <Text style={{ fontFamily:"arial", fontSize:32, fontWeight: 'bold',color:"#2b2c2c" ,marginBottom:20, marginTop:60}}>Add New Contact</Text>  
                                <Image source={sign}
                    style={{height:200,width:200}}></Image>
                      <TextInput placeholder=" Enter your Email Id"  style={{borderRadius:10,width:300,marginTop:20,backgroundColor:"#d6d7d8",color:"#000"}} onChangeText={(Text)=>{this.setState({e:Text})}} ></TextInput>
                  <TextInput placeholder=" Enter Name"  style={{borderRadius:10,width:300,marginTop:20,backgroundColor:"#d6d7d8",color:"#000"}} onChangeText={(Text)=>{this.setState({nme:Text})}} ></TextInput>
               <TextInput keyboardType="number-pad" maxLength={10} placeholder=" Enter Phone Number"  style={{color:"#000",borderRadius:10,width:300,marginTop:10,backgroundColor:"#d6d7d8"}} onChangeText={(Text)=>{this.setState({phno:Text})}} ></TextInput>
               <TextInput placeholder=" Enter Email Id"  style={{borderRadius:10,width:300,marginTop:10,backgroundColor:"#d6d7d8",color:"#000"}} onChangeText={(Text)=>{this.setState({eml:Text})}}></TextInput>
               
               <TouchableHighlight onPress={() =>{
               if( this.state.e==""|| this.state.nme=="" || this.state.eml=="" || this.state.phno==""){
                    alert("Please enter valid details!!")
               }
               else if((this.state.phno).length!=10){
                alert("Please enter valid Phone Number!!")
               }
               else{
               axios.post(Urls.contacturl, {
                email:this.state.e,
                contactemail:this.state.eml,
                contactno:this.state.phno,
                contact:this.state.nme,
        
        
            }).then(response => {
                    alert("New Contact Added"),
                    this.props.navigation.navigate('contactlist')
        })
    
                
           } }} >
                 <Text style={{ width:300,backgroundColor:"#3c0a2e",
    borderRadius:10,color:"white",marginTop:20,height:50,textAlign:"center",alignItems:"center",fontSize:16,textAlignVertical:"center"}}>ADD</Text>
    
               </TouchableHighlight>

             

            </View>
        )
    }
}

