import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TermsAndConditionsScreen from "../screens/TermsAndConditionsScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";

const Stack = createStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Settings" 
      component={SettingScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Profile" 
      component={ProfileScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="TermsAndConditions" 
      component={TermsAndConditionsScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="PrivacyPolicy" 
      component={PrivacyPolicyScreen}
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

export default SettingsNavigator;