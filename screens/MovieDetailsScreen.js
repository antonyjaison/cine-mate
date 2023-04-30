import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useCallback, useState, useRef } from "react";
import MovieDetail from "../components/MovieDetail";
import { colors } from "../constants/colors";
import CastCard from "../components/Cards/CastCard";
import CastSection from "../components/CastSection";
import MovieMoreSection from "../components/MovieMoreSection";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const MovieDetailsScreen = () => {
  return (
    <>
      <ScrollView>
        <View
          style={[styles.container, { backgroundColor: colors.background }]}
        >
          <MovieDetail />
          <CastSection />
          <MovieMoreSection />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieDetailsScreen;
