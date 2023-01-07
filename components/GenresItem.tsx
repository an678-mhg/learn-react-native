import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Genres } from "../types/index.types";

interface GenresItemProps {
  item: Genres;
}

export default function GenresItem({ item }: GenresItemProps) {
  return (
    <TouchableOpacity style={styles.genresContainer}>
      <Text style={styles.genresText}>{item.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  genresContainer: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "#DBE3FF",
    borderRadius: 50,
    marginEnd: 4,
  },
  genresText: {
    fontSize: 10,
    textTransform: "uppercase",
    fontWeight: "600",
    color: "#92ABEB",
  },
});
