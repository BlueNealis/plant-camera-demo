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
  Alert.alert(
    "Woah",
    "Now youve done it",
  )
  }


  render() {
  return (
    <View style={styles.container}>
      <Button onPress={this.handleClick} title='Press Me'/>
    </View>
  );
}
}
export default App
