import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import {styles} from './AppStyles'

const Header = () => {
  return (<View style={styles.header}>
    <Image style={styles.logo} source={require('./Logo.png')}></Image>
  </View>)
}

export default Header
