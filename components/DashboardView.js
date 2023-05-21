import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//files_Components
import DebitWallet from './DebitWallets.js';
import AccountDetails from './AccountDetails.js';
import Transcations from './Transcation.js';

export const DashboardView = () => {
    return (
        <LinearGradient colors={['#25da9d', '#fffff']} style={{height: 790,}} locations={[0, 1]}>
            <View>
                <AccountDetails />
                <DebitWallet />
                <Transcations />            
            </View>
        </LinearGradient>
    );
};

export default DashboardView;