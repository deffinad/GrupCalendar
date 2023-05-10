import React, { useEffect, useState } from 'react'
import { InputSearch } from '../components/input/inputSearch'
import { CardKegiatan } from '../components/card/cardKegiatan'
import { COLORS } from '../assets/color'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { getActivityByLabel } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View } from 'react-native'

export const Grup = ({ navigation }) => {
    const [data, setData] = useState({})
    const [dataFilter, setFilterData] = useState([]);

    useEffect(() => {
        retrieveData()
            .then(user => {
                getActivityByLabel('group', user.id)
                    .then(result => {
                        setData(result.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    })

    const retrieveData = async () => {
        try {
            const user = await AsyncStorage.getItem('ACCESS_TOKEN')
            return JSON.parse(user)
        } catch (error) {
            return error
        }
    }

    const filterData = search => {
        const filter = data.length !== 0 && data.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });

        setFilterData(filter);
    };

    return (
        <View style={{ flex: 1, gap: 10, backgroundColor: COLORS.white, paddingVertical: 20 }}>
            <ScrollView>
                <InputSearch placeholder={'Cari Kegiatan'} onSearch={filterData} />
                <FlatList
                    data={dataFilter && dataFilter.length > 0 ? dataFilter : data}
                    scrollEnabled={false}
                    keyExtractor={item => item.activity_id}
                    nestedScrollEnabled
                    renderItem={({ item }) => <CardKegiatan name={item.name} description={item.description} date={item.date} style={{ marginTop: 10 }} onPress={() => navigation.navigate('DetailKegiatan', { activity_id: item.activity_id })} />}
                />
            </ScrollView>
        </View>
    )
}
