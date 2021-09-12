import React, { Component } from 'react'
import { Text, View ,Button,StyleSheet} from 'react-native'
import email from 'react-native-email'
export default class pagemail extends Component {
    handleEmail = () => {
        const to = ['abhinavtp3@gmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Show how to use',
            body: 'Some body right here'
        }).catch(console.error)
    }
    render() {
        return (
            <View>
                
                <Button title="Send Mail" onPress={this.handleEmail} />
         
            </View>
        )
    }
}

