import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";
import { TouchableOpacity } from "react-native";
import TrailerCard from "./Cards/TrailerCard";
import TrailerSection from "./TrailerSection";
import MoreMoviesSection from "../components/MoreMoviesSection";
import ReviewSection from "./ReviewSection";

const MovieMoreSection = () => {
  const sections = {
    trailer: "trailer",
    review: "review",
    more: "more",
  };

  const { width } = useWindowDimensions();
  const paddingHorizontal = (3.5 / 100) * width;
  const [section, setSection] = useState(sections.trailer);

  const changeSection = (section) => {
    setSection(section);
  };

  let movieMoreDetails = <TrailerSection />;

  if (section === sections.trailer) {
    movieMoreDetails = <TrailerSection />;
  } else if (section === sections.more) {
    movieMoreDetails = <MoreMoviesSection />;
  } else {
    movieMoreDetails = <ReviewSection />;
  }

  return (
    <View style={[{ paddingHorizontal: paddingHorizontal }]}>
      <View style={styles.moreHeadings}>
        <TouchableOpacity onPress={() => changeSection(sections.trailer)}>
          <Text
            style={[
              styles.headingText,
              {
                color:
                  section === sections.trailer
                    ? colors.red
                    : colors.disableText,
              },
            ]}
          >
            Trailers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeSection(sections.more)}>
          <Text
            style={[
              styles.headingText,
              {
                color:
                  section === sections.more ? colors.red : colors.disableText,
              },
            ]}
          >
            More like this
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => changeSection(sections.review)}>
          <Text
            style={[
              styles.headingText,
              {
                color:
                  section === sections.review ? colors.red : colors.disableText,
              },
            ]}
          >
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.line, { backgroundColor: colors.disableText }]}
      ></View>
      {movieMoreDetails}
    </View>
  );
};

const styles = StyleSheet.create({
  moreHeadings: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  line: {
    width: "100%",
    height: 1,
  },
});

export default MovieMoreSection;
