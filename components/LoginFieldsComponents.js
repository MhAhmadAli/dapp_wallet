import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  Button,
} from 'react-native';

const LoginField = props => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hideninputemail, sethideninputemail] = useState(false);
  const [hideninputpass, sethideninputpassword] = useState(false);
  const [invalidModal, setinvalidModal] = useState(false);

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

  const handleLogin = () => {
    if (email.trim() === '' && password.trim() === '') {
      sethideninputemail(true);
      sethideninputpassword(true);
    } else if (email === 'example@ex.com' && password === 'pass') {
      navigation.navigate('DashboardView');
    } else if (email.trim() === '') {
      sethideninputemail(true);
      sethideninputpassword(false);
    } else if (password.trim() === '') {
      sethideninputemail(false);
      sethideninputpassword(true);
    } else {
      setinvalidModal(true);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter the Email Address"
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
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.2, 1]}
          style={styles.loginbutton}>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Login
            </Text>
          </TouchableOpacity>
        </LinearGradient>

        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.2, 1]}
          style={styles.forgettenbutton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{color: 'white', fontSize: 17, fontWeight: 'bold'}}>
              Forgetten
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <LinearGradient
        colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        locations={[0.2, 1]}
        style={[styles.Registerbutton, {marginTop: registerMargin}]}>
        <TouchableOpacity>
          <Text style={styles.Registertxt}>Register Now</Text>
        </TouchableOpacity>
      </LinearGradient>

      {/* invalidModal */}

      {invalidModal && (
        <Modal
          style={{borderRadius: 15}}
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
            <View style={{backgroundColor: 'white', padding: 20}}>
              <Text style={{marginBottom: 15}}>Invalid Account Details??</Text>
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
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 6,
  },
});

export default LoginField;
