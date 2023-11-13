import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React, { useCallback, useState, useRef } from "react";
import MovieDetail from "../components/MovieDetail";
import { colors } from "../constants/colors";
import CastCard from "../components/Cards/CastCard";
import CastSection from "../components/CastSection";
import MovieMoreSection from "../components/MovieMoreSection";
import MoreButton from "../components/Buttons/MoreButton";

const MovieDetailsScreen = () => {
  const { height } = useWindowDimensions();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        <MovieDetail />
        <CastSection />
        <MovieMoreSection />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieDetailsScreen;
