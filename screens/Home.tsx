import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Headers from "../components/Home/Headers";
import MovieSlide from "../components/Movie/MovieSlide";
import { useQuery } from "@tanstack/react-query";
import { getHome } from "../services/HomeServices";
import MovieTitle from "../components/Movie/MovieTitle";
import MovieCard from "../components/Movie/MovieCard";

const Home = () => {
  const { data } = useQuery(["Home"], getHome);

  if (!data) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }

  const [trending, popular] = data;

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Headers />
        <MovieSlide data={trending.results} title="Trending" />
        <View>
          <MovieTitle title="Popular" />
          <View style={styles.list}>
            {popular?.results?.map((item) => (
              <MovieCard key={item.id} item={item} />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  list: {
    marginTop: 16,
  },
});
