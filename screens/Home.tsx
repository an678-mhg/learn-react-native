import { ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Headers from "../components/Headers";
import MovieSlide from "../components/Movie/MovieSlide";
import { useQuery } from "@tanstack/react-query";
import { getHome } from "../services/HomeServices";
import Loading from "../components/Loading";

const Home = () => {
  const { data } = useQuery(["Home"], getHome);

  if (!data) {
    return <Loading />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
