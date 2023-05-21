import React from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

//files_Components
import LoginField from './LoginFieldsComponents.js';
import LoginTxt from './LoginTxtComponents.js';

export const LoginPage = () => {
    return (
        <LinearGradient colors={['#3E7EA7', '#97BFD9']} style={{height: 790,}} locations={[0, 1]}>
            <View >
                <LoginTxt />
                <LoginField />
            </View>
        </LinearGradient>
    );
};

export default LoginPage;