import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ListKegiatan } from './../../pages/ListKegiatan'
import { Profile } from './../../pages/Profile'
import { COLORS } from '../../assets/color';
import { Home } from '../../pages/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TambahKegiatan } from '../../pages/TambahKegiatan';

const Tab = createBottomTabNavigator()

const TabArr = [
    {
        route: 'Home',
        label: 'Home',
        icon: 'calendar-outline',
        component: Home,
    },
    {
        route: 'ListKegiatan',
        label: 'Kegiatan',
        icon: 'book-outline',
        component: ListKegiatan,
    },
    {
        route: 'TambahKegiatan',
        label: 'Tambah Kegiatan',
        icon: 'add-outline',
        component: TambahKegiatan,
    },
    {
        route: 'Notifications',
        label: 'Notifications',
        icon: 'notifications-outline',
        component: Profile,
    },
    {
        route: 'Profile',
        label: 'Profile',
        icon: 'person-outline',
        component: Profile,
    }
];

export const BottomTabs = () => {
    return (
        <SafeAreaProvider>
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true,
                    headerShown: false,
                    tabBarStyle: {
                        height: 72,
                        position: 'absolute',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 22,
                        backgroundColor: COLORS.secondary
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
                                tabBarButton: props => <TabButton {...props} item={item} index={index} />,
                            }}
                        />
                    );
                })}
            </Tab.Navigator>
        </SafeAreaProvider>
    )
}

const TabButton = props => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    var middle = Math.round((TabArr.length - 1) / 2)

    return (
        props.index !== middle ? (
            <TouchableOpacity
                style={{ flex: 1, height: 72, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}
                activeOpacity={1}
                onPress={onPress}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 8,
                        borderRadius: 20,
                        backgroundColor: focused ? COLORS.secondary : 'transparent',
                        padding: 10,
                    }}>

                    <Ionicons name={item.icon} size={25} color={focused ? COLORS.primary : "#8F9BB3"} />
                </View>
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                style={{ flex: 1, height: 72, justifyContent: 'center', alignItems: 'center', top: -30 }}
                activeOpacity={1}
                onPress={onPress}>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        gap: 8,
                        borderRadius: 100,
                        backgroundColor: COLORS.primary,
                        borderWidth: 10,
                        borderColor: COLORS.white,
                        width: 100,
                        height: 100
                    }}>

                    <Ionicons name={item.icon} size={40} color={COLORS.white} />
                </View>
            </TouchableOpacity>

        )
    );
};
