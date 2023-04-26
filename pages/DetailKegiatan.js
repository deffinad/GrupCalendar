import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../assets/color'
import { Badge } from '../components/badge'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

export const DetailKegiatan = ({ navigation }) => {
    return (
        <ScrollView>
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
                    <Text style={styles.nama}>Nama Kegiatan</Text>
                    <View style={{ alignItems: "flex-start" }}>
                        <Badge label={'leader'} type={'primary'} />
                    </View>

                    <View style={{ marginVertical: 20 }}>
                        <Text style={{ lineHeight: 22, fontSize: 16 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.label}>Tanggal</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Ionicons name='calendar' size={20} color={'grey'} />
                                <Text style={styles.tanggal}>April 18, 2023</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.label}>Waktu</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Ionicons name='time' size={20} color={'grey'} />
                                <Text style={styles.tanggal}>April 18, 2023</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.label}>Label</Text>
                            <Badge label={'grup'} type={'primary'} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', gap: 5 }}>
                            <Text style={styles.label}>Assigned</Text>

                            <View style={{ gap: 10, marginTop: 10 }}>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <View style={{ width: 30, height: 30, backgroundColor: COLORS.primary, borderRadius: 100 }}></View>
                                    <Text style={styles.textHeaderDesc}>Deffin Achmaddifa</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <View style={{ width: 30, height: 30, backgroundColor: COLORS.primary, borderRadius: 100 }}></View>
                                    <Text style={styles.textHeaderDesc}>Deffin Achmaddifa</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <View style={{ width: 30, height: 30, backgroundColor: COLORS.primary, borderRadius: 100 }}></View>
                                    <Text style={styles.textHeaderDesc}>Deffin Achmaddifa</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                    <View style={{ width: 30, height: 30, backgroundColor: COLORS.primary, borderRadius: 100 }}></View>
                                    <Text style={styles.textHeaderDesc}>Deffin Achmaddifa</Text>
                                </View>
                            </View>
                        </View>
                    </View>
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
