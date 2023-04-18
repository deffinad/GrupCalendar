import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { Personal } from '../../pages/Personal';
import { Grup } from '../../pages/Grup';

const Tab = createMaterialTopTabNavigator();

export const TopTabs = () => {
    return (
        <Tab.Navigator initialRouteName='Personal'>
            <Tab.Screen name='Personal' component={Personal} />
            <Tab.Screen name='Grup' component={Grup} />
        </Tab.Navigator>
    )
}
