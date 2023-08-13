import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

import {
  Button,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppStateContext } from './AppStateContext';

const LoginField = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hideninputemail, sethideninputemail] = useState(false);
  const [hideninputpass, sethideninputpassword] = useState(false);
  const [invalidModal, setinvalidModal] = useState(false);
  const [context, setContext] = useContext(AppStateContext);

  const invalidModalCloseModal = () => {
    setinvalidModal(false);
  };

  let registerMargin = 190;
  if (hideninputemail == true && hideninputpass == true) {
    registerMargin = 88;
  } else if (hideninputpass == true) {
    registerMargin = 152;
  } else if (hideninputemail == true) {
    registerMargin = 140;
  } else {
    registerMargin = 190;
  }

  const handleLogin = async () => {
    if (email.trim() === '' && password.trim() === '') {
      sethideninputemail(true);
      sethideninputpassword(true);
    } else if (email.trim() === '') {
      sethideninputemail(true);
      sethideninputpassword(false);
    } else if (password.trim() === '') {
      sethideninputemail(false);
      sethideninputpassword(true);
    } else if (email.trim() !== '' && password.trim() !== '') {
      const data = {
        email: email,
        password: password
      }

      try {
        await axios.post("https://dapp-eallet-deploy1.vercel.app/api/login", data).then(async (res) => {
          const temp_data = res.data;

          if (temp_data && temp_data.user) {
            setContext(temp_data.user);
            navigation.navigate('DashboardView');
          }
        });

      } catch (err) {
        alert(err.response.data.error || 'Something went wrong');
      }
    } else {
      setinvalidModal(true);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter the Email Address"
        placeholderTextColor={'gray'}
        style={styles.usernamefield}
        onChangeText={text => setEmail(text)}
        value={email}
      />

      {hideninputemail && (
        <TextInput style={styles.hiddenusernamefield}>
          <Text>Enter the Valid Email Address??</Text>
        </TextInput>
      )}

      <TextInput
        placeholder="Enter your Password"
        placeholderTextColor={'gray'}
        style={styles.passwordfield}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      {hideninputpass && (
        <Text style={styles.hiddenpasswordfield}>
          Enter Your Valid Password??
        </Text>
      )}

      <View style={styles.Twobuttons}>
        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 1]}
          style={styles.loginbutton}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
              Login
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 1]}
          style={styles.forgettenbutton}>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
              Forgetten
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <LinearGradient
        colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        locations={[0.2, 1]}
        style={[styles.Registerbutton, { marginTop: registerMargin }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.Registertxt}>Register Now</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* invalidModal */}

      {invalidModal && (
        <Modal
          style={{ borderRadius: 15 }}
          animationType="slide"
          transparent
          visible={invalidModal}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15,
            }}>
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text style={{ marginBottom: 15 }}>Invalid Account Details??</Text>
              <Button title="OK" onPress={invalidModalCloseModal} />
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  usernamefield: {
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 330,
    alignSelf: 'center',
    color: 'black',
  },

  hiddenusernamefield: {
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 18,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 15,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  passwordfield: {
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 17,
    marginTop: 10,
    marginLeft: 25,
    marginRight: 25,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 330,
    alignSelf: 'center',
    marginBottom: 5,
    color: 'black',
  },

  hiddenpasswordfield: {
    borderRadius: 50,
    paddingLeft: 25,
    fontSize: 18,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 15,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  loginbutton: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 17,
    paddingBottom: 17,
    marginBottom: 7,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 50,
    marginTop: 20,
  },

  forgettenbutton: {
    backgroundColor: '#1F3748',
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 17,
    paddingBottom: 17,
    marginBottom: 7,
    marginLeft: 7,
    marginRight: 7,
    borderRadius: 50,
    marginTop: 20,
  },

  Twobuttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  Registerbutton: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
    marginTop: 190,
    marginLeft: 23,
    marginRight: 23,
    borderRadius: 50,
  },

  Registertxt: {
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    backgroundColor: ['rgba(167,131,255,1)', 'rgba(81,108,250,1)'],
    borderRadius: 30,
    textShadowColor: ['rgba(81,108,250,1)', 'rgba(167,131,255,1)'],
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
  },
});

export default LoginField;
