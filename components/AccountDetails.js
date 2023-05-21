import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";
import LinearGradient from 'react-native-linear-gradient';

//FlexDetails
import FlexDetail from "./FlexDetail.js";

const AccountDetails = () => {
    return (
        <View style={styles.accountdetails}>
            <Text style={styles.textcolor1}>Muhammad Zaib</Text>
            <Text style={styles.textcolor2}>4132 1480 6731 3659</Text>
            <FlexDetail />
            <Text style={styles.textcolor3}>Lahore State</Text>
        </View>

    )
};

const styles = StyleSheet.create(
    {
        accountdetails: {
            borderColor: 'black',
            borderWidth: 5,
            margin: 20,
            borderRadius: 30,
            backgroundColor: '#252525',
        },

        textcolor1: {
            color: 'white',
            fontSize: 18,
            paddingLeft: 20,
            margin: 12,
            marginBottom: 20,
        },

        textcolor2: {
            color: 'white',
            fontSize: 22,
            textAlign: 'center',
            paddingBottom: 3,
        },

        textcolor3: {
            color: 'white',
            fontSize: 16,
            paddingLeft: 20,
            margin: 12,
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
        }
    }
);
export default AccountDetails;