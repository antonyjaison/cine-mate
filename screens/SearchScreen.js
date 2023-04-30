import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const SearchScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ focused, color, size }) => {
        return <AntDesign name="search1" size={20} color={color} />;
      },
    });
  }, []);
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  );
};

export default SearchScreen;
