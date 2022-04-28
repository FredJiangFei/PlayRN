import React from 'react'
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native'
import ElButton from '../components/ElButton'

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../../assets/background.jpg')}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        <Text style={styles.tagline}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <ElButton title="Skip" />
        <ElButton title="Next" color="secondary" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    paddingVertical: 20,
  },

  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },

  buttonContainer: {
    padding: 20,
    width: '100%',
  },
})
