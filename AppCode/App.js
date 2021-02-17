import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import LessonsScreen from './app/screens/LessonsScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import navigationTheme from './app/navigation/navigationTheme';


export default function App() {
  //return <WelcomeScreen />;
  //return <LessonsScreen />;
  //return <AccountScreen />;
  //return <LoginScreen />;
  //return <RegisterScreen />;
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  )
}