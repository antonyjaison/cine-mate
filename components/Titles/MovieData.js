import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const MovieData = ({ p, value }) => {
  return (
    <Text style={styles.key}>
      {p} : <Text style={styles.value}>{value}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  key: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
  value: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 12,
  },
});

export default MovieData;
