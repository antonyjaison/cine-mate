import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import cardImg from "../../assets/images/marvals1.png";
import RatingCard from "./RatingCard";

const MovieCard = ({ onPress }) => {
  const { width, height } = useWindowDimensions();
  const imageWidth = (35 / 100) * width;
  const imageHeight = (23 / 100) * height;
  return (
    <Pressable
      style={{ width: imageWidth, height: imageHeight }}
      android_ripple={{ color: "#dadada" }}
      onPress={onPress}
    >
      <Image style={[styles.image]} source={cardImg} />
      <RatingCard />
    </Pressable>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: 4,
    overflow: "hidden",
    zIndex: 1,
    position: "relative",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
