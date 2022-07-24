import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
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

  openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if(!persmissionResult.granted) {
      alert('Access to cameral roll is required for the app to function as intended')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()
    if(pickerResult.cancelled) {
      return
    }
    this.setState({
      selectedImage: {localUri: pickerResult.uri},
    })
  }

  render() {
  return (
    <View style={styles.container}>
      <Header />
      <PickImage openImagePicker={this.openImagePickerAsync}/>
      <StatusBar style="auto" />
    </View>
  );
}
}
export default App
