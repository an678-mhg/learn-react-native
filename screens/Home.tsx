import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Headers from "../components/Home/Headers";
import MovieSlide from "../components/Movie/MovieSlide";
import { useQuery } from "@tanstack/react-query";
import { getHome } from "../services/HomeServices";

const Home = () => {
  const { data } = useQuery(["Home"], getHome);

  if (!data) {
    return (
      <View>
        <Text>Loading....</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Headers />
        {Object.keys(data).map((item) => (
          <MovieSlide key={item} title={item} data={data[item]} />
        ))}
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
