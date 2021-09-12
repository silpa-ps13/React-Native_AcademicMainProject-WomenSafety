import React, { Component } from 'react'
import axios from 'react-native-axios'
import Urls from './Urls'
import { StyleSheet, Text, View,Dimensions,Button, TouchableOpacity, TextInput, Image, Alert,
  ImageBackground, TouchableHighlight } from 'react-native';
import {AsyncStorage} from 'react-native'
import { color } from 'react-native-reanimated';
var back=require('./images/arrow_back.png')
var logo=require('./images/logolo.png');
var re=require('./images/kisspng-computer-icons-google-sync-checkered-vector-5ae22c63aadf24.1136410515247719396999.png');
export default class indexpage extends Component {
    constructor(props) {
    super(props);
 
    this.state = {
 
      textInput_text_holder: 0,
      sum_holder: 0,
      random_number_1: 0,
      random_number_2: 0,
      eml:"",
      pass:""
 
    }
  }
  
  
  componentDidMount() {

  

         
            


    this.generate_captcha();
  }
  generate_captcha = () => {
 
    var number_1 = Math.floor(Math.random() * 100) + 1;
 
    var number_2 = Math.floor(Math.random() * 100) + 1;
 
    var sum = number_1 + number_2;
 
    this.setState({ random_number_1: number_1, random_number_2: number_2 });
 
    this.setState({ sum_holder: sum });
  }
  login_function =()=>{
 
    var temp = this.state.random_number_1 + this.state.random_number_2 ;
 
    if(this.state.textInput_text_holder == temp)
    {
 
    
      
      if(this.state.eml=="" || this.state.pass==""){

        Alert.alert("Please enter valid details");
      }
      else{
        axios.post(Urls.loginurl, {
          email:this.state.eml,
          psw:this.state.pass,
          
          
        
      }).then(response => {
    console.log(response.data);
        let loginid=response.data+"";
        if(loginid=="0" || loginid==0){
          alert("invalid Username or Password")
        }

        else{
          alert("login successful")
          AsyncStorage.setItem('name', loginid).then(()=>{
            console.log("set storage")
          })

          this.props.navigation.navigate('home',{userid:loginid})
        }
          
      })
      }
      }
    
    else{
 
      //Write Your Code Here Which you want to execute on WRONG Captcha Entered.
      Alert.alert("Captcha NOT Matched");
    }
 
    // Calling captcha function, So each time new captcha number generates on button clicks.
    this.generate_captcha();
 
  }
    render() {
        return (
          <View style={{flex:1,alignItems:"center"}}>
               <TouchableOpacity onPress={()=>this.props.navigation.navigate('splash')}><Image source={back}
                  style={{height:20,width:20,marginRight:350,marginTop:20}}></Image></TouchableOpacity>
          <Text style={styles.wText}>Welcome back.</Text>
      <Image source={logo}
                  style={{height:120,width:120}}></Image>
            <Text style={styles.logoText}>Safe <Text style={styles.forText}>4</Text> She</Text>
             <View style={{flex:1,alignItems:"center"}}>
 
             <TextInput placeholder="Email ID"  style={{borderRadius:10,width:300,backgroundColor:"#d6d7d8", color:"#000"}} onChangeText={(Text)=>{this.setState({eml:Text})}}></TextInput>
             <TextInput secureTextEntry={true} placeholder="Password" style={{borderRadius:10,width:300,marginTop:20,backgroundColor:"#d6d7d8", color:"#000"}} onChangeText={(Text)=>{this.setState({pass:Text})}}></TextInput>
             <TouchableHighlight style={{marginTop:10,marginLeft:150}} onPress={()=>this.props.navigation.navigate('forgot')}>
 <Text style={{fontSize:15,color:"#848482"}}>Forgot Password</Text>
</TouchableHighlight>
 <Text style={{ fontSize: 18, textAlign: 'center', color: "#2b2c2c",marginTop:10 }}>
   {this.state.random_number_1} {"+"} {this.state.random_number_2} {"= "}
  </Text><TextInput style={{borderColor:"#ccc", color:"#ccc"}}
   placeholder="Enter"
   placeholderTextColor="#ccc"
   color="#000"
   onChangeText={data => this.setState({ textInput_text_holder: data })}
   style={styles.textInputStyle}
   underlineColorAndroid='transparent'
 />



 <TouchableOpacity  onPress={this.generate_captcha} >

   <Image source={re}
     style={{ width: 60, height: 60, resizeMode: 'contain',marginTop:10 }} />

 </TouchableOpacity>


<TouchableOpacity style={styles.button} onPress={this.login_function} >

 <Text style={styles.text}>LOGIN</Text>

</TouchableOpacity>
<TouchableHighlight style={{marginTop:25}} onPress={()=>this.props.navigation.navigate('register')}>
 <Text style={{textDecorationLine:"underline",fontSize:15,color:"#848482"}}>Don't have an account? Signup</Text>
</TouchableHighlight>
</View>


         </View>
        )
    }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wText:{
    fontFamily:"arial",
    fontSize:32,
    fontWeight: 'bold',
    color:"#2b2c2c" ,marginBottom:20,
    marginTop:50
  },
  forText:{
    fontFamily:"arial",
    fontSize:32,
    fontWeight: 'bold',
    color:"#dd86b8" 
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  logoText:{
    color:"#002d36",
    marginTop:0,
    fontFamily:"arial",
    fontSize:28,
    fontWeight: 'bold' ,
    marginBottom:20
  },
  captcha_view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: '#000',
    width: '90%',
    height: 100,
    borderWidth: 1,
    borderRadius: 7,
    padding: 5,
    backgroundColor: '#fff'
  },
 
  textInputStyle: {
 
    textAlign: 'center',
    height: 40,
    width: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 7,
  },
 
  button: {
 width:300,
    paddingTop: 2,
    paddingBottom: 2,
 borderRadius: 10,
    marginTop: 20, 
    backgroundColor:"#3c0a2e",

    height:50,
    alignItems:"center",
    justifyContent:"center",
 
  },
 
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 5
  }
 
  });