import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../assets/color';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';


export const ListKegiatan = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={30} color='black' />
                <Text style={{ fontWeight: 'bold', fontSize: 24, marginRight: 100 }}>Notification</Text>
            </View>
            <View style={styles.input}>
                <Ionicons name='search-outline' size={20} color='black' />
                <TextInput
                    cursorColor={'#DA6317'}
                    placeholder='Search'
                    placeholderTextColor={'black'}
                    style={{ fontSize: 16 }}
                    maxLength={50}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Card />
                <Card />
            </View>
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
    input: {
        marginTop: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderRadius: 15,
        backgroundColor: COLORS.input,
        paddingHorizontal: 20,
        paddingVertical: 15,
        height: 50
    },

});