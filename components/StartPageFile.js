import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//files_Components
import StartImage from './StartImageComponent.js';
import StartTxt from './StarttxtComponent.js';

export const StartPageComponent = (props) => {
  return (
    <View>
      <LinearGradient
        colors={['#3E7EA7', '#97BFD9']}
        style={{height: 790}}
        locations={[0, 1]}>
        <StartImage />
        <StartTxt />

        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('LoginPage')}>
          <Text style={styles.buttonText}>Start To Enjoy the DBANK</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F3748',
    paddingVertical: 25,
    marginVertical: 25,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginRight: 30,
    marginLeft: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
