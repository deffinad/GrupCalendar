import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Personal } from '../../pages/Personal';
import { Grup } from '../../pages/Grup';
import { COLORS } from '../../assets/color';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Personal' screenOptions={{
            tabBarPressColor: COLORS.secondary
        }}>
            <Tab.Screen name='Personal' component={Personal} />
            <Tab.Screen name='Grup' component={Grup} />
        </Tab.Navigator>
    )
}
