import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/color";

const Card = ({ style, children, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={1}
            style={[styles.card, style]}
        >
            {children}
        </TouchableOpacity>
    );
}

export default Card

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 22,
        borderWidth: 2,
        borderColor: 'whitesmoke'
    },
});
