import React from 'react'
import { Text, View } from 'react-native'
import { InputSearch } from '../components/input/inputSearch'
import { CardKegiatan } from '../components/card/cardKegiatan'
import { COLORS } from '../assets/color'

export const Personal = () => {
    return (
        <View style={{ flex: 1, gap: 10, backgroundColor: COLORS.white, paddingVertical: 20 }}>
            <InputSearch placeholder={'Cari Kegiatan'} />
            <CardKegiatan />
        </View>
    )
}
