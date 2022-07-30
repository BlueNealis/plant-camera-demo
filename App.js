import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Alert} from 'react-native'
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
    fetch('https://api.thecatapi.com/v1/images/search', {
      method: 'GET',
      headers: {'content-type': 'aplication/json', 'x-api-key':'a107eb72-ba6c-42a9-8cc4-37e777d9e50a'}
    })
    .then(response => response.json())
    .then(data => console.log(data))
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
