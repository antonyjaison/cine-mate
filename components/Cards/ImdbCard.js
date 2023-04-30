import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import imdb from "../../assets/images/imdb.png";

const ImdbCard = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imdb} />
      <Text style={styles.text}>7.5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    alignItems: "center",
    gap:5
  },
  image: {
    width: 30,
    height: 16,
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 14,
  },
});

export default ImdbCard;
