import { View, Text } from "react-native";
import React from "react";
import TrailerCard from "./Cards/TrailerCard";
import { ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import MoreButton from "./Buttons/MoreButton";

const TrailerSection = () => {
  return (
    <ScrollView>
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
      <MoreButton/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
  },
});

export default TrailerSection;
