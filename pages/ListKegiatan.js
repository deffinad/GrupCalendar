import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from './../assets/color/index'
import { InputSearch } from '../components/input/inputSearch'
import Card from '../components/card'
import { CardKegiatan } from '../components/card/cardKegiatan'
import { useNavigation } from '@react-navigation/native'

export const ListKegiatan = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={styles.textHeader}>List Kegiatan</Text>
                <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <View style={{ width: 30, height: 30, backgroundColor: COLORS.primary, borderRadius: 100 }}></View>
                    <Text style={styles.textHeaderDesc}>Deffin Achmaddifa</Text>
                </View>
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
        padding: 33,
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
