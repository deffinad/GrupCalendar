import React from 'react'
import { Text, View } from 'react-native'
import { COLORS } from '../../assets/color'

export const Badge = ({ label, type }) => {
    const style = type === 'primary' ? {
        backgroundColor: COLORS.secondary,
    } : null
    return (
        <View style={[{ borderRadius: 22, paddingHorizontal: 10, paddingVertical: 2 }, style]}>
            <Text style={{ textTransform: 'capitalize', color: COLORS.primary, fontWeight: '500', fontSize: 16 }}>{label}</Text>
        </View>
    )
}
