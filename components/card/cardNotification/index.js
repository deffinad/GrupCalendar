import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import Card from '..'

export const CardNotification = () => {
    return (
        <Card style={{ borderWidth: 0, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 16 }}>Nama Kegiatan</Text>
                <Ionicons name="chevron-forward-outline" size={30} color='black' />
            </View>
        </Card>
    )
}
