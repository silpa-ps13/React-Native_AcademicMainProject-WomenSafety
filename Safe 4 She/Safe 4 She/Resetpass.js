import React, { Component } from 'react'
import { Text, View,Dimensions,Button,TextInput,ImageBackground,StyleSheet,Image,TouchableOpacity } from 'react-native'
import axios from 'react-native-axios'
import Urls from './Urls'
import {AsyncStorage} from 'react-native'
var psw=require('./images/ps.png');
var back=require('./images/arrow_back.png');

export default class Resetpass extends Component {
    constructor(props){
        super(props);
        this.state={
            eml:"",
            oldpass:"",
            newpass:"",
        }
    }
    componentDidMount(){
        let email="";
        AsyncStorage.getItem('email', (error, value) => {
            if (value) {
                
                email=value;
                console.log("userid",email);
            }
        this.setState({eml:email})
    })
}

    render() {
        return (
          

              <View style={{flex:1,width:Dimensions.get("window").width,alignItems:"center",justifyContent:"center"}}>
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('forgot')}><Image source={back}
                  style={{height:20,width:20,marginRight:350,marginTop:20,marginLeft:20}}></Image></TouchableOpacity>
              <Text  style={styles.RpswText}>Reset Password</Text>
            <Image source={psw}
                    style={{height:350,width:350}}></Image>
                  <TextInput placeholder="Enter New Password " style={{borderRadius:10,height:50,width:250,backgroundColor:"#354154",}} onChangeText={(Text)=>{this.setState({oldpass:Text})}}></TextInput>
                  <TextInput placeholder="Re enter Password " style={{borderRadius:10,height:50,width:250,backgroundColor:"#354154",marginTop:10}} onChangeText={(Text)=>{this.setState({newpass:Text})}}></TextInput>

                  <View style={{height:50,marginTop:15}}><Button borderRadius={4} color="#3c0a2e" title="     Reset     " onPress={()=>{
                      if(this.state.oldpass=="" || this.state.newpass==""){
                          alert("Please fill all the fields")
                      }
                      else if(this.state.oldpass!=this.state.newpass){
                          alert("passwords should be same")
                      }
                      else{
                        axios.post(Urls.resetpassurl, {
                            email:this.state.eml,
                            pass:this.state.newpass,
                    
                    
                        }).then(response => {
                      console.log("response--->",response.data);
                      if(response.data=="success"){
                          alert("password reset successfully")
                          this.props.navigation.navigate('index')
                      }
                      else{
                          alert("error")
                      }
                    })

                      }
                  }}/></View>
                  

                  </View>
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
            color:"#2b2c2c" ,
            marginTop:60
          },
       
  })
  