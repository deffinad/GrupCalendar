import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { COLORS } from '../../../assets/color'

export const InputSearch = ({ onSearch, placeholder }) => {
    return (
        <View style={styles.input}>
            <Ionicons name='search' size={30} color={'grey'} />
            <TextInput
                cursorColor={COLORS.primary}
                placeholder={placeholder}
                style={{ fontSize: 16 }}
                maxLength={30}
                onChangeText={onSearch}
                clearButtonMode='always'
            />
        </View>


    )
}

const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderRadius: 15,
        backgroundColor: COLORS.input,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
<<<<<<< HEAD
})
=======
})
>>>>>>> 735c13f7f4fb91b6e1699fbf12809dc2c9c92eb9
