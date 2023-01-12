import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Movie, Navigation, Route } from "../../types/index.types";
import { getImage, getImagePlacehoder } from "../../utils/contanst";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigation, useRoute } from "@react-navigation/native";

interface MovieItemProps {
  item: Movie;
}

export default function MovieItem({ item }: MovieItemProps) {
  const navigation = useNavigation<Navigation>();
  const route = useRoute<Route>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {
          id: item.id,
          media_type: item.media_type || route.params?.media_type,
        })
      }
      style={styles.movieItemContainer}
    >
      <Image
        style={styles.movieItemImage}
        source={{
          uri: item.poster_path
            ? getImage(item.poster_path)
            : getImagePlacehoder(),
        }}
      />
      <View>
        <Text numberOfLines={1} style={styles.movieItemTitle}>
          {item.title || item.name}
        </Text>
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
    backgroundColor: "#C9C9CE",
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
