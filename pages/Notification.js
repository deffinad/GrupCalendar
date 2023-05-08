import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { COLORS } from '../assets/color';
import { Ionicons } from '@expo/vector-icons';
import { InputSearch } from '../components/input/inputSearch';
import { CardNotification } from '../components/card/cardNotification';
import { SafeAreaView } from 'react-native-safe-area-context';
import { profile } from '../services/api';
import { useNavigation } from '@react-navigation/native';


export const Notification = () => {
    const navigation = useNavigation()
    const [data, setData] = useState({
        id: '',
        nama: '',
        namaKegiatan: []
    })

    useEffect(() => {
        profile()
            .then(result => {
                setData(result.data[0].namaKegiatan)
            })
            .catch(error => {
                alert(error)
            })
    }, []);
    return (
        <SafeAreaView style={styles.container}>
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
                <FlatList
                    data={data}
                    renderItem={({ item, index }) => (
                        <CardNotification title={item.title} id={index} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 33,
        width: "100%",
        backgroundColor: COLORS.white,
    }
})