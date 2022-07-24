import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import {styles} from './AppStyles'
import * as ImagePicker from 'expo-image-picker'

const PickImage = (props) => {
  return (<View>
    <TouchableOpacity onPress={props.openImagePicker} style={styles.button}>
      <Text style={styles.buttonText}>Upload an Image</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.openCamera} style={styles.button}>
      <Text style={styles.buttonText}>Take a Picture</Text>
    </TouchableOpacity>
    </View>)
}

export default PickImage
