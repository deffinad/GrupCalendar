import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { COLORS } from './../assets/color/index'
import { InputSearch } from '../components/input/inputSearch'
import { CardKegiatan } from '../components/card/cardKegiatan'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getAllActivity } from '../services/api'


export const ListKegiatan = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const [dataFilter, setFilterData] = useState([]);

    useEffect(() => {
        getAllActivity()
            .then(result => {
                setData(result.data)
            })
            .catch(err => {
                console.log(err)
            })

    })

    const filterData = search => {
        const filter = data.length !== 0 && data.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });

        setFilterData(filter);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={styles.textHeader}>List Kegiatan</Text>
            </View>

            <View>
                <InputSearch placeholder={'Cari Kegiatan'} onSearch={filterData} />
            </View>

            <View>
                <FlatList
                    data={dataFilter && dataFilter.length > 0 ? dataFilter : data}
                    renderItem={({ item }) => <CardKegiatan name={item.name} description={item.description} date={item.date} style={{ marginTop: 10 }} onPress={() => navigation.navigate('DetailKegiatan', { activity_id: item.activity_id })} />}
                    keyExtractor={item => item.activity_id}
                />
            </View>
        </SafeAreaView>
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
