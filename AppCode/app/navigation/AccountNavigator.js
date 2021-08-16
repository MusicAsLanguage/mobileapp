import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MessagesScreen from "../screens/MessagesScreen";

const Stack = createStackNavigator();

const HelpNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Messages" 
      component={MessagesScreen}
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

export default HelpNavigator;