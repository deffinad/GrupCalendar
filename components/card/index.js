import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, View } from "react-native";

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
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 22,
    borderWidth: 2,
    borderColor: 'whitesmoke'
  }
})

export default Card;
