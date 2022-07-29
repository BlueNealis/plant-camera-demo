import { StyleSheet} from 'react-native'
import React from 'react'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#A7D9A3',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#D3EFC6',
    width: '100%',
    height:'20%',
  },
  logo: {
    width: 400,
    height: 120,
  },
  instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E4E4E4',
    padding: 40,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#8C8C8C',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
});
