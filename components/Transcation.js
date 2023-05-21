import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';

const Transcation = () => {
  function getMessage() {
    return 'My Transcation';
  }
  const History = [
    {
      id: 1,
      Date: '18-May-2023',
      Amount: '$5500',
    },
    {
      id: 2,
      Date: '18-May-2023',
      Amount: '$5500',
    },
    {
      id: 3,
      Date: '18-May-2023',
      Amount: '$5500',
    },
    {
      id: 4,
      Date: '18-May-2023',
      Amount: '$5500',
    },
  ];
  return (
    <View>
      <Text style={styles.textcolor1}>{getMessage()}</Text>
      <FlatList
        data={History}
        renderItem={({item}) => (
          <View style={styles.historybox}>
            <Text style={styles.textcolor2}>{item.id}</Text>
            <Text style={styles.textcolor3}>{item.Date}</Text>
            <Text style={styles.textcolor4}>{item.Amount}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  historybox: {
    borderColor: 'black',
    borderWidth: 5,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: '#252525',
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
  },

  textcolor1: {
    color: 'white',
    fontSize: 20,
    paddingLeft: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },

  textcolor2: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
  },

  textcolor3: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  textcolor4: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  
});

export default Transcation;
