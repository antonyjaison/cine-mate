import { useWindowDimensions, Text } from "react-native";
// import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabButton from "../components/Buttons/TabButton";
import HomeScreen from "./HomeScreen";
import WatchListScreen from "./WatchListScreen";
import ProfileScreen from "./ProfileScreen";
import TvShowsScreen from "./TvShowsScreen";
import MoviesScreen from "./MoviesScreen";
import Header from "../components/Header";

const Tab = createBottomTabNavigator();

const BottomTabScreen = () => {
  const { width, height } = useWindowDimensions();

  const paddingHorizontal = (4 / 100) * width;
  const tabMarginBottom = (1 / 100) * height;
  const tabBarHeight = (8 / 100) * height;
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#E21221",
        tabBarInactiveTintColor: "#FFFFFF",
        tabBarStyle: {
          backgroundColor: "#131313",
          borderTopWidth: 0,
          position: "absolute",
          bottom: tabMarginBottom,
          left: paddingHorizontal,
          right: paddingHorizontal,
          height: tabBarHeight,
          borderRadius: 13,
          elevation: 24,
          shadowOpacity: 1,
          shadowRadius: 6,
          shadowColor: "#B9B9B9",
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabButton name="Home" icon="home" color={color} size={size} />
          ),
          headerShown:true,
          header:() =>  <Header/>
        }}
      />
      <Tab.Screen
        name="Search"
        component={MoviesScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabButton
              name="Movie"
              icon="play-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TVShows"
        component={TvShowsScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabButton name="TV Shows" icon="tv" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Watchlist"
        component={WatchListScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabButton
              name="Watchlist"
              icon="bookmark"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabButton name="Profile" icon="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabScreen;
