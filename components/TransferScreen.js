import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const TransferScreen = props => {
  const [sendername, setSendername] = useState('Muhammad Farooq');
  const [AccountNumber, setAccountNumber] = useState('*** **** **** 4563');
  const [Amount, setAmount] = useState('');
  const [Notes, setNotes] = useState('');
  const navigation = useNavigation();
  const handleTextChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');
    setAmount(numericValue);
  };

  const checkfun = () => {
    if (Amount.trim() === '' )
    {
        console.warn('Enter the Amount');
    }
    else {
        navigation.navigate('TransferReceipt');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sendernamestyle}>{sendername}</Text>
        <Text style={styles.accountnumberstyle}>{AccountNumber}</Text>
      </View>
      <TextInput style={styles.enteramount}
        placeholder="Enter Amount"
        keyboardType="numeric"
        onChangeText={handleTextChange}
        value={Amount}></TextInput>

      <Text style={styles.Notes}>Notes</Text>
      <TextInput
        placeholder="Add your Notes"
        style={styles.addnotes}
        onChangeText={text => setNotes(text)}
        value={Notes}></TextInput>
      <TouchableOpacity
        style={styles.Sendbutton} onPress={checkfun}
        >
        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
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
