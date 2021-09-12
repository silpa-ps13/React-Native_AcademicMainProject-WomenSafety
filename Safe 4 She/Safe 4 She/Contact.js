import React, { Component } from 'react'
import { Button, StyleSheet ,ImageBackground, Text, View ,Linking,TouchableHighlight,Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
var logo=require('./images/em.png');

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state={
            phno1:"100",
            phno2:"1091",
            phno3:"101",
            
        }
    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center',backgroundColor:"#fff"}}>
                  <Image source={logo}
                  style={{height:220,width:220,marginTop:20}}></Image>

            <View style={{}}>
       <TouchableHighlight  style={{backgroundColor:"#3c0a2e",width:300,height:50,alignItems:'center',justifyContent:"center",borderRadius:10,marginTop:50}}
       onPress={()=>{
        Linking.openURL(`tel:${this.state.phno1}`)
    }
    }
       ><View style={{flexDirection:"row",marginRight:30}}><Icon name="call-outline" size={30} color="#ccc" /><Text style={{color:"#ccc",fontSize:18}}>  Contact Police Station</Text></View></TouchableHighlight>
       <TouchableHighlight style={{backgroundColor:"#3c0a2e",width:300,height:50,alignItems:'center',justifyContent:"center",borderRadius:10,marginTop:20}}
       onPress={()=>{
        Linking.openURL(`tel:${this.state.phno2}`)
    }
    }
       ><View style={{flexDirection:"row"}}><Icon name="call-outline" size={30} color="#ccc" /><Text style={{color:"#ccc",fontSize:18}}>  Contact Women Helpline</Text></View></TouchableHighlight>
       <TouchableHighlight style={{backgroundColor:"#3c0a2e",width:300,height:50,alignItems:'center',justifyContent:"center",borderRadius:10,marginTop:20}}
       onPress={()=>{
        Linking.openURL(`tel:${this.state.phno3}`)
    }
    }
       ><View style={{flexDirection:"row",marginRight:30}}><Icon name="call-outline" size={30} color="#ccc" /><Text style={{color:"#ccc",fontSize:18,marginRight:20}}>  Contact Fire Station</Text></View></TouchableHighlight>

            </View>
                             
<TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('contactlist')}><Icon name="call-outline" size={30} color="#ccc" />

<Text style={{color:"#ccc",fontSize:18}}>  View Contacts</Text>

</TouchableOpacity></View>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        flexDirection:"row",
        width:300,
       
        borderRadius: 10,
           marginTop: 20, 
           backgroundColor:"#3c0a2e",
       
           height:50,
           alignItems:"center",
           paddingLeft:25
     
        
         },
        })