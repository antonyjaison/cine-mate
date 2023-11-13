import {
  View,
  useWindowDimensions,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import React from "react";
import bannerImg from "../assets/images/home_banner.png";
import PlayButton from "./Buttons/PlayButton";
import WatchlistButton from "./Buttons/WatchlistButton";
import MovieTitle from "./Titles/MovieTitle";
import Genre from "./Titles/Genre";
import Header from "./Header";

const HomeBanner = () => {
  const { height, width } = useWindowDimensions();
  const bannerImgHeight = (60 / 100) * height;
  const paddingHor = (4 / 100) * width;
  const titleWrapperWidth = (50 / 100) * width;
  return (
    <>
      <View>
        <ImageBackground
          style={[styles.bannerImg, { height: bannerImgHeight }]}
          source={bannerImg}
        >
          {/* <Header /> */}
          <View
            style={[styles.bannerDetails, { paddingHorizontal: paddingHor }]}
          >
            <View
              style={[styles.titleWrapper, { minWidth: titleWrapperWidth }]}
            >
              <View>
                <MovieTitle title="Fast-x" />
                <Genre />
              </View>
            </View>
            <View style={styles.buttonWrapper}>
              <PlayButton />
              <WatchlistButton />
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  bannerImg: {
    width: "100%",
    resizeMode: "cover",
    position: "relative",
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 8,
  },
  bannerDetails: {
    position: "absolute",
    bottom: 30,
    height: 110,
    justifyContent: "space-between",
  },
  titleWrapper: {
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
