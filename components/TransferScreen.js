import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import isValidEthereumAddress from './isValidAddress';
import shortenString from './shortenString';

export const TransferScreen = props => {
  const [Amount, setAmount] = useState('');
  const [Notes, setNotes] = useState('');
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [toAddress, setToAddress] = useState('');

  useEffect(() => {
    axios.get("https://dapp-eallet-deploy1.vercel.app/api/getAddress").then((res) => {
      const short_address = shortenString(res.data.address);
      setAddress(short_address);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const handleToAddressChange = (text) => {
    setToAddress(text);
  }
  const handleTextChange = (text) => {
    setAmount(text);
  };

  const checkfun = async () => {
    const isValid = isValidEthereumAddress(toAddress);
    if (!isValid) {
      console.warn('Enter the valid Address');
    }
    else if (Amount.trim() === '') {
      console.warn('Enter the Amount');
    }
    else {
      try {
        const response = await axios.post("https://dapp-eallet-deploy1.vercel.app/api/sendTransaction", {
          to: toAddress,
          value: Amount,
        });
        const transcationDetails = {
          hash: response.data.tx.hash,
          from: response.data.tx.from,
          to: response.data.tx.to,
          value: Amount,
        };
        navigation.navigate('TransferReceipt', transcationDetails);
      } catch (err) {
        console.warn("Error in sending transaction");
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sendernamestyle}>From: {address}</Text>
      </View>
      <TextInput style={styles.enteramount}
        placeholder="To Address"
        onChangeText={handleToAddressChange}
        value={toAddress}
      ></TextInput>
      <TextInput style={styles.enteramount}
        placeholder="Enter Amount"
        keyboardType="numeric"
        onChangeText={handleTextChange}
        value={Amount}></TextInput>

      <TouchableOpacity
        style={styles.Sendbutton} onPress={checkfun}
      >
        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 1]}>
          <Text style={styles.send}>Send</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: '#DEDEDE',
    borderRadius: 30,
    marginTop: 30,
  },

  sendernamestyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
  },
  accountnumberstyle: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },

  enteramount: {
    marginLeft: 15,
    color: 'black',
    fontSize: 16,
    marginTop: 20,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
  },
  addnotes: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 45,
    color: 'black',
    fontSize: 16,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 2,
    marginTop: 20,
    paddingLeft: 20,
    paddingBottom: 100,
  },
  Notes: {
    marginLeft: 25,
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  },

  enteramount: {
    marginLeft: 15,
    color: 'black',
    fontSize: 16,
  },
  Sendbutton: {
    marginTop: 15,
    marginLeft: 25,
    marginRight: 25,
    marginBottom: 25,

  },
  send: {
    padding: 15,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,

  },
});

export default TransferScreen;
