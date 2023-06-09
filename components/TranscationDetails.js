import { Icon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const TranscationDetails = () => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.walletdetailscontainer}>
        <View>
          <LinearGradient
            colors={['rgba(167,131,255,1)', 'rgba(81,108,250,1)']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            locations={[0.2, 1]}
            style={styles.Transfer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TransferScreen')}>
              <Text
                style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>
                Transfer
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View>
          <TouchableOpacity style={styles.Download}
            onPress={() => navigation.navigate('Receive')}
          >
            <Text style={{ color: 'blue', fontSize: 17, fontWeight: 'bold' }}>
              Receive
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletdetailscontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginRight: 30,
    marginLeft: 30,
  },

  mywallet: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  Transfer: {
    marginBottom: 20,
    borderRadius: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 20,
    paddingRight: 20,
    ...Platform.select({
      android: {
        elevation: 15,
        backgroundColor: 'black',
      },
    }),
  },

  Download: {
    marginBottom: 20,
    borderRadius: 30,
    padding: 10,
  },

  Add: {
    marginBottom: 20,
    borderRadius: 30,
    padding: 10,
  },

  textcolor1: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 20,
  },
  textcolor2: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    paddingBottom: 3,
  },
  textcolor3: {
    color: 'white',
    fontSize: 16,
    paddingLeft: 20,
    marginBottom: 20,
  },
});

export default TranscationDetails;
