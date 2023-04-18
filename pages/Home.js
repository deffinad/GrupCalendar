import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { COLORS } from '../assets/color'
import { Ionicons } from '@expo/vector-icons'
import { Calendar } from 'react-native-calendars'
import { TopTabs } from '../components/topTabs'

export const Home = () => {

    return (

        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                    <Text style={styles.textHeader}>Selamat Datang</Text>
                    <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <View style={{ width: 30, height: 30, backgroundColor: COLORS.primary, borderRadius: 100 }}></View>
                        <Text style={styles.textHeaderDesc}>Deffin Achmaddifa</Text>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Pressable style={{ borderRadius: 100, width: 40, height: 40, backgroundColor: COLORS.white, elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name='filter' size={20} color={COLORS.primary} />
                    </Pressable>
                </View>
            </View>

            <View>
                <Calendar
                    style={{
                        borderWidth: 2,
                        borderColor: 'whitesmoke',
                        borderRadius: 22,
                        height: 380,
                    }}
                    theme={{
                        backgroundColor: COLORS.white,
                        calendarBackground: COLORS.white,
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#00adf5',
                        dayTextColor: '#2d4150',
                        textDisabledColor: 'gray'
                    }} />
            </View>

            <View style={{ flex: 1 }}>
                <TopTabs />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 33,
        gap: 33,
        backgroundColor: COLORS.white
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textHeaderDesc: {
        fontSize: 16
    }
})
