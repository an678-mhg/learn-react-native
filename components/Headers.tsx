import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import React from "react";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Headers() {
  const handleComeGithubRepo = async () => {
    const urlGitRepo = "https://github.com/an678-mhg/learn-react-native";
    const support = await Linking.canOpenURL(urlGitRepo);
    if (support) {
      Linking.openURL(urlGitRepo);
    } else {
      Alert.alert("Don't not support");
    }
  };

  return (
    <View style={styles.headersContainer}>
      <MaterialCommunity name="movie" color="#333" size={30} />
      <Text style={styles.headersText}>PhimMoi</Text>
      <TouchableOpacity onPress={handleComeGithubRepo}>
        <AntDesign name="github" color="#333" size={30} />
      </TouchableOpacity>
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
