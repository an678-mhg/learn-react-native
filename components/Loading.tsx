import { View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator color="#92ABEB" size={50} />
    </View>
  );
}
