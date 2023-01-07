import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

interface MovieTitleProps {
  title: string;
}

export default function MovieTitle({ title }: MovieTitleProps) {
  return (
    <View style={styles.movieSlideWrapTitle}>
      <Text style={styles.movieSlideTitle}>{title}</Text>
      <TouchableOpacity style={styles.movieSlideButtonSeeMore}>
        <Text style={styles.movieSlideTextSeeMore}>See more</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  movieSlideTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  movieSlideButtonSeeMore: {
    borderWidth: 1,
    borderColor: "#C9C9CE",
    borderRadius: 50,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  movieSlideWrapTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  movieSlideTextSeeMore: {
    fontSize: 12,
  },
});
