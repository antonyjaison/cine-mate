import { View, Text } from "react-native";
import React from "react";
import ReviewCard from "./Cards/ReviewCard";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import MoreButton from "./Buttons/MoreButton";

const ReviewSection = () => {
  return (
    <View>
      <View style={styles.card}>
        <ReviewCard />
      </View>
      <View style={styles.card}>
        <ReviewCard />
      </View>
      <View style={styles.card}>
        <ReviewCard />
      </View>
      <View style={styles.card}>
        <ReviewCard />
      </View>
      <View style={styles.card}>
        <ReviewCard />
      </View>
      <MoreButton />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 25,
  },
});

export default ReviewSection;
