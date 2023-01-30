import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface MovieTitleProps {
  title: string;
}

export default function MovieTitle({ title }: MovieTitleProps) {
  return (
    <View style={styles.movieSlideWrapTitle}>
      <Text style={styles.movieSlideTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  movieSlideTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  movieSlideWrapTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
