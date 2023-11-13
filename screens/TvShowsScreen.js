import { View, Text, useWindowDimensions, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../constants/colors";
import BigMovieCard from "../components/Cards/BigMovieCard";

const TvShowsScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { width, height } = useWindowDimensions();
  const paddingHorizontal = (4 / 100) * width;
  const paddingBottom = (10 / 100) * height;
  const renderItem = () => {
    return (
      <View>
        <BigMovieCard />
      </View>
    );
  };
  return (
    <View
      style={[
        styles.watchlistWrapper,
        {
          backgroundColor: colors.background,
          paddingHorizontal: paddingHorizontal,
        },
      ]}
    >
      <View style={styles.titleWrapper}>
        <Text style={styles.text}>TV Shows</Text>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={data}
        keyExtractor={(d) => d}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: paddingBottom }}
        columnWrapperStyle={{ justifyContent: "space-between", marginTop: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  watchlistWrapper: {
    flex: 1,
  },
  titleWrapper: {
    marginTop: 13,
    marginBottom: 5,
  },
  text: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "normal",
    fontFamily: "Poppins-Regular",
  },
});

export default TvShowsScreen;
