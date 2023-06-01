import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

let Balance = 4565;

//FlexDetails
import FlexDetail from './FlexDetail.js';

const AccountDetails = () => {
  return (
    <View>
      <Text style={styles.card}>My Cards</Text>
      <View style={styles.accountdetails}>
        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          locations={[0.2, 1]}
          style={styles.accountdetails}>
          <Text style={styles.textcolor1}>Muhammad Zaib</Text>
          <Text style={styles.textcolor2}>**** **** **** 3659</Text>
          <FlexDetail />
          <Text style={styles.textcolor3}>Balance</Text>
          <Text style={styles.textcolor4}>$ {Balance}</Text>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  accountdetails: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 8,
    borderRadius: 25,
  },

  textcolor1: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 20,
    margin: 12,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  textcolor2: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    paddingBottom: 3,
  },

  textcolor3: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 12,
    fontWeight: 'bold',
  },

  textcolor4: {
    color: 'white',
    fontSize: 17,
    paddingLeft: 20,
    fontWeight: 'bold',
    marginLeft: 12,
    marginBottom: 20,
  },

  walletdetails: {
    borderColor: 'black',
    borderWidth: 5,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 30,
    borderRadius: 30,
    backgroundColor: '#252525',
  },
});
export default AccountDetails;
