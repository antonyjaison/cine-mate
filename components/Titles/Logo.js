import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

const Logo = () => {
  return (
    <Text style={styles.logo}>
      <Text style={styles.boldText}>C</Text>ine
      <Text style={[styles.boldText, { color: colors.red }]}>M</Text>
      <Text style={{ color: colors.red }}>ate</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 22,
    fontFamily: "Poppins-Regular",
    color: "#fff",
  },
  boldText: {
    fontFamily: "Poppins-Bold",
  },
});

export default Logo;
