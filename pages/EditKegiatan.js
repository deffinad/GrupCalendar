import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { COLORS } from '../assets/color';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../components/input';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export const EditKegiatan = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'English', value: 'en' },
        { label: 'Deutsch', value: 'de' },
        { label: 'French', value: 'fr' },
    ]);
    return (
        <ScrollView>
            <SafeAreaView>
                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                <View style={{ padding: 33, gap: 10, backgroundColor: COLORS.white }}>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, alignItems: 'flex-start' }}>
                            <Ionicons name='chevron-back' size={25} onPress={() => navigation.goBack()} />
                        </View>
                    </View>

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Edit Kegiatan</Text>
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

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        placeholder='Select item'
                        listMode='SCROLLVIEW'
                        style={{ backgroundColor: COLORS.input, borderWidth: 0, borderRadius: 15, paddingHorizontal: 20 }}
                        dropDownContainerStyle={{ backgroundColor: COLORS.white, borderWidth: 3, borderRadius: 15, borderColor: COLORS.input }}
                        textStyle={{ color: 'grey' }}
                    />

                    <Input placeholder={'Label'} />
                    <Input placeholder={'Asign'} />
                    <Button title={'Submit'} style={{ backgroundColor: COLORS.primary, marginVertical: 24 }} textColor={COLORS.white} />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
