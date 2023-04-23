import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from '../assets/color';
import Card from '../components/Card';
import { Button } from '../components/button';

export const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}> Profile</Text>
                <Ionicons name="notifications-outline" size={30} color='black' />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
                <Ionicons name="person-circle-outline" size={200} color='black' />
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Azis Faisal Muharam</Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Last Notifications</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <Card />
                <Card />
            </View>
            <Button title={'Logout'} style={{ backgroundColor: COLORS.primary, marginTop: 20 }} textColor={COLORS.white} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 33,
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
