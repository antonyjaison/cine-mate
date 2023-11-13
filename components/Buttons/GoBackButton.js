import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoBackButton = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();
  const left = (5 / 100) * width;
  const top = (3 / 100) * height;
  return (
    <Pressable
      onPress={() => navigation.goBack()}
      android_ripple={{
        color: "#f0f0f0",
        borderLess: true,
        radius:20
      }}
      style={[
        styles.buttonWrapper,
        ({ p }) => p && styles.onPressStyle,
        { left: left, top: top },
      ]}
    >
      <Feather name="arrow-left" size={20} color="#2c2c2c" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    position: "absolute",
    zIndex: 2,
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "rgba(225,225,225,0.77)",
    justifyContent: "center",
    alignItems: "center",
  },
  onPressStyle: {
    opacity: 0.5,
  },
});

export default GoBackButton;
