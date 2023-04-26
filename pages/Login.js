import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { Text, View, Image, StyleSheet } from 'react-native'
import { COLORS } from '../assets/color'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { KeyboardAvoidingView } from 'react-native'
import { MyCheckbox } from '../components/checkBox'
import ModalTnc from '../components/Modal'
import { CardBg } from '../components/CardBg'

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

            <View style={styles.container}>

                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                <View style={styles.logo}>
                    <Image source={require('../assets/Logo.png')} />
                </View>

                <View style={styles.card}>
                    <View style={{ flexDirection: 'column', gap: 18, marginTop: 50, width: 350 }}>
                        <Input
                            placeholder={'Username / email'}
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
                        <View style={{ flexDirection: 'row', gap: '10', marginTop: 10, alignItems: 'center' }}>
                            <MyCheckbox />
                            <ModalTnc />
                        </View>
                        <Button title={'Sign in'} style={{ backgroundColor: COLORS.white, width: 200, left: 80, marginTop: 10 }} textColor={COLORS.primary} onClick={() => navigation.navigate('Main')} />

                        <View style={{ alignItems: 'center', marginTop: 10, }}>
                            <Text style={{ color: COLORS.white }}>Forgot Password?</Text>
                        </View>

                        <View style={{ flexDirection: 'row', left: 80 }}>
                            <Text>Don't have account?</Text>
                            <Text style={{ color: COLORS.white }}>Register</Text>
                        </View>
                    </View>
                </View>



                {/* <View style={{ flexDirection: 'column', gap: 18 }}>
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
                    <View style={{ flexDirection: 'row', gap: '10', marginLeft: 10, alignItems: 'center' }}>
                        <MyCheckbox />
                        <ModalTnc />
                    </View>
                </View> */}
                {/* <Button title={'Submit'} style={{ backgroundColor: COLORS.primary }} textColor={COLORS.white} onClick={() => navigation.navigate('Main')} /> */}
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: COLORS.white,
    },
    logo: {
        justifyContent: 'flex-start',
        alignItems: "center",
        display: "flex",
    },
    card: {
        borderRadius: 32,
        marginTop: 30,
        width: 390,
        height: 600,
        alignItems: 'center',
        right: 33,
        backgroundColor: COLORS.primary
    },
})
