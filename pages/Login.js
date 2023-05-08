import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { Text, View, Image, StyleSheet } from 'react-native'
import { COLORS } from '../assets/color'
import { Input } from '../components/input'
import { Button } from '../components/button'
import { KeyboardAvoidingView } from 'react-native'
import { MyCheckbox } from '../components/checkBox'
import ModalTnc from '../components/modal'
import { SafeAreaView } from 'react-native-safe-area-context'
import { login } from '../services/api'


export const Login = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const onChangeUsernameHandler = (username) => {
        setUsername(username);
    };
    const onChangePasswordHandler = (password) => {
        setPassword(password);
    };

    const onSubmitFormHandler = async () => {
        if (!username.trim() || !password.trim()) {
            alert("invalid");
        } else {

            setIsLoading(false);
            const data = {
                "username": username,
                "password": password,
            }
            login(data)
                .then(result => {
                    if (result.data.status === 200) {
                        navigation.navigate('Main')
                    } else {
                        alert("Username atau Password Salah")
                    }
                    console.log(result.data)
                })
                .catch(error => {
                    alert(error)
                    console.log(error)
                })
        }
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', backgroundColor: COLORS.white }}>

            <SafeAreaView style={styles.container}>

                <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />
                <View style={styles.logo}>
                    <Image source={require('../assets/Logo.png')} />
                </View>

                <View style={styles.card}>
                    <View style={{ flexDirection: 'column', gap: 18, paddingHorizontal: 33, paddingVertical: 70, width: '100%' }}>
                        <Input
                            placeholder={'Username / email'}
                            value={username}
                            editable={!isLoading}
                            onChangeText={onChangeUsernameHandler}
                        />
                        <Input
                            placeholder={'Password'}
                            value={password}
                            editable={!isLoading}
                            password={true}
                            onChangeText={onChangePasswordHandler}
                        />
                        <View style={{ flexDirection: 'row', gap: 10, marginTop: 10, alignItems: 'center' }}>
                            <MyCheckbox />
                            <ModalTnc />
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <Button title={'Sign in'} style={{ backgroundColor: COLORS.white, marginTop: 10, width: 200 }} textColor={COLORS.primary} onClick={onSubmitFormHandler} />
                        </View>

                        <View style={{ alignItems: 'center', marginTop: 10, }}>
                            <Text style={{ color: COLORS.white }}>Forgot Password?</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text>Don't have account?</Text>
                            <Text style={{ color: COLORS.white }}>Register</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
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
        flex: 1,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: COLORS.primary
    },
})
