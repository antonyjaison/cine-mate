import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const PlayButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: "#dadada" }}
      style={styles.buttonContainer}
    >
      <Ionicons name="play" size={20} color="#fff" />
      <Text style={styles.buttonText}>Play</Text>
    </Pressable>
  );
};

export default PlayButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "#E21221",
    width: 80,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    gap: 5,
  },
  buttonText: {
    color: "#fff",
    fontFamily:"Poppins-Light",
    fontSize: 14,
  },
});
