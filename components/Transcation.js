import React from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

const Transcation = () => {
  function getMessage() {
    return 'Transcations';
  }
  const History = [
    {
      id: 1,
      name: 'ShopName',
      Date: '18-May-2023',
      Amount: '5500',
    },
    {
      id: 2,
      name: 'ShopName',
      Date: '18-May-2023',
      Amount: '5500',
    },
    {
      id: 3,
      name: 'ShopName',
      Date: '18-May-2023',
      Amount: '5500',
    },
    {
      id: 4,
      name: 'ShopName',
      Date: '18-May-2023',
      Amount: '5500',
    },
  ];
  return (
    <View style={styles.conatiner}>
      <View style={styles.line}></View>
      <Text style={styles.textcolor1}>{getMessage()}</Text>

      <FlatList
        data={History}
        renderItem={({item}) => (
          <View style={styles.historybox}>
            <Text style={styles.textcolor2}>{item.id}</Text>
            <View>
              <Text style={styles.textcolor3}>{item.name}</Text>
              <Text style={styles.textcolor4}>{item.Date}</Text>
            </View>
            <Text style={styles.textcolor5}>$ {item.Amount}</Text>
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
