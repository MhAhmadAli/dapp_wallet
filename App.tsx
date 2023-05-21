import React from 'react';
import {StartPageComponent} from './components/StartPageFile';
import {LoginPage} from './components/LoginPage.js';
import {DashboardView} from './components/DashboardView.js';
import {LoginField} from './components/LoginFieldsComponents.js'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="StartPageComponent" component={StartPageComponent} />
        <stack.Screen name="LoginPage" component={LoginPage} />
        <stack.Screen name="LoginField" component={LoginField} />
        <stack.Screen name="DashboardView" component={DashboardView} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
