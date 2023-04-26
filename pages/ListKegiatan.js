import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { COLORS } from '../assets/color';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import { InputSearch } from '../components/input/inputSearch';


export const ListKegiatan = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: 'flex-start' }}>
                    <Ionicons name='chevron-back' size={25} onPress={() => navigation.goBack()} />
                </View>
            </View>

            <View style={{ marginVertical: 22 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}>All Notification</Text>
            </View>
            <View style={{ marginTop: 30 }}>
                <InputSearch
                    placeholder={'Search'}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Card />
                <Card />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 33,
        width: "100%",
        backgroundColor: COLORS.white,
    },
    header: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
    },
    // input: {
    //     marginTop: 80,
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     gap: 20,
    //     borderRadius: 15,
    //     backgroundColor: COLORS.input,
    //     paddingHorizontal: 20,
    //     paddingVertical: 15,
    //     height: 50
    // },

});