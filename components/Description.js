import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../constants/colors";

const Description = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = isExpanded ? text : text.substr(0, 100);

  return (
    <>
      <View>
        <Text
          style={[styles.text, { color: colors.white }]}
          numberOfLines={isExpanded ? undefined : 3}
        >
          {truncatedText}
        </Text>
        {text.length > 100 && (
          <TouchableOpacity onPress={toggleExpansion}>
            <Text style={[styles.moreText, { color: colors.red }]}>
              ...{isExpanded ? "less" : "more"}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  moreText: {
    fontFamily: "Poppins-Bold",
    fontSize: 14,
  },
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
  },
});

export default Description;
