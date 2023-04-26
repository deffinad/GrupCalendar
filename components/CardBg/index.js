import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/color";
import { Input } from "../input";
import { MyCheckbox } from "../checkBox";
import ModalTnc from "../Modal";
import { Button } from "../button";

export const CardBg = ({ navigation }) => {
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
        <View style={styles.card}>
            <View style={{ flexDirection: 'column', gap: 18, marginTop: 80, width: 311, left: 40 }}>
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
                <View style={{ flexDirection: 'row', gap: '10', marginLeft: 10, alignItems: 'center' }}>
                    <MyCheckbox />
                    <ModalTnc />
                </View>
                <Button title={'Submit'} style={{ backgroundColor: COLORS.primary }} textColor={COLORS.white} onClick={() => navigation.navigate('Main')} />

                <View style={{ alignItems: 'center' }}>
                    <Text>Forgot Password?</Text>
                </View>

                <View style={{ flexDirection: 'row', left: 60 }}>
                    <Text>Don't have account?</Text>
                    <Text>Register</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        height: 400,
        width: 390,
        borderRadius: 22,
        borderWidth: 2,
        marginTop: 50
    },
});
