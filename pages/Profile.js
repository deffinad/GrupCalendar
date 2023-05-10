import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS } from '../assets/color';
import { Button } from '../components/button';
import { CardNotification } from '../components/card/cardNotification';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getNotifications } from '../services/api';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Profile = ({ navigation }) => {
    const [user, setUser] = useState({
        id: '',
        name: ''
    })
    const [data, setData] = useState([])

    useEffect(() => {
        retrieveData()
            .then(dataUser => {
                setUser(dataUser)
                getNotifications(dataUser.id)
                    .then(result => {
                        var notifications = result.data.slice(0, 3).map(item => {
                            return item
                        })
                        setData(notifications)
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

    const handleLogout = () => {
        removeLocalStorage()
            .then(result => {
                if (result) {
                    navigation.replace('Login')
                }
            }).catch(error => {
                console.log('Logout Gagal')
            })
    }

    const removeLocalStorage = async () => {
        try {
            await AsyncStorage.removeItem('ACCESS_TOKEN')
            return true
        } catch (error) {
            return false
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 24 }}> Profile</Text>
                <Pressable onPress={() => navigation.navigate('Notification')}>
                    <Ionicons name="notifications-outline" size={30} color='black' />
                </Pressable>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                <Ionicons name="person-circle-outline" size={200} color='black' />
                <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{user.name}</Text>
            </View>
            <View style={{ marginTop: 50 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Last Notifications</Text>
            </View>
            <View style={{ marginTop: 20 }}>
                <FlatList
                    data={data}
                    scrollEnabled={false}
                    renderItem={({ item, index }) => (
                        <CardNotification title={item.title} id={item.id} index={index} handleClick={() => navigation.navigate('DetailKegiatan', { activity_id: item.activities_id })} />
                    )}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <Button title={'Logout'} style={{ backgroundColor: COLORS.primary, marginTop: 20 }} textColor={COLORS.white} onClick={handleLogout} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 33,
        paddingTop: 33,
        paddingBottom: 100,
        width: "100%",
        backgroundColor: COLORS.white,
    },
    header: {
        justifyContent: "space-between",
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "row",
    },

});
