import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {AsyncStorage} from 'react-native'
export default class Logout extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
        AsyncStorage.setItem('name',"").then(()=>{
            console.log("set storage")
          })

          this.props.navigation.navigate('index')
    }
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}
