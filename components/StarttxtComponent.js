import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Strttxt = () => {

    return (
        <View>
            <Text style={styles.strttext}>Easy Way to</Text>
            <Text style={styles.strttext1}>Save Your Money</Text>
            <Text style={styles.strtdetails}>The Best Place to transact and</Text>
            <Text style={styles.strtdetails}>Save money</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    strttext: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        marginTop: 6,
        fontFamily: 'Arial',
        textAlign: 'left',
        marginLeft: 15,
    },
    strttext1: {
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontFamily: 'Arial',
        textAlign: 'left',
        marginLeft: 15,
    },

    strtdetails: {
        color: 'black',
        textAlign: 'left',
        marginLeft: 15,
        fontSize: 16,
    },
});

export default Strttxt;
