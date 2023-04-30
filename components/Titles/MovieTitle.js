import { View, Text, StyleSheet } from "react-native";
import React from "react";

const MovieTitle = ({ title, style }) => {
  return <Text style={[styles.title, style]}>{title}</Text>;
};

export default MovieTitle;

const styles = StyleSheet.create({
  title: {
    fontSize: 38,
    color: "#fff",
    fontFamily:"Poppins-Bold",
    lineHeight:57
  },
});
