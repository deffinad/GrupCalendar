import React, { useEffect } from 'react'
import Card from '..'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export const CardKegiatan = ({ name, description, date, onPress, style }) => {

    return (
        <Card style={[{ flexDirection: 'row' }, style]} onPress={onPress}>
            <View style={{ flex: 1, alignContent: 'center' }}>
                <Text style={styles.nama}>{name}</Text>
                <Text numberOfLines={2} style={styles.deskripsi}>{description}</Text>
                <Text style={styles.tanggal}>{date}</Text>
            </View>

            <View style={{ alignContent: 'flex-start', alignItems: 'flex-start' }}>
                <Ionicons name='ellipsis-horizontal' size={20} />
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    nama: {
        fontSize: 18,
        fontWeight: '600'
    },
    deskripsi: {
        color: 'grey',
        fontSize: 15,
        marginTop: 5
    },
    tanggal: {
        fontSize: 14,
        color: 'grey',
        marginTop: 10
    }
})