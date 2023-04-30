import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import cardImg from "../../assets/images/cast.jpg";

const ReviewCard = () => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.profileWrapper}>
        <Image style={styles.image} source={cardImg} />
        <View>
          <Text style={styles.name}>James Gunn</Text>
          <View style={styles.rateCard}>
            <Text style={styles.rateCardText}>7.5</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.text}>
          From DC Comics comes the Suicide Squad, an antihero team of
          incarcerated supervillains who act as deniable assets for the United
          States government.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    gap: 9,
  },
  text: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#fff",
  },
  image: {
    width: 45,
    height: 45,
    resizeMode: "cover",
    borderRadius: 50,
  },
  profileWrapper: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  name: {
    fontFamily: "Poppins-Bold",
    fontSize: 15,
    color: "#fff",
  },
  rateCard: {
    width: 28,
    height: 12,
    backgroundColor: "#F5C518",
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  rateCardText: {
    fontFamily: "Poppins-Bold",
    fontSize: 7,
    color: "#fff",
  },
});

export default ReviewCard;
