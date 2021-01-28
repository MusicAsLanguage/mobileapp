import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LessonsScreen from "../screens/LessonsScreen";
import LessonDetailsScreen from "../screens/LessonDetailsScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const LessonsNavigator = () => (
    <Stack.Navigator 
        //mode="modal"  // common iOS pattern: make the screens slide in from the bottom
        headerMode="screen"
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.primary, 
                height: 90},
            headerTintColor: colors.white,
            headerTitleAlign: "center",
        }}
    >
        <Stack.Screen 
            name="Lessons" 
            component={LessonsScreen} 
            options={{ headerShown: false }}/>
        <Stack.Screen 
            name="LessonDetails" 
            component={LessonDetailsScreen} />
    </Stack.Navigator>
)

export default LessonsNavigator;