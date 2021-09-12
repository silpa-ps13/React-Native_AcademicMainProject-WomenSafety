import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import { playButtonPress } from './audio';

export default class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity onPress={playButtonPress}>
        <Text>Click me</Text>
      </TouchableOpacity>
    );
  }
}