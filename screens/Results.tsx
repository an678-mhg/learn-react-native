import React from "react";
import { Movie, StackParamList } from "../types/index.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useInfiniteQuery } from "@tanstack/react-query";
import { searchMovieByKeyword } from "../services/SearchServices";
import { SafeAreaView } from "react-native-safe-area-context";
import BackHeader from "../components/BackHeader";
import { FlatList, StyleSheet, ActivityIndicator } from "react-native";
import MovieCard from "../components/Movie/MovieCard";

type ResultsProps = NativeStackScreenProps<StackParamList, "Results">;

export default function Results({ route }: ResultsProps) {
  const { keyword } = route.params;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      [`search-${keyword}`],
      ({ pageParam = 1 }) => {
        if (!keyword.trim()) return;
        return searchMovieByKeyword(keyword, pageParam);
      },
      {
        getNextPageParam: (lastPage) =>
          (lastPage?.page as number) < (lastPage?.total_pages as number)
            ? (lastPage?.page as number) + 1
            : null,
      }
    );

  return (
    <SafeAreaView style={styles.resultsWrap}>
      <BackHeader title={`Results for "${keyword}"`} />
      {!data && <ActivityIndicator size={30} style={{ marginVertical: 16 }} />}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.resultsList}
        data={
          data &&
          data?.pages?.reduce((final, item) => {
            // @ts-ignore
            final.push(...item.results);
            return final;
          }, [] as Movie[])
        }
        keyExtractor={(item) => item?.id?.toString()}
        renderItem={({ item }) => <MovieCard item={item} />}
        onEndReached={() => hasNextPage && fetchNextPage()}
        ListFooterComponent={() =>
          isFetchingNextPage ? (
            <ActivityIndicator size={30} style={{ marginBottom: 16 }} />
          ) : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  resultsWrap: {
    padding: 16,
  },
  resultsList: {
    marginVertical: 16,
  },
});
