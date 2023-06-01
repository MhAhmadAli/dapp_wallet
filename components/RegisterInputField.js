import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

export const LoginField = () => {
  const [firstname, setfirstname] = useState('');
  const [secondname, setsecondname] = useState('');
  const [email, setEmail] = useState('');
  const [confirmemail, setConfirmEmail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');

  return (
    <View>
      {/* names field */}
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="Enter Your First Name"
          style={styles.usernamefield}
          onChangeText={text => setfirstname(text)}
          value={firstname}
        />

        <TextInput
          placeholder="Enter Your Second Name"
          style={styles.usernamefield}
          onChangeText={text => setsecondname(text)}
          value={secondname}
        />
      </View>

      {/* email */}
      <TextInput
        placeholder="Enter Your Second Name"
        style={styles.passwordfield}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <TextInput
        placeholder="Enter Your Second Name"
        style={styles.passwordfield}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      {/* password */}
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="Enter Your Password"
          style={styles.usernamefield}
          onChangeText={text => setpassword(text)}
          value={password}
        />

        <TextInput
          placeholder="Confirm Password"
          style={styles.usernamefield}
          onChangeText={text => setconfirmpassword(text)}
          value={confirmpassword}
        />
      </View>

      <View style={styles.Twobuttons}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginbutton}>
          <Text style={{color: 'white', fontSize: 16}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={forgettenpage}
          style={styles.forgettenbutton}>
          <Text style={{color: 'white', fontSize: 16}}>Forgetten</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Registerbutton}>
        <Text style={{color: 'white', fontSize: 19, textAlign: 'center'}}>
          Register Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  emailtext: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 25,
  },

  passwordtext: {
    fontSize: 20,
    color: 'white',
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 25,
  },

  usernamefield: {
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 17,
    margin: 10,
  },

  passwordfield: {
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 17,
    margin: 10,
  },

  loginbutton: {
    backgroundColor: '#1F3748',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 17,
    paddingBottom: 17,
    margin: 7,
    borderRadius: 50,
  },

  forgettenbutton: {
    backgroundColor: '#1F3748',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 17,
    paddingBottom: 17,
    margin: 7,
    borderRadius: 50,
  },

  Twobuttons: {
    flexDirection: 'row',
    justifyContent: 'center',
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
