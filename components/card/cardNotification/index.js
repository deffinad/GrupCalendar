import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, View } from 'react-native'
import Card from '..'
import { Pressable } from 'react-native'

export const CardNotification = ({ title, index, handleClick }) => {
    return (
        <Card style={{ borderWidth: 0, }} onPress={handleClick}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 16 }}>{title}</Text>
                <Ionicons name="chevron-forward-outline" size={30} color='black' />
            </View>
        </Card>
    )
}
