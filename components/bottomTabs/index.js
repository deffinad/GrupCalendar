import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Home } from './../../pages/Home'
import { ListKegiatan } from './../../pages/ListKegiatan'
import { Profile } from './../../pages/Profile'
import { COLORS } from '../../assets/color';

const Tab = createBottomTabNavigator()

const TabArr = [
    {
        route: 'Home',
        label: 'Home',
        icon: 'home',
        component: Home,
    },
    {
        route: 'ListKegiatan',
        label: 'Kegiatan',
        icon: 'clipboard',
        component: ListKegiatan,
    },
    {
        route: 'Profile',
        label: 'Profile',
        icon: 'person',
        component: Profile,
    }
];

export const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    height: 74,
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    left: 10,
                    borderRadius: 22
                },
            }}>
            {TabArr.map((item, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={item.route}
                        component={item.component}
                        options={{
                            tabBarLabel: item.label,
                            tabBarButton: props => <TabButton {...props} item={item} />,
                        }}
                    />
                );
            })}
        </Tab.Navigator>
    )
}

const TabButton = props => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;

    return (
        <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
            activeOpacity={1}
            onPress={onPress}>
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    zIndex: 1,
                    gap: 8,
                    borderRadius: 20,
                    backgroundColor: focused ? COLORS.secondary : 'transparent',
                    padding: 10,
                }}>

                <Ionicons name={focused ? item.icon : item.icon + '-outline'} size={25} color={focused ? COLORS.primary : COLORS.primary} />

                {focused ? (
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '700',
                        }}>
                        {item.label}
                    </Text>
                ) : null}
            </View>
        </TouchableOpacity>
    );
};
