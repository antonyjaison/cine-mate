import { View, Text, StyleSheet } from "react-native";
import React from "react";

const RatingCard = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>7.5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#E21221",
    borderRadius: 3,
    width:27,
    height:15,
    justifyContent:'center',
    alignItems:"center",
    position:'absolute',
    top:10,
    left:10
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 8,
  },
});

export default RatingCard;
