import { StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackParamList } from "../types/index.types";
import BackHeader from "../components/BackHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import Loading from "../components/Loading";

type CastProps = NativeStackScreenProps<StackParamList, "Cast">;

export default function Cast({ route }: CastProps) {
  const { castId, name } = route.params;

  return (
    <SafeAreaView style={styles.castContainer}>
      <BackHeader title={name} />
      <Loading />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  castContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  castContent: {
    flex: 1,
  },
});
