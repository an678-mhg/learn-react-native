import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Headers() {
  return (
    <View style={styles.headersContainer}>
      <MaterialCommunity name="movie" color="#333" size={30} />
      <Text style={styles.headersText}>PhimMoi</Text>
      <AntDesign name="github" color="#333" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  headersContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  headersText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
