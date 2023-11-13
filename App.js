import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabScreen from "./screens/BottomTabScreen";
import WatchListScreen from "./screens/WatchListScreen";
import CastScreen from "./CastScreen";

const Stack = createStackNavigator();

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
        <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
          animated={true}
        />
        <Stack.Navigator
          // initialRouteName="castDetails"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="home" component={BottomTabScreen} />
          <Stack.Screen name="movieDetails" component={MovieDetailsScreen} />
          <Stack.Screen name="castDetails" component={CastScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabButtonWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Bold",
    fontSize: 8,
  },
});
