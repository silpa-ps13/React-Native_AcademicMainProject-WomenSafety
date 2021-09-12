import React, { Component } from 'react'
import { Text, View,TouchableOpacity,Image } from 'react-native'
var back=require('./images/arrow_back.png')
export default class TermsCon extends Component {
    render() {
        return (
            <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('splash')}><Image source={back}
                  style={{height:20,width:20,marginRight:350,marginTop:20,marginLeft:20}}></Image></TouchableOpacity>
                  <Text style={{fontSize:18,fontWeight:'bold',marginTop:20}}>Terms of Service</Text>
                  <Text style={{marginTop:20,textAlign:'justify',marginLeft:20,marginRight:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque interdum elit ac lorem dignissim ultricies non nec elit. Aenean sem diam, pulvinar sit amet faucibus id, fermentum id ex. Sed est metus, euismod vel diam quis, iaculis eleifend augue. In hac habitasse platea dictumst. Nulla accumsan, erat id bibendum lacinia, massa erat bibendum justo, et viverra ligula tortor vitae sem. Morbi id nisl ut metus accumsan rutrum a at ipsum. Vestibulum bibendum nibh diam, malesuada semper urna ultricies non. Nulla facilisi. Cras rutrum ex eget vehicula maximus. Sed in commodo nisl, quis pulvinar felis. Maecenas varius quam eu lectus vulputate dignissim. Sed sagittis lacus felis, eget varius ligula consequat eu. Donec augue quam, ullamcorper non pharetra ac, dapibus ac velit.

Sed vehicula neque eu justo consectetur egestas. Pellentesque condimentum lobortis viverra. Curabitur placerat nulla eget velit placerat rhoncus. Suspendisse sit amet lorem vulputate, egestas felis interdum, efficitur urna. Phasellus sollicitudin ut risus sit amet placerat. Pellentesque nec arcu vel leo scelerisque iaculis sit amet in urna. Morbi elementum ante orci, non aliquam libero lacinia in. Integer pretium accumsan urna sed efficitur. Praesent dapibus eu sem a accumsan. Nulla vel efficitur erat. Fusce porta rutrum elit, ac eleifend augue commodo eget. Donec fermentum ligula eget semper sollicitudin. Proin vitae ipsum suscipit, accumsan nunc sed, gravida quam. Fusce accumsan dolor ante, eget ullamcorper orci tempus ut. Suspendisse suscipit dolor eu tellus tempor dapibus.</Text>
            </View>
        )
    }
}
