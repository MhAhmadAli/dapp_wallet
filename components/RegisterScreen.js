import React from 'react';
import {View, Text} from 'react-native';
import RegisterTxt from './RegisterTxt.js';
import RegistrerInputField from './RegisterInputField.js';

const RegisterScreen = () => {
  return (
    <View>
      <RegisterTxt />
      <RegistrerInputField />
    </View>
  );
};

export default RegisterScreen;
