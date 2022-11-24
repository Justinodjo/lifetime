import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from './src/SplashScreen';

// import * as Sentry from '@sentry/react-native';

// Sentry.init({ 
//   dsn: 'https://88f939693e174c06a3daaaff2b2c2203@o4504133940936704.ingest.sentry.io/4504133948211200', 
// });

export default function App(){
    return(
        {
            // SafeArea Calculation (install: expo install react-native-safe-area-context)
        },
        <NavigationContainer>
            <SafeAreaProvider>
                <SplashScreen/> 
            </SafeAreaProvider>
        </NavigationContainer>
    );
}