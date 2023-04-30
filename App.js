import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import WatchListScreen from "./screens/WatchListScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" animated={true} />
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#E21221",
            tabBarInactiveTintColor: "#FFFFFF",
            tabBarStyle: {
              backgroundColor: "#181818",
              borderTopWidth: 0,
            },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={MovieDetailsScreen} />
          <Tab.Screen name="Watchlist" component={WatchListScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
