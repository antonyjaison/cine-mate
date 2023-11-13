import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const MoreButton = ({ onPress }) => {
  return (
      <Pressable
        style={styles.buttonView}
        onPress={onPress}
        // android_ripple={{ color: "#dadada", borderless: true, radius: 30 }}
      >
        <EvilIcons name="plus" size={60} color="#fff" />
      </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "100%",
    height: 50,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  buttonView: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MoreButton;
