import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      tabBarIcon: ({ focused, color, size }) => {
        return <Feather name="user" size={20} color={color} />;
      },
    });
  }, []);
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;
