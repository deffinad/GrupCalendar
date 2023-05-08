import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../assets/color'
import { Badge } from '../components/badge'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { getAcivityById } from '../services/api'

export const DetailKegiatan = ({ navigation, route }) => {
    const { activity_id } = route.params
    const [data, setData] = useState({
        name: "",
        description: "",
        date: "",
        time: "",
        label: "",
        priority: "",
        assign: []
    })

    useEffect(() => {
        getAcivityById(activity_id)
            .then(result => {
                setData(result.data[0])
            })
            .catch(error => {
                console.log(error)
            })
    }, [activity_id])
    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <SafeAreaView style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Ionicons name='chevron-back' size={25} onPress={() => navigation.goBack()} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Ionicons name='ellipsis-horizontal' size={25} />
                    </View>
                </View>

                <View style={{ flexDirection: 'column', gap: 10 }}>
                    <Text style={styles.nama}>{data.name}</Text>
                    <View style={{ alignItems: "flex-start" }}>
                        <Badge label={data.priority} type={'primary'} />
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>
                            {data.description}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.label}>Tanggal</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Ionicons name='calendar' size={20} color={'grey'} />
                                <Text style={styles.tanggal}>{data.date}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.label}>Waktu</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Ionicons name='time' size={20} color={'grey'} />
                                <Text style={styles.tanggal}>{data.time}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.label}>Label</Text>
                            <Badge label={data.label} type={'primary'} />
                        </View>
                    </View>

                    {data.assign.length === 0 ? null : (
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flexDirection: 'column', gap: 5 }}>
                                <Text style={styles.label}>Assigned</Text>

                                <View style={{ gap: 10, marginTop: 10 }}>
                                    {data.assign.map((item, index) => (
                                        <View key={index} style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                            <View style={{ width: 30, height: 30, backgroundColor: COLORS.primary, borderRadius: 100 }}></View>
                                            <Text style={styles.textHeaderDesc}>{item}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    )}
                </View>
            </SafeAreaView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 33,
        gap: 33,
        flex: 1,
        backgroundColor: COLORS.white
    },
    nama: {
        fontSize: 24,
        fontWeight: '600'
    },
    label: {
        color: 'grey'
    },
    tanggal: {
        fontSize: 16
    }
})
