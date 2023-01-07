import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { Movie } from "../../types/index.types";
import MovieItem from "./MovieItem";
import MovieTitle from "./MovieTitle";

interface MovieSlideProps {
  title: string;
  data: Movie[];
}

export default function MovieSlide({ title, data }: MovieSlideProps) {
  return (
    <View style={styles.movieSlideContainer}>
      <MovieTitle title={title} />
      <FlatList
        style={styles.movieSlideList}
        horizontal
        data={data}
        renderItem={({ item }) => <MovieItem key={item.id} item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  movieSlideContainer: {
    marginTop: 16,
  },
  movieSlideList: {
    marginTop: 16,
  },
});
