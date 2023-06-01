import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//files_Components
import Transcation_Details from './TranscationDetails.js';
import AccountDetails from './AccountDetails.js';
import Transcations from './Transcation.js';

export const DashboardView = () => {
  return (
    <View>
      <AccountDetails />
      <Transcation_Details />
      <Transcations />
    </View>
  );
};

export default DashboardView;
