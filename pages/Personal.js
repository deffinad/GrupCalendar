import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { InputSearch } from '../components/input/inputSearch'
import { CardKegiatan } from '../components/card/cardKegiatan'
import { COLORS } from '../assets/color'
import { getActivityByLabel } from '../services/api'
import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Personal = () => {
    const [data, setData] = useState({})
    const [dataFilter, setFilterData] = useState([]);

    useEffect(() => {
        getActivityByLabel('personal')
            .then(result => {
                setData(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    })

    const filterData = search => {
        const filter = data.length !== 0 && data.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });

        setFilterData(filter);
    };

    return (
        <SafeAreaView style={{ flex: 1, gap: 10, backgroundColor: COLORS.white, paddingVertical: 20 }}>
            <InputSearch placeholder={'Cari Kegiatan'} onSearch={filterData} />
            <FlatList
                data={dataFilter && dataFilter.length > 0 ? dataFilter : data}
                scrollEnabled={true}
                keyExtractor={item => item.activity_id}
                nestedScrollEnabled
                renderItem={({ item }) => <CardKegiatan name={item.name} description={item.description} date={item.date} style={{ marginTop: 10 }} />}
            />
        </SafeAreaView>
    )
}
