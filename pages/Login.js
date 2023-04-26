import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { Text, View } from 'react-native'
import { COLORS } from '../assets/color'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { KeyboardAvoidingView } from 'react-native'
import { MyCheckbox } from '../components/checkBox'
import ModalTnc from '../components/Modal'

export const Login = ({ navigation }) => {
    const [dataLogin, setDataLogin] = useState({
        username: '',
        password: ''
    })

    const handleChangeInput = (name, value) => {
        setDataLogin({
            ...dataLogin,
            [name]: value,
        });
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1, padding: 33, justifyContent: 'center', backgroundColor: COLORS.white }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />

            <View style={{ marginBottom: 33 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Selamat Datang</Text>
                <Text style={{ fontSize: 16 }}>Silahkan lakukan login terlebih dahulu</Text>
            </View>

            <View style={{ flexDirection: 'column', gap: 18 }}>
                <Input
                    placeholder={'Username'}
                    value={dataLogin.username}
                    name={'username'}
                    onChangeText={text => handleChangeInput('username', text)}
                />
                <Input
                    placeholder={'Password'}
                    value={dataLogin.password}
                    name={'password'}
                    password={true}
                    onChangeText={text => handleChangeInput('password', text)}
                />
                <View style={{ flexDirection: 'row', gap: 10, marginLeft: 10, alignItems: 'center' }}>
                    <MyCheckbox />
                    <ModalTnc />
                </View>
                <Button title={'Submit'} style={{ backgroundColor: COLORS.primary }} textColor={COLORS.white} onClick={() => navigation.navigate('Main')} />
            </View>
        </KeyboardAvoidingView>
    )
}
