import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ToolboxScreen from "../screens/ToolboxScreen";
import SongListScreen from "../screens/SongListScreen";

const Stack = createStackNavigator();

const ToolboxNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen 
      name="Toolbox" 
      component={ToolboxScreen}
      options={{ headerShown: false }} 
    />
    <Stack.Screen 
      name="SongList" 
      component={SongListScreen}
      options={{ headerShown: false }} 
    />
  </Stack.Navigator>
);

export default ToolboxNavigator;