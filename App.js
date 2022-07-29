import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Alert} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import {styles} from './AppStyles'  //This is because Im using class so I have styles in a
//separate file ^

import Header from './Header'
import PickImage from './PickImage'
class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedImage: null,
    }
  }

handleClick = (event) => {
    Alert.alert('WOAH', 'I cant believe youve done this')
  }


  render() {
  return (
    <View style={styles.container}>
      <Button onClick={this.handleClick} title='Press Me'/>
    </View>
  );
}
}
export default App
