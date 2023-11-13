import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
import { colors } from "./constants/colors";
import GoBackButton from "./components/Buttons/GoBackButton";
import img from "./assets/images/cast.jpg";

const CastScreen = () => {
  const { width, height } = useWindowDimensions();
  const left = (23 / 100) * width;
  const top = (3.4 / 100) * height;
  const imageWidth = (40 / 100) * width;
  const imageHeight = (27 / 100) * height;
  return (
    <View style={styles.container}>
      {/* <View>
        <GoBackButton />
        <Text style={[styles.headerText, { top: top, left: left }]}>
          Paul Rudd
        </Text>
      </View> */}

      <View>
        <View>
          <Image
            style={[{ width: imageWidth, height: imageHeight }, styles.image]}
            source={img}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  headerText: {
    position: "absolute",
    fontFamily: "Poppins-Bold",
    color: "#fff",
    fontSize: 21,
  },
  image: {
    resizeMode: "center",
    borderRadius: 4,
  },
});

export default CastScreen;
