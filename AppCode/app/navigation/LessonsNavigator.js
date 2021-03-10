import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LessonsScreen from "../screens/LessonsScreen";
import LessonDetailsScreen from "../screens/LessonDetailsScreen";
import ActivityScreen from "../screens/ActivityDetailsScreen";
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
        name="Lessons"
        component={LessonsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="LessonDetails" component={LessonDetailsScreen} />
      <Stack.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          headerTransparent: true,
          headerShown: true,
          headerTitle: null,
        }}
      />
    </Stack.Navigator>
  );
};

export default LessonsNavigator;
