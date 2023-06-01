import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//files_Components
import LoginField from './LoginFieldsComponents.js';
import LoginTxt from './LoginTxtComponents.js';
import { create } from 'react-test-renderer';

export const LoginPage = () => {
  return (
      <View style={styles.body}>
        <LoginTxt />
        <LoginField />
      </View>
    // </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#DEDEDE',
    width: 373,
    height: 700,
    margin: 10,
    borderRadius: 45,
  },
});

export default LoginPage;
