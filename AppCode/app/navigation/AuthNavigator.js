import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PasswordResetScreen from "../screens/PasswordResetScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Login" 
      component={LoginScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Register" 
      component={RegisterScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen
      name="ResetPassword"
      component={PasswordResetScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthNavigator;