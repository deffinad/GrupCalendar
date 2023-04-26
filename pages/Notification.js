import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../assets/color';
import { Ionicons } from '@expo/vector-icons';
import { InputSearch } from '../components/input/inputSearch';

export default function Notification() {
    return (
        <View styles={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Ionicons name='chevron-back' size={25} onPress={() => navigation.goBack()} />
                </View>
            </View>

            <View style={{ marginVertical: 22 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>All Notification</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <InputSearch
                    placeholder={'Search'}
                />
            </View>
            <View style={{ marginTop: 20 }}>
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
})