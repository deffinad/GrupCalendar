import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { COLORS } from '../../assets/color'

export const Input = ({ placeholder, value, name, onChangeText, numeric, multiline, password }) => {
    return (
        <View style={{
            backgroundColor: COLORS.input,
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 15
        }}>
            <TextInput
                style={multiline ? { height: 100 } : null}
                textAlignVertical={multiline ? 'top' : 'auto'}
                editable
                multiline={multiline ? true : false}
                cursorColor={COLORS.primary}
                placeholder={placeholder}
                value={value}
                id={name}
                secureTextEntry={password ? true : false}
                keyboardType={numeric ? 'numeric' : 'default'}
                onChangeText={onChangeText}
            />
        </View>
    )
}
