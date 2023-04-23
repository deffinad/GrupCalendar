import React from 'react'
import React from 'react'
import { View, Text } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { COLORS } from '../assets/color';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../components/input';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/button';

export const TambahKegiatan = () => {
    return (
        <ScrollView>
            <SafeAreaView>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                <View style={{ padding: 33, gap: 10, backgroundColor: COLORS.white }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Ionicons name='chevron-back' size={25} onPress={() => navigation.goBack()} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'flex-end' }}>
                            <Ionicons name='ellipsis-horizontal' size={25} />
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
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: 'gray'
                        }} />

                    <Input placeholder={'Judul'} />
                    <Input placeholder={'Deskripsi'} multiline={true} />
                    <Input placeholder={'Prioritas'} />
                    <Input placeholder={'Label'} />
                    <Input placeholder={'Asign'} />
                    <Button title={'Submit'} style={{ backgroundColor: COLORS.primary }} textColor={COLORS.white} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
