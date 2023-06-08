import React from 'react';
import { StartPageComponent } from './components/StartPageFile';
import { LoginPage } from './components/LoginPage.js';
import { DashboardView } from './components/DashboardView.js';
import LoginField from './components/LoginFieldsComponents.js';
import { RegisterScreen } from './components/RegisterScreen.js';
import { TransferScreen } from './components/TransferScreen.js';
import { TranscationDetails } from './components/TranscationDetails.js';
import Receive from './components/Receive.js';

import TransferReceipt from './components/TransferReceipt.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="StartPageComponent"
          component={StartPageComponent}
        />
        <stack.Screen name="LoginPage" component={LoginPage} />
        <stack.Screen name="LoginField" component={LoginField} />
        <stack.Screen name="DashboardView" component={DashboardView} />
        <stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <stack.Screen
          name="TranscationDetails"
          component={TranscationDetails}
        />
        <stack.Screen name="Receive" component={Receive} />
        <stack.Screen name="TransferScreen" component={TransferScreen} />
        <stack.Screen name="TransferReceipt" component={TransferReceipt} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
