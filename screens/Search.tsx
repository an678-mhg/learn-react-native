import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getKeyword } from "../services/SearchServices";
import { Genres, Navigation } from "../types/index.types";
import { useNavigation } from "@react-navigation/native";

export default function Search() {
  const [textSearch, setTextSearch] = useState("");
  const [results, setResults] = useState<Genres[]>([]);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<any>();

  const navigation = useNavigation<Navigation>();

  const handleTextChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = e.nativeEvent.text;
    setTextSearch(value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      if (!value.trim()) return;
      setLoading(true);
      try {
        const data = await getKeyword(value);
        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }, 300);
  };

  return (
    <SafeAreaView style={styles.searchContainer}>
      <View style={styles.searchInput}>
        <AntDesign color="#333" name="search1" size={20} />
        <TextInput
          onSubmitEditing={() =>
            navigation.navigate("Results", { keyword: textSearch })
          }
          value={textSearch}
          onChange={handleTextChange}
          placeholder="Search...."
          style={{ flex: 1, paddingVertical: 5, paddingLeft: 10 }}
        />
        {loading && <ActivityIndicator color="#92ABEB" size={20} />}
        {!loading && textSearch?.trim()?.length > 0 && (
          <AntDesign
            onPress={() => setTextSearch("")}
            color="#333"
            name="close"
            size={20}
          />
        )}
      </View>
      <FlatList
        style={{ marginBottom: 32 }}
        showsVerticalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Results", { keyword: item.name })
            }
            style={styles.searchResultItemWrap}
          >
            <AntDesign
              color="#333"
              name="search1"
              size={16}
              style={{ marginRight: 10 }}
            />
            <Text style={styles.searchResultItemText}>{item.name}</Text>
            <AntDesign color="#333" name="enter" size={16} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  searchResultItemWrap: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  searchResultItemText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
});
