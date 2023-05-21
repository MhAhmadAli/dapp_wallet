import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Modal, Button, TouchableHighlight } from 'react-native';
// import CATRadioButton from './components/CreateAccount/CATRadioButton.js';

const CATFields = () => {
    return (
        <View>
            <TextInput style={styles.CATEmail} placeholder="Email" autoCapitalize="none"
                keyboardType="email-address"></TextInput>
            <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.CATPassword} placeholder="Password" secureTextEntry></TextInput>
                <TextInput style={styles.CATrewritePassword} placeholder="Re-Enter Password" secureTextEntry></TextInput>
            </View>
            <TextInput style={styles.CATrewritecountry} placeholder="Country/Region"></TextInput>
            <TextInput style={styles.CATrewritephone} placeholder="Phone Number"></TextInput>
            <TouchableOpacity style={styles.Registerbutton}>
                <Text style={{ color: 'white', fontSize: 19, textAlign: 'center' }} >Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        CATEmail: {
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 30,
            paddingLeft: 25,
            margin: 8,
        },

        CATPassword: {
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 30,
            paddingLeft: 25,
            paddingRight: 80,
            marginTop: 8,
            marginBottom: 8,
            marginLeft: 8,
        },

        CATrewritePassword: {
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 30,
            paddingLeft: 25,
            marginTop: 8,
            marginBottom: 8,
            marginLeft: 8,
            paddingRight: 13,
        },

        CATrewritecountry: {
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 30,
            paddingLeft: 25,
            margin: 8,
        },

        CATrewritephone: {
            borderWidth: 3,
            borderColor: 'black',
            borderRadius: 30,
            paddingLeft: 25,
            margin: 8,
            marginBottom: 10,
        },

        Registerbutton: {
            backgroundColor: '#3774cd',
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 16,
            paddingBottom: 16,
            marginTop: 3,
            marginLeft: 12,
            marginRight: 12,
            borderRadius: 50,
        },
    }
)

export default CATFields;
