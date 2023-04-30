import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import BgImg from "../assets/images/banner2.png";
import banner from "../assets/images/image.png";
import PlayButton from "./Buttons/PlayButton";
import MovieTitle from "./Titles/MovieTitle";
import Description from "./Description";
import MovieData from "./Titles/MovieData";
import WatchlistButton from "./Buttons/WatchlistButton";
import ImdbCard from "./Cards/ImdbCard";

const MovieDetail = () => {
  const { width, height } = useWindowDimensions();
  const bannerHeight = (70 / 100) * height;

  const posterWidth = (50 / 100) * width;
  const posterHeight = (35 / 100) * height;

  const posterContainerHeight = (65 / 100) * bannerHeight;

  const paddingHor = (3 / 100) * width;

  const movieDataGap = (5 / 100) * width;

  const movieDataGap2 = (1.5 / 100) * bannerHeight;

  const text =
    "Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. The crew has to reunite to Dom encounters a mysterious woman, Cipher, who gets him involved in the world of terrorism. The crew has to reunite to";


  return (
    <View style={[styles.container]}>
      <Image
        blurRadius={3}
        style={[styles.bannerImage, { height: bannerHeight }]}
        source={BgImg}
      />
      <LinearGradient
        colors={["transparent", "rgba(24, 24, 24,1)"]}
        style={[styles.gradientContainer, { height: bannerHeight }]}
      >
        <View>
          <View
            style={[styles.posterContainer, { height: posterContainerHeight }]}
          >
            <Image
              source={banner}
              style={[
                styles.poster,
                { width: posterWidth, height: posterHeight },
              ]}
            />
            <PlayButton/>
          </View>
          <View style={[{ paddingHorizontal: paddingHor, gap: movieDataGap2 }]}>
            <MovieTitle
              title="Guardians of the Galaxy"
              style={styles.movieTitle}
            />
            <Description text={text} />

            <View style={[styles.movieData, { gap: movieDataGap }]}>
              <MovieData p="Year" value="2014" />
              <MovieData p="CBFC" value="U/A" />
              <MovieData p="Dur" value="2h 2m" />
            </View>

            <View style={styles.genreWrapper}>
              <Text style={styles.genres}>Action,Sci-Fi,Family</Text>
              <ImdbCard />
              <WatchlistButton />
            </View>
          </View>
        </View>
      </LinearGradient>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    position: "relative",
  },
  gradientContainer: {
    width: "100%",
    position: "absolute",
    top: 0,
  },
  poster: {
    resizeMode: "cover",
    borderRadius: 4,
  },
  posterContainer: {
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#0000",
    width: "100%",
  },
  movieTitle: {
    fontSize: 20,
  },
  movieData: {
    flexDirection: "row",
  },
  genreWrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  genres: {
    color: "#fff",
    fontFamily: "Poppins-Light",
    fontSize: 14,
  },
});

export default MovieDetail;
