import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import LessonsScreen from './app/screens/LessonsScreen';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {
  //return <WelcomeScreen />;
  //return <LessonsScreen />;
  //return <AccountScreen />;
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}