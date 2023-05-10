import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Calendar } from 'react-native-calendars';
import { COLORS } from '../assets/color';
import { StatusBar } from 'expo-status-bar';
import { Input } from '../components/input';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../components/button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { addActivity, getEmployeeForAsign } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const TambahKegiatan = ({ navigation }) => {
    const [openPriotas, setOpenPrioritas] = useState(false);
    const [openAsign, setOpenAsign] = useState(false);
    const [items, setItems] = useState([
        { label: 'High', value: 'High' },
        { label: 'Middle', value: 'Middle' },
        { label: 'Low', value: 'Low' },
    ]);

    const [tanggal, setTanggal] = useState("");
    const [judul, setJudul] = useState("");
    const [deskripsi, setDeskripsi] = useState("");
    const [prioritas, setPrioritas] = useState("");
    const [label, setLabel] = useState("");
    const [asign, setAsign] = useState([]);

    const [listUser, setListUser] = useState([]);
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const onChangeJudulHandler = (judul) => {
        setJudul(judul);
    };

    const onChangeDeskripsiHandler = (deskripsi) => {
        setDeskripsi(deskripsi);
    };

    const onChangeLabelHandler = (label) => {
        setLabel(label);
    };

    const onChangeAsignHandler = (asign) => {
        setAsign(asign);
    };

    useEffect(() => {
        if (listUser.length === 0) {
            retrieveData()
                .then(user => {
                    setUser(user)
                    getEmployeeForAsign(user.id)
                        .then(result => {
                            result.data.map(item => {
                                setListUser(prevListUser => (
                                    [
                                        ...prevListUser,
                                        {
                                            label: item.nama,
                                            value: item.id
                                        }
                                    ]
                                ))
                            })
                        })
                        .catch(error => {
                            console.log(error)
                        })
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }, [])

    const onSubmitFormHandler = async (event) => {
        if (!judul.trim() || !deskripsi.trim() || !label.trim() || !prioritas.trim() || asign.length === 0 || !tanggal.trim()) {
            alert("invalid");
        } else {
            setIsLoading(false);
            var today = new Date();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const activity_id = Math.floor(Math.random() * 100)

            const data = {
                "activity_id": activity_id.toString(),
                "creator_id": user.id,
                "name": judul,
                "description": deskripsi,
                "date": tanggal,
                "time": time,
                "label": label,
                "priority": prioritas,
                "assign": asign
            }
            addActivity(data)
                .then(result => {
                    Alert.alert('Pesan', `${result}`, [
                        { text: 'OK', onPress: () => navigation.navigate('Home') }
                    ])
                })
                .catch(error => { console.log(error) })

        }
    };

    const retrieveData = async () => {
        try {
            const user = await AsyncStorage.getItem('ACCESS_TOKEN')
            return JSON.parse(user)
        } catch (error) {
            return error
        }
    }

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
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}> Tambah Kegiatan</Text>
                    </View >

                    <Calendar
                        onDayPress={item => {
                            const date = new Date()
                            if (item.day >= date.getDate() && item.month >= date.getMonth() + 1 && item.year >= date.getFullYear()) {
                                setTanggal(item.dateString)
                            }

                        }}
                        markedDates={{
                            [tanggal]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                        }}
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
                            selectedDayBackgroundColor: COLORS.primary,
                            selectedDayTextColor: COLORS.white,
                            todayTextColor: COLORS.primary,
                            dayTextColor: '#2d4150',
                            textDisabledColor: 'gray',
                            arrowColor: COLORS.primary
                        }} />

                    <Input
                        placeholder={'Judul'}
                        value={judul}
                        editable={!isLoading}
                        onChangeText={onChangeJudulHandler}
                    />
                    <Input
                        placeholder={'Deskripsi'}
                        multiline={true}
                        value={deskripsi}
                        editable={!isLoading}
                        onChangeText={onChangeDeskripsiHandler}
                    />

                    <DropDownPicker
                        open={openPriotas}
                        value={prioritas}
                        items={items}
                        zIndex={5000}
                        setOpen={setOpenPrioritas}
                        setValue={setPrioritas}
                        onSelectItem={item => {
                            setPrioritas(item.label)
                        }}
                        setItems={setItems}
                        placeholder='Prioritas'
                        listMode='SCROLLVIEW'
                        style={{ backgroundColor: COLORS.input, borderWidth: 0, borderRadius: 15, paddingHorizontal: 20 }}
                        dropDownContainerStyle={{ backgroundColor: COLORS.white, borderWidth: 3, borderRadius: 15, borderColor: COLORS.input }}
                        textStyle={{ color: 'grey' }}
                        ArrowDownIconComponent={() => <Ionicons name='chevron-down' size={20} color={'grey'} />}
                        ArrowUpIconComponent={() => <Ionicons name='chevron-up' size={20} color={'grey'} />}
                    />

                    <Input
                        placeholder={'Label'}
                        value={label}
                        editable={!isLoading}
                        onChangeText={onChangeLabelHandler}
                    />
                    <DropDownPicker
                        searchable={true}
                        multiple={true}
                        min={0}
                        max={5}
                        open={openAsign}
                        value={asign}
                        items={listUser}
                        setOpen={setOpenAsign}
                        setValue={setAsign}
                        setItems={setListUser}
                        zIndex={4000}
                        placeholder='Asign'
                        listMode='SCROLLVIEW'
                        style={{ backgroundColor: COLORS.input, borderWidth: 0, borderRadius: 15, paddingHorizontal: 20 }}
                        dropDownContainerStyle={{ backgroundColor: COLORS.white, borderWidth: 3, borderRadius: 15, borderColor: COLORS.input }}
                        textStyle={{ color: 'grey' }}
                        ArrowDownIconComponent={() => <Ionicons name='chevron-down' size={20} color={'grey'} />}
                        ArrowUpIconComponent={() => <Ionicons name='chevron-up' size={20} color={'grey'} />}
                    />
                    <Button
                        title={'Submit'}
                        style={{ backgroundColor: COLORS.primary, marginVertical: 24 }}
                        textColor={COLORS.white}
                        onClick={onSubmitFormHandler}
                        disable={isLoading}
                    />
                </View >
            </SafeAreaView >
        </ScrollView >
    )
}