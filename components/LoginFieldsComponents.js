import React, {useState} from 'react';
import Modal from 'react-native-modal';

import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native';

export const LoginField = (props) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [passwordemptymodal, setpasswordemptymodal] = useState(false);
  const [emailemptymodal, setemailemptymodal] = useState(false);
  const [LoginModal, setLoginModal] = useState(false);
  const [invalidModal, setinvalidModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const passwordemptymodalCloseModal = () => {
    setpasswordemptymodal(false);
  };

  const emailemptymodalCloseModal = () => {
    setemailemptymodal(false);
  };

  const LoginModalCloseModal = () => {
    // setLoginModal(false);
    // ()=>props.navigation.navigate('DashboardView')
  };

  const invalidModalCloseModal = () => {
    setinvalidModal(false);
  };

  const handleLogin = () => {
    if (email.trim() === '' && password.trim() === '') {
      setShowModal(true);
    } else {
      if (email.trim() === '') {
        setemailemptymodal(true);
      } else if (password.trim() === '') {
        setpasswordemptymodal(true);
      } else if (email == 'example@example.com' && password == 'password') {
        setLoginModal(true);
        setTimeout(() => {
          setLoginModal(false);
        }, 2000);
      } else {
        setinvalidModal(true);
      }
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your email"
        style={styles.passwordfield}
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <TextInput
        placeholder="Enter your password"
        style={styles.passwordfield}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <View style={styles.Twobuttons}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginbutton}>
          <Text style={{color: 'white', fontSize: 16}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgettenbutton}>
          <Text style={{color: 'white', fontSize: 16}}>Forgetten</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.Registerbutton}>
        <Text style={{color: 'white', fontSize: 19, textAlign: 'center'}}>
          Register Now
        </Text>
      </TouchableOpacity>

      {/* Email Password Empty Modal */}
      {showModal && (
        <Modal animationType="slide" transparent visible={showModal}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'white', padding: 20}}>
              <Text>Please enter both email and password</Text>
              <Button
                style={styles.buttonView}
                title="OK"
                onPress={handleCloseModal}
              />
            </View>
          </View>
        </Modal>
      )}

      {/* passwordemptymodal */}

      {passwordemptymodal && (
        <Modal animationType="slide" transparent visible={passwordemptymodal}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'white', padding: 20}}>
              <Text>Password is Empty!!', 'Kinldy Enter it?</Text>
              <Button title="OK" onPress={passwordemptymodalCloseModal} />
            </View>
          </View>
        </Modal>
      )}

      {/* emailemptymodal */}

      {emailemptymodal && (
        <Modal animationType="slide" transparent visible={emailemptymodal}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'white', padding: 20}}>
              <Text>Email Address is Empty!!', 'Kinldy Enter it?</Text>
              <Button title="OK" onPress={emailemptymodalCloseModal} />
            </View>
          </View>
        </Modal>
      )}

      {/* LoginModal */}

      {LoginModal && (
        <Modal animationType="slide" transparent visible={LoginModal} setpropvalue={()=>props.navigation.navigate('DashboardView')
        }>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{backgroundColor: 'white', padding: 20}}>
              <Text>Login Sucessfull!!</Text>
              <Button
                title="OK"
                onPress={LoginModalCloseModal}
              />
            </View>
          </View>
        </Modal>
      )}

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
