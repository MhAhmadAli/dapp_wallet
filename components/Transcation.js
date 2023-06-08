import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import axios from 'axios';
import shortenString from './shortenString';
import moment from 'moment';

const Transcation = () => {
  const [history, setHistory] = React.useState([])
  React.useEffect(() => {
    axios.get("https://dapp-eallet-deploy1.vercel.app/api/getAddress").then((res) => {
      const temp_address = res.data.address;

      axios.post("https://dapp-eallet-deploy1.vercel.app/api/getTransactions", {
        address: temp_address,
      }).then((res) => {
        const temp_history = [];
        let id = 1;
        for (const transaction of res.data.result) {
          const hash = shortenString(transaction.hash, 5, 3);
          const tmpid = id++;
          let direction = 'IN';
          if(transaction.from_address.toLowerCase() === temp_address.toLowerCase()) {
            direction = 'OUT';
          }
          const amount = transaction.value / 1000000000000000000;
          const date = moment(transaction.block_timestamp).format('DD-MMM-YYYY');

          temp_history.push({
            id: tmpid,
            hash: hash,
            direction: direction,
            amount: amount,
            date: date,
          })
        }
        setHistory(temp_history);
      }).catch((err) => {});
    }).catch((err) => {
      console.log(err);
    });
  }, [])
  function getMessage() {
    return 'Transcations';
  }
  
  return (
    <View style={styles.conatiner}>
      <View style={styles.line}></View>
      <Text style={styles.textcolor1}>{getMessage()}</Text>

      <FlatList
        data={history}
        renderItem={({item}) => (
          <View style={styles.historybox}>
            <Text style={styles.textcolor2}>{item.id}</Text>
            <View>
              <Text style={styles.textcolor3}>{item.hash}</Text>
              <Text style={styles.textcolor4}>{item.date}</Text>
            </View>
            <Text>{item.direction}</Text>
            <Text style={styles.textcolor5}>$ {item.amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 100,
    alignSelf: 'center',
    marginTop: 15,
  },
  conatiner: {
    backgroundColor: '#DEDEDE',
    margin: 10,
    borderRadius: 30,
  },
  historybox: {
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
    marginBottom: 2,
  },

  textcolor1: {
    marginTop: 25,
    color: 'black',
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },

  textcolor2: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textcolor3: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textcolor4: {
    color: 'black',
    fontSize: 12,
    textAlign: 'right',
  },

  textcolor5: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Transcation;
