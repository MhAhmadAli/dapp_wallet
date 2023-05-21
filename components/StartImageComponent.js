import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const myImage = require('C:/Users/dania/OneDrive/Desktop/DefiApp/pics/imagestart.jpg');
const App = () => {
  return (
    <View>
      <Image source={myImage} style={styles.strtimg} />
    </View>
  );
};
const styles = StyleSheet.create({
  strtimg: {
    width: 373,
    height: 500,
    margin: 10,
    borderRadius: 30,
  },
});

export default App;
