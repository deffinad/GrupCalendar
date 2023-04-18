import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../assets/color";

const card = () => {
    return (
        <View>
            <View style={styles.card}>
                <Text>Nama Kegiatan</Text>
                <Ionicons name="chevron-forward-outline" size={30} color='black' />
            </View>
        </View>
    );
}

export default card

const styles = StyleSheet.create({
    card: {
        backgroundColor: COLORS.white,
        flexDirection: "column",
        margin: 5,
        height: 50,
        borderRadius: 22,
        // borderWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
    },
});
