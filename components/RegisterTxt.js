import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RegisterTxT = () => {
  return (
    <View>
      <Text style={styles.LoginText}>FINANCE FUTURE</Text>
      <Text style={styles.LoginText1}>BANK</Text>
      <View style={styles.line}></View>
      <Text style={styles.LoginText2}>Register!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Open Sans',
    marginTop: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  LoginText1: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Open Sans',
    marginBottom: 40,
    color: 'black',
    
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 100,
    alignSelf: 'center',
    marginBottom: 40,
  },
  LoginText2: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Open Sans',
    marginBottom: 15,
    fontWeight: 'bold',
  },

});

export default RegisterTxT;
