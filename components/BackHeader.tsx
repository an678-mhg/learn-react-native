import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "../types/index.types";

interface BackHeaderProps {
  title: string;
}

export default function BackHeader({ title }: BackHeaderProps) {
  const navigation = useNavigation<Navigation>();
  return (
    <View style={styles.backHeaderWrap}>
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back"
        size={30}
        color="#333"
      />
      <Text style={styles.backHeaderTitle} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backHeaderWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  backHeaderTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginStart: 10,
    flex: 1,
  },
});
