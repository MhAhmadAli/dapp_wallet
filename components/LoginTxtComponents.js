import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';
const LoginTxt = () => {
    return (
        <View>
            <Text style={styles.LoginText}>
                Welcome To D-Pay
            </Text>
            <Text style={styles.LoginText}>
                Internet Banking
            </Text>
        </View>

    );
};

const styles = StyleSheet.create(
    {
        LoginText: {
            fontSize: 25,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Open Sans',
        }
    },
);

export default LoginTxt;