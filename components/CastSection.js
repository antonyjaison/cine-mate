import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React from "react";
import CastCard from "./Cards/CastCard";
import CategoryTitle from "./Titles/CategoryTitle";
import { ScrollView } from "react-native";

const CastSection = () => {
  const { width } = useWindowDimensions();
  const paddingHorizontal = (3 / 100) * width;
  return (
    <View style={[{ paddingHorizontal: paddingHorizontal }]}>
      <CategoryTitle title="Cast" />

      <View style={styles.castSection}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <CastCard />
          </View>
          <View style={styles.card}>
            <CastCard />
          </View>
          <View style={styles.card}>
            <CastCard />
          </View>
          <View style={styles.card}>
            <CastCard />
          </View>
          <View style={styles.card}>
            <CastCard />
          </View>
          <View style={styles.card}>
            <CastCard />
          </View>
          <View style={styles.card}>
            <CastCard />
          </View>
          <View style={styles.card}>
            <CastCard />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  castSection: {
    marginTop: 12,
    marginBottom: 20,
  },
  card: {
    marginRight: 23,
  },
});

export default CastSection;
