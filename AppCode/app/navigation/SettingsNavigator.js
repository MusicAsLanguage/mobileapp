import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SettingScreen from "../screens/SettingScreen";
import AccountDetailsScreen from "../screens/AccountDetailsScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import LanguageScreen from "../screens/LanguageScreen";
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
      name="AccountDetails" 
      component={AccountDetailsScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Notifications" 
      component={NotificationsScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="Language" 
      component={LanguageScreen}
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