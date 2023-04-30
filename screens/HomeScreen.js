import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React,{useEffect} from "react";
import HomeBanner from "../components/HomeBanner";
import CategoryTitle from "../components/Titles/CategoryTitle";
import SeeAll from "../components/Titles/SeeAll";
import MovieCard from "../components/Cards/MovieCard";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";


const HomeScreen = () => {
  const navigation = useNavigation()
  const { width, height } = useWindowDimensions();
  const paddingHor = (2 / 100) * width;
  useEffect(() => {
    navigation.setOptions({
      tabBarIcon:({focused, color, size}) => {
        return <AntDesign name="home" size={20} color={color}/>
      }
    })
  },[])
  return (
    <ScrollView style={styles.container}>
      <HomeBanner />
      <View style={[styles.movieContainer, { paddingHorizontal: paddingHor }]}>
        <View style={styles.categoryTitle}>
          <CategoryTitle title="Top Movies of the week" />
          <SeeAll />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View style={styles.card}>
            <MovieCard />
          </View>
          <View style={styles.card}>
            <MovieCard />
          </View>
          <View style={styles.card}>
            <MovieCard />
          </View>
          <View style={styles.card}>
            <MovieCard />
          </View>
        </ScrollView>
      </View>


      <View style={[styles.movieContainer, { paddingHorizontal: paddingHor }]}>
        <View style={styles.categoryTitle}>
          <CategoryTitle title="Popular" />
          <SeeAll />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
          <View style={styles.card}>
            <MovieCard />
          </View>
          <View style={styles.card}>
            <MovieCard />
          </View>
          <View style={styles.card}>
            <MovieCard />
          </View>
          <View style={styles.card}>
            <MovieCard />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#181818",
  },
  movieContainer: {
    marginTop: 17,
    marginBottom:5
  },
  categoryTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    marginRight: 10,
  },
});
