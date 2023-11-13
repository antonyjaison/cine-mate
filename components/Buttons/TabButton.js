import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const TabButton = ({ icon, name, color, size }) => {
  return (
    <View style={styles.tabButtonWrapper}>
      <Feather size={size} name={icon} color={color} />
      <Text style={[styles.text, { color: color }]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tabButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Bold",
    fontSize: 8,
  },
});

export default TabButton;
