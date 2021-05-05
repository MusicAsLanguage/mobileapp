import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import LessonsNavigator from './LessonsNavigator';
import ToolboxScreen from '../screens/ToolboxScreen';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: colors.white,
            activeTintColor: colors.deepskyblue,
            inactiveBackgroundColor: colors.white,
            inactiveTintColor: colors.grey,
            labelStyle: {
                fontSize: 11,
            },
        }}>
        <Tab.Screen 
            name="Home" 
            component={LessonsNavigator} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="home" color={color} size={size} /> 
            }}
        />
        <Tab.Screen 
            name="Toolbox" 
            component={ToolboxScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="briefcase-download-outline" color={color} size={size} /> 
            }}
        />
        <Tab.Screen 
            name="Help" 
            component={AccountScreen} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="help-circle-outline" color={color} size={size} /> 
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;