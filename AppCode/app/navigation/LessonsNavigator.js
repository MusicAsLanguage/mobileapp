import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import LessonDetailsScreen from "../screens/LessonDetailsScreen";
import ActivityScreen from "../screens/ActivityDetailsScreen";
import ToolboxScreen from "../screens/ToolboxScreen";
import SongListScreen from "../screens/SongListScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const LessonsNavigator = () => {
  return (
    <Stack.Navigator
      mode="modal" // common iOS pattern: make the screens slide in from the bottom
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          height: 70,
        },
        headerTintColor: colors.white,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="LessonDetails" 
        component={LessonDetailsScreen}
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{ 
          headerTransparent: true,
          headerShown: true,
          headerTitle: null,          
        }}
      />
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
};

export default LessonsNavigator;
