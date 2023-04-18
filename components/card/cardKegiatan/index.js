import React from 'react'
import Card from '..'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const CardKegiatan = ({ onPress }) => {
    return (
        <Card style={{ flexDirection: 'row' }} onPress={onPress}>
            <View style={{ flex: 1, alignContent: 'center' }}>
                <Text style={styles.nama}>Nama Kegiatan</Text>
                <Text style={styles.deskripsi}>Deskripsi Kegiatan</Text>
                <Text style={styles.tanggal}>Tanggal Kegiatan</Text>
            </View>

            <View style={{ alignContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ionicons name='ellipsis-horizontal' size={20} />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    nama: {
        fontSize: 20,
        fontWeight: '600'
    },
    deskripsi: {
        color: 'grey'
    },
    tanggal: {
        fontSize: 18,
        color: 'grey',
        marginTop: 10
    }
})