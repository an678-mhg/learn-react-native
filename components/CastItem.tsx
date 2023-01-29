import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Cast, Navigation } from "../types/index.types";
import { getImage } from "../utils/contanst";
import { useNavigation } from "@react-navigation/native";

export default function CastItem({ item }: { item: Cast }) {
  const navigation = useNavigation<Navigation>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Cast", { castId: item.cast_id, name: item.name })
      }
      style={styles.castContainer}
    >
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
