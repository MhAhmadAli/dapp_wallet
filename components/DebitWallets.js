import React from "react";
import { StyleSheet, View } from 'react-native';
import { Text } from "react-native-paper";

const DebitWallets = () => {
    const getMessage = () => {
        return 'My Wallets';
    };

    return (

        <View >
            <Text style={styles.mywallet}>{getMessage()}</Text>
            <View style={styles.walletdetailscontainer}>
                <View style={styles.walletdetails1}>
                    <Text style={styles.textcolor1}>Debit Wallets</Text>
                    <Text style={styles.textcolor2}>4132 **** **** 3659</Text>
                    <Text style={styles.textcolor2}>Balance</Text>
                    <Text style={styles.textcolor2}>$4,356</Text>
                </View>
                <View style={styles.walletdetails2}>
                    <Text style={styles.textcolor1}>Credit Wallets</Text>
                    <Text style={styles.textcolor2}>4132 **** **** 3659</Text>
                    <Text style={styles.textcolor2}>Balance</Text>
                    <Text style={styles.textcolor2}>$4,356</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create(
    {
        walletdetailscontainer: {
            flexDirection: 'row',
        },
        mywallet:{
            color: 'white',
            fontSize: 20,
            marginRight: 20,
            marginLeft: 20,
            marginBottom: 20,
            fontWeight: 'bold',
        },

        walletdetails1: {
            borderColor: 'black',
            borderWidth: 5,
            marginBottom: 20,
            borderRadius: 30,
            backgroundColor: '#252525',
            padding: 10,
            marginLeft: 20,
            marginRight: 10,
        },

        walletdetails2: {
            borderColor: 'black',
            borderWidth: 5,
            marginBottom: 20,
            borderRadius: 30,
            backgroundColor: '#252525',
            padding: 11,
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
    }
);
export default DebitWallets;