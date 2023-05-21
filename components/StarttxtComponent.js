import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const Strttxt = () => {

    return (
        <View>
            <Text style={styles.strttext}>Let Get Start The Digital Banking</Text>
            <Text style={styles.strtdetails}>It is a Long established fact that a be distracted by the readable a
                page when looking at its.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    strttext: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        marginTop: 15,
        fontFamily: 'Arial',
    },

    strtdetails: {
        margin: 5,
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default Strttxt;
