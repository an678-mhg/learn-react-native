import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Cast } from "../types/index.types";
import { getImage } from "../utils/contanst";

export default function CastItem({ item }: { item: Cast }) {
  return (
    <TouchableOpacity style={styles.castContainer}>
      <Image
        style={styles.castImage}
        source={{ uri: getImage(item.profile_path) }}
      />
      <Text style={styles.castName}>{item.name || "Unknown"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  castImage: {
    width: "100%",
    aspectRatio: 1 / 1,
    borderRadius: 4,
    backgroundColor: "#C9C9CE",
  },
  castContainer: {
    width: 80,
    marginRight: 10,
  },
  castName: {
    fontWeight: "600",
    fontSize: 12,
    marginTop: 4,
  },
});
