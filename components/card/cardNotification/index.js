import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import Card from '..'

export const CardNotification = ({ title, id }) => {
    return (
        <View key={id}>
            <Card style={{ borderWidth: 0, }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 16 }}>{title}</Text>
                    <Ionicons name="chevron-forward-outline" size={30} color='black' />
                </View>
            </Card>
        </View>
    )
}
