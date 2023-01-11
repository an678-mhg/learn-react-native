import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Genres, Movie, Navigation } from "../../types/index.types";
import { genres, getImage } from "../../utils/contanst";
import AntDesign from "react-native-vector-icons/AntDesign";
import GenresItem from "../GenresItem";
import { useNavigation, useRoute } from "@react-navigation/native";

interface MovieCardProps {
  item: Movie;
}

export default function MovieCard({ item }: MovieCardProps) {
  const navigation = useNavigation<Navigation>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          id: item.id,
          media_type: item.media_type,
        })
      }
      style={styles.movieCardContainer}
    >
      <Image
        style={styles.movieCardImage}
        source={{ uri: getImage(item.poster_path) }}
      />
      <View style={styles.movieCardContent}>
        <Text numberOfLines={1} style={styles.movieCardTitle}>
          {item.title || item.name}
        </Text>
        <View style={styles.movieItemStar}>
          <AntDesign name="star" size={15} color="#FFC319" />
          <Text style={styles.movieItemStarTitle}>{item.vote_average}</Text>
        </View>
        <View style={styles.movieCardGenresList}>
          {(item?.genre_ids?.length > 3
            ? item.genre_ids.slice(0, 3)
            : item.genre_ids
          )?.map((item) => (
            <GenresItem
              key={item}
              item={genres.find((p) => p.id === item) as Genres}
            />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  movieCardContainer: {
    marginBottom: 16,
    flexDirection: "row",
  },
  movieCardImage: {
    width: 75,
    aspectRatio: 9 / 16,
    borderRadius: 4,
    backgroundColor: "#C9C9CE",
  },
  movieCardTitle: {
    fontSize: 15,
    fontWeight: "700",
  },
  movieItemTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 5,
  },
  movieItemStarTitle: {
    color: "#C9C9CE",
    marginStart: 4,
  },
  movieItemStar: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  movieCardContent: {
    marginStart: 10,
  },
  movieCardGenresList: {
    flexDirection: "row",
    marginTop: 10,
  },
});
