import {findFocusedRoute, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, RefreshControlComponent} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import shortenString from './shortenString';

export const TransferScreen = ({navigation, route}) => {
  const {hash, from, to, value} = route.params;
  const [receivername, setreceivername] = useState(to.length > 10 ? shortenString(to) : to);
  const [TranscationId, setTranscationId] = useState(hash);
  const [Amount, setAmount] = useState(value);

  const handleGoBack = () => {
    navigation.navigate('DashboardView');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.complete1}>COMPLETE</Text>
      <Text style={styles.amountstyle}>{Amount} ETH</Text>
      <Text style={styles.paidto}>Paid To</Text>
      <Text style={styles.receivername}>{receivername}</Text>
      <Text style={styles.transcationid}>Transcation ID</Text>
      <Text style={styles.transcationid1}>{TranscationId}</Text>

      <View>
        <TouchableOpacity>
          <LinearGradient
            colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            locations={[0.2, 1]}
            style={styles.Donebutton}>
            <Text style={styles.DoneTxt} onPress={handleGoBack}>
              Done
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
    backgroundColor: '#DEDEDE',
    borderRadius: 30,
  },
  complete1: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 25,
    fontWeight: 'bold',
  },
  amountstyle: {
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  paidto: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  receivername: {
    color: 'black',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  transcationid: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  transcationid1: {
    color: 'black',
    textAlign: 'center',
  },
  Donebutton: {
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 35,
    marginBottom: 35,
  },
  DoneTxt: {
    color: 'white',
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TransferScreen;

