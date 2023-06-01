import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//files_Components
import StartImage from './StartImageComponent.js';
import StartTxt from './StarttxtComponent.js';

export const StartPageComponent = props => {
  return (
    <View style={styles.backcover}>
      <StartImage />
      <StartTxt />

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('LoginPage')}>
        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.2, 1]}
          style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    paddingVertical: 20,
    borderRadius: 30,
    marginRight: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
