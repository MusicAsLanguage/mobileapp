import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import LessonsNavigator from './LessonsNavigator';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: colors.primary,
            activeTintColor: colors.white,
            inactiveBackgroundColor: colors.white,
            inactiveTintColor: colors.primary,
        }}>
        <Tab.Screen 
            name="Lessons" 
            component={LessonsNavigator} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="book-music" color={color} size={size} /> 
            }}
        />
        <Tab.Screen 
            name="Account" 
            component={AccountScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="account" color={color} size={size} /> 
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;