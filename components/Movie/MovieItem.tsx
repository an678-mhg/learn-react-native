import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Movie } from "../../types/index.types";
import { getImage } from "../../utils/contanst";
import AntDesign from "react-native-vector-icons/AntDesign";

interface MovieItemProps {
  item: Movie;
}

export default function MovieItem({ item }: MovieItemProps) {
  return (
    <TouchableOpacity style={styles.movieItemContainer}>
      <Image
        style={styles.movieItemImage}
        source={{ uri: getImage(item.poster_path) }}
      />
      <View>
        <Text style={styles.movieItemTitle}>{item.title}</Text>
        <View style={styles.movieItemStar}>
          <AntDesign name="star" size={15} color="#FFC319" />
          <Text style={styles.movieItemStarTitle}>{item.vote_average}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  movieItemImage: {
    width: "100%",
    aspectRatio: 9 / 16,
    borderRadius: 4,
  },
  movieItemContainer: {
    marginEnd: 16,
    width: 130,
  },
  movieItemTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
  },
  movieItemStar: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  movieItemStarTitle: {
    color: "#C9C9CE",
    marginStart: 4,
  },
});
