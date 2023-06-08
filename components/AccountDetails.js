import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Clipboard } from 'react-native'
import { Text } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

//FlexDetails
import FlexDetail from './FlexDetail.js';
import shortenString from './shortenString.js';
import Svg, { Path } from 'react-native-svg';
import copysvg from './copy.svg';

const AccountDetails = () => {
  const [balance, setBalance] = useState('0');
  const [address, setAddress] = useState('');
  const [fullAddress, setFullAddress] = useState('');

  useEffect(() => {
    axios.get("https://dapp-eallet-deploy1.vercel.app/api/getAddress").then((res) => {
      const temp_addr = res.data.address;
      const short_address = shortenString(temp_addr, 8, 8);
      setAddress(short_address);
      setFullAddress(temp_addr);

      axios.post("https://dapp-eallet-deploy1.vercel.app/api/getBalance", {
        address: temp_addr,
      }).then((res) => {
        setBalance(res.data.balance);
      }).catch((err) => {
        console.warn("Error in getting balance");
      });

    }).catch((err) => {
      console.warn("Error in getting address", err);
    });
  }, []);

  const handleOnPress = async () => {
    try {
      Clipboard.setString(fullAddress);
      console.log('Text copied to clipboard');
    } catch (error) {
      console.error('Error copying text to clipboard:', error);
    }
  };

  return (
    <View>
      <Text style={styles.card}>My Account</Text>
      <View style={styles.accountdetails}>
        <LinearGradient
          colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          locations={[0.2, 1]}
          style={styles.accountdetails}>
          <Text style={styles.textcolor1}>Muhammad Zaib</Text>
          <View style={styles.flex}>
            <Text style={styles.textcolor2}>{address}</Text>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width={20}
              height={20}
              viewBox="0 0 64 64"
              onPress={handleOnPress}
            >
              <Path d="M53.98 9.143h-3.97c-.082 0-.155.028-.232.047V5.023C49.778 2.253 47.473 0 44.64 0H10.217C7.384 0 5.08 2.253 5.08 5.023v46.843c0 2.77 2.305 5.023 5.138 5.023h6.037v2.268c0 2.67 2.216 4.843 4.941 4.843H53.98c2.725 0 4.942-2.173 4.942-4.843v-45.17c0-2.671-2.217-4.844-4.942-4.844zM7.11 51.866V5.023c0-1.649 1.394-2.991 3.106-2.991H44.64c1.712 0 3.106 1.342 3.106 2.99v46.844c0 1.649-1.394 2.991-3.106 2.991H10.217c-1.712 0-3.106-1.342-3.106-2.99zm49.778 7.29c0 1.551-1.306 2.812-2.91 2.812H21.195c-1.604 0-2.91-1.26-2.91-2.811v-2.268H44.64c2.833 0 5.138-2.253 5.138-5.023V11.128c.077.018.15.047.233.047h3.968c1.604 0 2.91 1.26 2.91 2.811v45.17z" />
              <Path d="M38.603 13.206H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 21.333H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM38.603 29.46H16.254a1.015 1.015 0 1 0 0 2.032h22.35a1.015 1.015 0 1 0 0-2.032zM28.444 37.587h-12.19a1.015 1.015 0 1 0 0 2.032h12.19a1.015 1.015 0 1 0 0-2.032z" />
            </Svg>
            <View></View>
          </View>
          <FlexDetail />
          <Text style={styles.textcolor3}>Balance</Text>
          <Text style={styles.textcolor4}>{balance} ETH</Text>
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

  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 20,
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
