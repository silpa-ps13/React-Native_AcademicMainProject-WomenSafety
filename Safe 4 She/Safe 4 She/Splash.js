import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity, Alert,Button } from 'react-native';
 
 var logo=require('./images/logo.png');
 var log=require('./images/log.png');
 export default class Splash extends Component 
{  
   constructor(props){  
     super(props);  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                 <Image source={logo}
                    style={{height:100,width:100}}></Image>
                </View>  
             </View> )  
         return(  
             <View style = { styles.MainContainer }>  
              <Text style={styles.logoText}>Safe <Text style={styles.forText}>4</Text> She</Text>
        <Text style={styles.contentText}>Women Safety App </Text>
           <Image source={log}
                    style={{height:300,width:300,marginTop:20,marginBottom:0}}/>
    
   
      
        <TouchableOpacity style={styles.loginBtn} onPress={()=>this.props.navigation.navigate('index')}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn1} onPress={()=>this.props.navigation.navigate('register')}>
          <Text style={styles.loginTextsign}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('terms')}>
        <Text style={styles.conditionsText}>Terms Of Service</Text>
  </TouchableOpacity>
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  ,
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
       flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#003445'
    },  
    loginBtn:{
        width:"65%",
        backgroundColor:"#354154",
        borderRadius:10,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:5
      },
      loginBtn1:{
        width:"65%",
        backgroundColor:"#d6d7d8",
        borderRadius:10,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10
      },
      
      loginText:{
        fontFamily:"arial",
        fontSize:16,
        color:"white" 
      },
      loginTextsign:{
        fontFamily:"arial",
        fontSize:16,
        color:"black"
      },
      logoText:{
        color:"#242424",
        marginTop:0,
        fontFamily:"arial",
        fontSize:32,
        fontWeight: 'bold' 
      },
      forText:{
        fontFamily:"arial",
        fontSize:34,
        fontWeight: 'bold',
        color:"#dd86b8" 
      },
     contentText:{
        fontFamily:"arial",
        fontSize:14,
        color:"#8a898a" 
      },
      conditionsText:{
        fontFamily:"arial",
        fontSize:12,
        color:"#8a898a" 
      }
});  


