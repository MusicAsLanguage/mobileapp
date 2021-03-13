import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import LessonsScreen from './app/screens/LessonsScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import navigationTheme from './app/navigation/navigationTheme';
import AuthContext from "./app/auth/context";
import { useState } from 'react';


export default function App() {
  // const [user, setUser] = useState();

  // return (
  //   <AuthContext.Provider value={{user, setUser}}>
  //     <NavigationContainer theme={navigationTheme}>
  //       {user? <AppNavigator /> : <AuthNavigator />}
  //     </NavigationContainer>
  //   </AuthContext.Provider>
  // );

  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
      {/* <AppNavigator /> */}
    </NavigationContainer>
  );
}