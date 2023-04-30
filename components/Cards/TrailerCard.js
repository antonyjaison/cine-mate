import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";
import trailerImg from "../../assets/images/trailer.png";
import { colors } from "../../constants/colors";
import { TouchableOpacity } from "react-native";

const TrailerCard = () => {
  const { width } = useWindowDimensions();
  const trailerImgWidth = (40 / 100) * width;
  return (
    <TouchableOpacity>
      <View style={styles.cardWrapper}>
        <Image
          style={[styles.trailerImg, { width: trailerImgWidth }]}
          source={trailerImg}
        />
        <View style={styles.textWrapper}>
          <Text numberOfLines={2} style={styles.textHeading}>
            Marvel Studios’ Guardians of the Galaxy Vol. 3 | New Trailer
          </Text>
          <View style={styles.statusTextWrapper}>
            <Text
              style={[
                styles.statusText,
                {
                  color: colors.success,
                },
              ]}
            >
              Official
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    gap: 16,
  },
  trailerImg: {
    height: 86,
    resizeMode: "cover",
  },
  textWrapper: {
    flex: 1,
    justifyContent: "center",
    gap: 7,
  },
  textHeading: {
    fontFamily: "Poppins-Bold",
    fontSize: 10,
    color: "#fff",
  },
  statusTextWrapper: {
    width: 45,
    height: 13,
    borderRadius: 2,
    backgroundColor: "rgba(75, 181, 67,0.29)",
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    fontFamily: "Poppins-Regular",
    fontSize: 8,
  },
});

export default TrailerCard;
