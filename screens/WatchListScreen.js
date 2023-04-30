import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const WatchListScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ focused, color, size }) => {
        return <Ionicons name="list" size={20} color={color} />;
      },
    });
  }, []);
  return (
    <View>
      <Text>WatchListScreen</Text>
    </View>
  );
};

export default WatchListScreen;
