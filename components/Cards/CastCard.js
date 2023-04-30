import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import cast from "../../assets/images/cast.jpg";

const CastCard = () => {
  return (
    <View style={styles.cardWrapper}>
      <Image style={styles.image} source={cast} />
      <View style={styles.textWrapper}>
        <Text style={styles.boldText}>Chris Pratt</Text>
        <Text style={styles.text}>as</Text>
        <Text style={styles.text}>Star Lord</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    width: 55,
    justifyContent:'center'
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 50,
    resizeMode: "cover",
  },
  textWrapper: {
    width:55,
    alignItems:'center'
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 7,
    color: "#fff",
    lineHeight:8
  },
  boldText:{
    fontFamily: "Poppins-Bold",
    fontSize: 8,
    color: "#fff",
    lineHeight:10
  }
});

export default CastCard;
