import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { COLORS } from '../assets/color';
import { Ionicons } from '@expo/vector-icons';
import { InputSearch } from '../components/input/inputSearch';
import { CardNotification } from '../components/card/cardNotification';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getNotifications, profile } from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const Notification = () => {
    const navigation = useNavigation()
    const [data, setData] = useState([])
    const [dataFilter, setFilterData] = useState([]);

    useEffect(() => {
        retrieveData()
            .then(user => {
                getNotifications(user.id)
                    .then(result => {
                        setData(result.data)
                    })
                    .catch(error => {
                        alert(error)
                    })
            }).catch(err => {
                console.log(err)
            })
    }, []);

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
            return item.title.toLowerCase().includes(search.toLowerCase());
        });

        setFilterData(filter);
    };
    return (
        <SafeAreaView style={styles.container}>
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
                    onSearch={filterData}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={dataFilter && dataFilter.length > 0 ? dataFilter : data}
                    renderItem={({ item, index }) => (
                        <CardNotification title={item.title} id={index} handleClick={() => navigation.navigate('DetailKegiatan', { activity_id: item.activities_id })} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 33,
        width: "100%",
        backgroundColor: COLORS.white,
    }
})