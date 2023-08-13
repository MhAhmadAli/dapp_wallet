import axios from 'axios';
import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export const LoginField = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loadingIndicator, setLoadingIndicator] = useState(false);


  const handleRegister = async () => {
    setLoadingIndicator(true);

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    const data = {
      fullname: fullname,
      email: email,
      password: password,
    };

    try {
      await axios.post("https://dapp-eallet-deploy1.vercel.app/api/createUser", data).then(async (res) => {
        const temp_data = res.data;

        if (temp_data && temp_data.user) {
          alert('User registered successfully');
        }
      });
    } catch (err) {
      alert(err.response.data.error || 'Something went wrong');
    }

    setLoadingIndicator(false);

  };

  return (
    <View>
      {/* fullname */}
      <TextInput
        placeholder="Enter Your Full Name"
        placeholderTextColor={'gray'}
        style={styles.usernamefield}
        onChangeText={text => setFullname(text)}
        value={fullname}
      />

      {/* email */}
      <TextInput
        placeholder="Enter Your Email"
        placeholderTextColor={'gray'}
        style={styles.usernamefield}
        onChangeText={text => setEmail(text)}
        value={email}
      />

      {/* password */}
      <TextInput
        placeholder="Password"
        placeholderTextColor={'gray'}
        style={styles.passwordfield}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor={'gray'}
        style={styles.passwordfield}
        secureTextEntry={true}
        onChangeText={text => setConfirmPassword(text)}
        value={confirmPassword}
      />

      <TouchableOpacity
        style={styles.Registerbutton}
        onPress={handleRegister}>
        {loadingIndicator ?
          <ActivityIndicator size="small" animating={loadingIndicator} /> :
          <Text style={{ color: 'white', fontSize: 19, textAlign: 'center' }}>
            Register Now
          </Text>
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  usernamefield: {
    borderColor: 'black',
    color: 'black',
    borderWidth: 3,
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 17,
    margin: 10,
  },

  passwordfield: {
    borderColor: 'black',
    color: 'black',
    borderWidth: 3,
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 17,
    margin: 10,
  },

  Registerbutton: {
    backgroundColor: '#1F3748',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 3,
    marginLeft: 25,
    marginRight: 23,
    borderRadius: 50,
  },
});

export default LoginField;
