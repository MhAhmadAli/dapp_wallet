import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IssueDate = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textBlock1}>Issue Date</Text>
            <Text style={styles.textBlock2}>05/09</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },

    textBlock1: {
        fontSize: 14,
        color: 'white',
        paddingLeft: 150,
    },

    textBlock2: {
        fontSize: 14,
        color: 'white',
        paddingLeft: 13,
    },
});

export default IssueDate;
