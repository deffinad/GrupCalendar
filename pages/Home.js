import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { COLORS } from '../assets/color'
import { Ionicons } from '@expo/vector-icons'
import { Calendar } from 'react-native-calendars'
import { TopTabs } from '../components/topTabs'
import { CardKegiatan } from '../components/card/cardKegiatan'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { Image } from 'react-native'
import { color } from 'react-native-reanimated'

export const Home = ({ navigation }) => {

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/header.png')}
                    style={{ height: 203, position: 'absolute', top: 0, left: 0, right: 0, width: "100%" }}
                    resizeMode='stretch'
                />

                <View style={{
                    paddingHorizontal: 33, flex: 1, gap: 33, paddingTop: 33, paddingBottom: 100
                }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', gap: 20, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.textHeader}>Welcome,</Text>
                            <Text style={styles.textHeaderDesc}>Deffin Achmaddifa</Text>
                        </View>

                        <View>
                            <View style={{ width: 40, height: 40, backgroundColor: COLORS.primary, borderRadius: 100 }} />
                        </View>
                    </View>

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
                            todayTextColor: COLORS.white,
                            todayBackgroundColor: COLORS.primary,
                            dayTextColor: '#2d4150',
                            textDisabledColor: 'gray'
                        }} />
                    <CardKegiatan />
                </View>
            </SafeAreaView >
        </ScrollView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textHeader: {
        fontSize: 20,
        fontWeight: '700',
        color: COLORS.white
    },
    textHeaderDesc: {
        fontSize: 18,
        fontWeight: 700,
        color: COLORS.white
    }
})