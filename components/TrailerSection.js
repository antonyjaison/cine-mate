import { View, Text } from "react-native";
import React from "react";
import TrailerCard from "./Cards/TrailerCard";
import { StyleSheet } from "react-native";
import MoreButton from "./Buttons/MoreButton";

const TrailerSection = () => {
  return (
    <View>
      <View style={styles.card}>
        <TrailerCard />
      </View>
      <View style={styles.card}>
        <TrailerCard />
      </View>
      <View style={styles.card}>
        <TrailerCard />
      </View>
      <View style={styles.card}>
        <TrailerCard />
      </View>
      <View style={styles.card}>
        <TrailerCard />
      </View>
      <View style={styles.buttonWrapper}>
        <MoreButton/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
  },
  buttonWrapper: {
    width: "100%",
    height: 50,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default TrailerSection;
