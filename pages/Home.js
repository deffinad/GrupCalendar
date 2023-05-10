import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { COLORS } from '../assets/color'
import { Ionicons } from '@expo/vector-icons'
import { Calendar } from 'react-native-calendars'
import { TopTabs } from '../components/topTabs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { getAllActivity } from '../services/api'
import { Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Home = ({ navigation }) => {
    const [markDate, setMarkDate] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {
        retrieveData()
            .then(user => {
                setUser(user)
                getAllActivity(user.id)
                    .then(result => {
                        result.data.map(item => {
                            setMarkDate(prevData => (
                                {
                                    ...prevData,
                                    [item.date]: {
                                        marked: true,
                                        type: 'multi-dot',
                                        dots: [
                                            { color: 'red' },
                                            { color: 'blue' }
                                        ]
                                    }
                                }
                            ))
                        })
                    }).catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    const retrieveData = async () => {
        try {
            const user = await AsyncStorage.getItem('ACCESS_TOKEN')
            return JSON.parse(user)
        } catch (error) {
            return error
        }
    }

    return (
        <ScrollView style={{ flexGrow: 1 }} nestedScrollEnabled={true}>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                        <Text style={styles.textHeader}>Selamat Datang</Text>
                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                            <Ionicons name='person-circle-outline' size={30} />
                            <Text style={styles.textHeaderDesc}>{user.name}</Text>
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable style={{ borderRadius: 100, width: 40, height: 40, backgroundColor: COLORS.white, elevation: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('TambahKegiatan')}>
                            <Ionicons name='add' size={24} color={COLORS.primary} />
                        </Pressable>
                    </View>
                </View>

                <View>
                    <Calendar
                        markedDates={markDate}
                        markingType='multi-dot'
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
                            textDisabledColor: 'gray',
                            arrowColor: COLORS.primary
                        }} />
                </View>

                <View style={{ height: 700 }}>
                    <TopTabs />
                </View>
            </SafeAreaView>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 33,
        paddingTop: 33,
        paddingBottom: 100,
        gap: 33,
        backgroundColor: COLORS.white
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textHeaderDesc: {
        fontSize: 16
    },
    card: {
        backgroundColor: "#fff",
        height: 600,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 32
    },
})