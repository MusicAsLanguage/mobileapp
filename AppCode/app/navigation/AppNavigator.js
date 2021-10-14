import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import AccountNavigator from './AccountNavigator';
import LessonsNavigator from './LessonsNavigator';
import ToolboxNavigator from './ToolboxNavigator';
import SettingsNavigator from './SettingsNavigator';
import colors from '../config/colors';
import uistrings from '../config/uistrings';

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
            name={uistrings.Home}
            component={LessonsNavigator} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="home" color={color} size={size} /> 
            }}
        />
        <Tab.Screen 
            name={uistrings.Toolbox} 
            component={ToolboxNavigator}
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="briefcase-download-outline" color={color} size={size} /> 
            }}
        />
        <Tab.Screen 
            name={uistrings.Help} 
            component={AccountNavigator} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name="help-circle-outline" color={color} size={size} /> 
            }}
        />
        <Tab.Screen 
            name={uistrings.Settings} 
            component={SettingsNavigator} 
            options={{
                tabBarIcon: ({ color, size }) =>
                    <AntDesign name="setting" color={color} size={size} /> 
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;