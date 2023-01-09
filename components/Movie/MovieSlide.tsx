import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { Movie } from "../../types/index.types";
import MovieItem from "./MovieItem";
import MovieTitle from "./MovieTitle";

interface MovieSlideProps {
  title: string;
  data: Movie[];
  isShowTitle?: boolean;
}

export default function MovieSlide({
  title,
  data,
  isShowTitle = true,
}: MovieSlideProps) {
  return (
    <View style={styles.movieSlideContainer}>
      {isShowTitle && <MovieTitle title={title} />}
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={isShowTitle && styles.movieSlideList}
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
