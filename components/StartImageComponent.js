import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const myImage = require('G:/react native/DefiApp/pics/imagestart.jpg');
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
    height: 450,
    margin: 10,
    borderRadius: 30,
  },
});

export default App;
