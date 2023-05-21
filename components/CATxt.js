import React from "react";
import { StyleSheet, View, Text } from 'react-native';

const CATxt = () => {

    return (
        <View>
            <Text style={styles.LoginText}>
                Create New Account
            </Text>
            <Text style={styles.DetailsText}>
                The world's largest Range of Crypto Services and Products in One Piece.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        LoginText: {
            textAlign: "center",
            color: 'black',
            fontSize: 18,
            marginTop: 10,
        },

        DetailsText: {
            textAlign: 'center',
            color: 'black',
            fontSize: 15,
            margin: 5,
        }
    },
);

export default CATxt;
