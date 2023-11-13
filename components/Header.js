import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import Logo from "./Titles/Logo";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Header = () => {
  const { width, height } = useWindowDimensions();
  const headerHeight = (20 / 100) * height;
  const paddingHorizontal = (3 / 100) * width;
  return (
    <>
      <View style={[styles.headerWrapper, { height: headerHeight }]}>
        <BlurView
          style={{
            paddingHorizontal: paddingHorizontal,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          intensity={95}
          tint="dark"
        >
          <Logo />
          <View style={styles.icons}>
            <Ionicons name="search" size={20} color="#fff" />
            <AntDesign name="user" size={20} color="#fff" />
          </View>
        </BlurView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    width: "100%",
    position:'absolute',
    top:0
  },
  icons: {
    flexDirection: "row",
    gap: 23,
  },
});

export default Header;
