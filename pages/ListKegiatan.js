import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from './../assets/color/index'
import { InputSearch } from '../components/input/inputSearch'
import { CardKegiatan } from '../components/card/cardKegiatan'
import { useNavigation } from '@react-navigation/native'

export const ListKegiatan = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={styles.textHeader}>List Kegiatan</Text>
            </View>

            <View>
                <InputSearch placeholder={'Cari Kegiatan'} />
            </View>

            <View>
                <CardKegiatan onPress={() => navigation.navigate('DetailKegiatan')} />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 33,
        paddingTop: 33,
        paddingBottom: 100,
        gap: 33,
        backgroundColor: COLORS.white
    },
    textHeader: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    textHeaderDesc: {
        fontSize: 16
    }
})
