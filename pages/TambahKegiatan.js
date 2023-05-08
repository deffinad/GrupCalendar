import React from 'react'
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
import { addActivity } from '../services/api';



export const TambahKegiatan = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
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
    const [asign, setAsign] = useState("");

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

    const onSubmitFormHandler = async (event) => {
        if (!judul.trim() || !deskripsi.trim() || !prioritas.trim() || !label.trim() || !asign.trim()) {
            alert("invalid");
        } else {

            setIsLoading(false);
            const data = {
                "judul": judul,
                "deskripsi": deskripsi,
                "prioritas": prioritas,
                "label": label,
                "asign": asign,
            }
            addActivity(data).then(result => { console.log(result) }).catch(error => { console.log(error) })
            console.log("test")
        }


    };

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
                            setTanggal(item.dateString)
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
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            todayTextColor: '#00adf5',
                            dayTextColor: '#2d4150',
                            textDisabledColor: 'gray'
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
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
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
                    <Input
                        placeholder={'Asign'}
                        value={asign}
                        editable={!isLoading}
                        onChangeText={onChangeAsignHandler}
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