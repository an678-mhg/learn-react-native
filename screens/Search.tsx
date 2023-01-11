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
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { getKeyword } from "../services/SearchServices";
import { Genres } from "../types/index.types";

export default function Search() {
  const [textSearch, setTextSearch] = useState("");
  const [results, setResults] = useState<Genres[]>([]);
  const timeoutRef = useRef<any>();

  const handleTextChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    const value = e.nativeEvent.text;
    setTextSearch(value);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      if (!value.trim()) return;
      try {
        const data = await getKeyword(value);
        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
    }, 300);
  };

  return (
    <SafeAreaView style={styles.searchContainer}>
      <View style={styles.searchInput}>
        <AntDesign color="#333" name="search1" size={20} />
        <TextInput
          value={textSearch}
          onChange={handleTextChange}
          placeholder="Search...."
          style={{ flex: 1, paddingVertical: 5, paddingLeft: 10 }}
        />
        {textSearch?.trim()?.length > 0 && (
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
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.searchResultItemWrap} key={item.id}>
            <Text style={styles.searchResultItemText}>{item.name}</Text>
            <AntDesign color="#333" name="enter" size={20} />
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
    paddingHorizontal: 16,
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
  },
});
