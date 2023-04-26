import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from '../assets/color';
import { Button } from '../components/button';
import { CardNotification } from '../components/card/cardNotification';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}> Profile</Text>
                <Pressable onPress={() => navigation.navigate('Notification')}>
                    <Ionicons name="notifications-outline" size={30} color='black' />
                </Pressable>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Ionicons name="person-circle-outline" size={200} color='black' />
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Azis Faisal Muharam</Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Last Notifications</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <CardNotification />
                <CardNotification />
                <CardNotification />
            </View>
            <Button title={'Logout'} style={{ backgroundColor: COLORS.primary, marginTop: 20 }} textColor={COLORS.white} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 33,
        paddingTop: 33,
        paddingBottom: 100,
        width: "100%",
        backgroundColor: COLORS.white,
    },
    header: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
    },

});
