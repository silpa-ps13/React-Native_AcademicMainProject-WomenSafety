import React, { Component } from 'react'
import { Text, View,TextInput, Button, TouchableHighlight,TouchableOpacity, Image,ImageBackground ,Dimensions,Pressable} from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import axios from 'react-native-axios'
import Urls from './Urls'
var back=require('./images/arrow_back.png');
var sign=require('./images/signin.png');
export default class Register_page extends Component {
    constructor(props){
        super(props);{
            this.state={
                nme:"",
                plc:"",
                phno:"",
                eml:"",
                pass:"",
                otp:"",
                otpcheck:"",

            }
        }
    }
    
    reg_function=()=>{
        console.log("worked")
        axios.post(Urls.registerurl, {
            name:this.state.nme,
            place:this.state.plc,
            phone:this.state.phno,
            email:this.state.eml,
            psw:this.state.pass,
    
    
        }).then(response => {
      console.log(response);})
    
    
    
    }
    set_otp=(text)=>{
        console.log("text =",text)
        this.setState({otpcheck:text})
    }

    render() {
        return (
        
               <View style={{flex:1,alignItems:"center"}}>
                  
                  <TouchableOpacity onPress={()=>this.props.navigation.navigate('splash')}><Image source={back}
                  style={{height:20,width:20,marginRight:350,marginTop:20,marginLeft:20}}></Image></TouchableOpacity>      

                                <Text style={{ fontFamily:"arial", fontSize:32, fontWeight: 'bold',color:"#2b2c2c" ,marginBottom:20, marginTop:60}}>Create Account</Text>  
                                <Image source={sign}
                    style={{height:150,width:150}}></Image>
                  <TextInput placeholder=" Enter your Name"  style={{borderRadius:10,width:300,marginTop:20,backgroundColor:"#d6d7d8",color:"#000"}} onChangeText={(Text)=>{this.setState({nme:Text})}} ></TextInput>
               <TextInput placeholder=" Enter your Place"  style={{color:"#000",borderRadius:10,width:300,marginTop:10,backgroundColor:"#d6d7d8"}} onChangeText={(Text)=>{this.setState({plc:Text})}}></TextInput>
               <TextInput keyboardType="number-pad" maxLength={10} placeholder=" Enter your Phone Number"  style={{color:"#000",borderRadius:10,width:300,marginTop:10,backgroundColor:"#d6d7d8"}} onChangeText={(Text)=>{this.setState({phno:Text})}} ></TextInput>
               <TextInput placeholder=" Enter your Email Id"  style={{borderRadius:10,width:300,marginTop:10,backgroundColor:"#d6d7d8",color:"#000"}} onChangeText={(Text)=>{this.setState({eml:Text})}}></TextInput>

               <TextInput placeholder=" Enter  Password"  style={{borderRadius:10,width:300,marginTop:10,backgroundColor:"#d6d7d8",color:"#000"}} onChangeText={(Text)=>{this.setState({pass:Text})}} ></TextInput>
               
               <TouchableHighlight onPress={() =>{
               if(this.state.nme=="" || this.state.plc=="" || this.state.eml=="" || this.state.phno=="" || this.state.pass==""){
                    alert("Please enter valid details!!")
               }
               else if((this.state.phno).length!=10){
                alert("Please enter valid Phone Number!!")
               }
               else{
               axios.post(Urls.sendotp, {
                email:this.state.eml,
                
        
        
            }).then(response => {
          console.log("response--->",response.data);
          if(response.data=="exist"){
              alert("Email id already exist")
          }
          else{
                this.setState({otp:response.data})
          this.RBSheet.open()
          }
        })
    
                
           } }} >
                 <Text style={{ width:300,backgroundColor:"#3c0a2e",
    borderRadius:10,color:"white",marginTop:20,height:50,textAlign:"center",alignItems:"center",fontSize:16,textAlignVertical:"center"}}>SIGN UP</Text>
    
               </TouchableHighlight>
               <Text style={{textDecorationLine:"underline",fontSize:15,color:"#848482",marginTop:20}} onPress={()=>this.props.navigation.navigate('index')}>Already have an account? Login</Text>
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
              borderRadius:10,
            }
          }}
          
        >
            
{/* <YourOwnComponent functioncall={this.reg_function} otpsavecall={this.set_otp}/> */}
<View style={{flex:1,width:Dimensions.get("window").width,borderRadius:10,flexDirection:"row", backgroundColor:'#003445'}}>
    
    <View style={{flex:1,width:Dimensions.get("window").width,flexDirection:"row"}}>
        <Text style={{justifyContent:"center",textAlign:"center",color:"#ccc",marginTop:30,marginLeft:70}}>An OTP has been sent to your Email id.</Text>
    <TextInput keyboardType="number-pad" maxLength={4} placeholder=" Enter OTP"  style={{borderWidth:2,borderRadius:2,width:120,height:40,marginTop:80,marginLeft:-170,borderColor:"#ccc"}} onChangeText={(Text)=>{this.setState({otpcheck:Text})}} ></TextInput>
    <View style={{marginTop:140,height:50,marginLeft:-105}}><Button color="#3c0a2e" width="300" backgroundColor="#3c0a2e"  title="Verify OTP" onPress={()=>{
    console.log("clicked","here");
    console.log("worked");
    if(this.state.otp==this.state.otpcheck){
    axios.post(Urls.registerurl, {
        name:this.state.nme,
        place:this.state.plc,
        phone:this.state.phno,
        email:this.state.eml,
        psw:this.state.pass,
        
      
    }).then(response => {
        alert("Registration Successfull"),
        this.props.navigation.navigate('index')
 // console.log(response);})

    })
}
     else{
         alert("wrong otp")
     }
     }} />
     </View>

    </View>
    </View>


        </RBSheet>

            </View>
        )
    }
}

