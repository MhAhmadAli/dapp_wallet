import React, { useContext } from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//files_Components
import AccountDetails from './AccountDetails.js';
import { AppStateContext } from './AppStateContext.js';
import Transcations from './Transcation.js';
import Transcation_Details from './TranscationDetails.js';

export const DashboardView = () => {
  const [context, setContext] = useContext(AppStateContext);

  return (
    <View>
      <AccountDetails />
      <Transcation_Details />
      <Transcations />
    </View>
  );
};

export default DashboardView;
