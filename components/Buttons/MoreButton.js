import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

const MoreButton = ({onPress}) => {
  return (
    <View style={styles.buttonWrapper}>
      <View style={styles.buttonView}>
        <Pressable onPress={onPress} android_ripple={{ color: "#dadada", borderless: true }}>
          <EvilIcons name="plus" size={60} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonView: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 50,
  },
});

export default MoreButton;
