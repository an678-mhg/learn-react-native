import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import { Navigation, StackParamList } from "../types/index.types";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { getMovieDetail } from "../services/MovieDetailServices";
import { getBackdropImage } from "../utils/contanst";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunity from "react-native-vector-icons/MaterialCommunityIcons";
import GenresItem from "../components/GenresItem";
import CastItem from "../components/CastItem";
import MovieSlide from "../components/Movie/MovieSlide";

type DetailsProps = NativeStackScreenProps<StackParamList, "Details">;

const Details = ({ route }: DetailsProps) => {
  const { id, media_type } = route.params;
  const { data } = useQuery([`movie-${id}-${media_type}`], () =>
    getMovieDetail(id, media_type)
  );
  const navigation = useNavigation<Navigation>();

  if (!data) {
    return <Text>Loading...</Text>;
  }

  const [movie, credit, similar] = data;

  return (
    <ScrollView>
      <View style={styles.detailBackdropImageWrap}>
        <Image
          style={styles.detailBackdropImage}
          source={{ uri: getBackdropImage(movie.backdrop_path) }}
        />
        <SafeAreaView style={styles.detailGoBackWrap}>
          <View style={styles.detailBackDot}>
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={30}
              color="#fff"
            />
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={30}
              color="#fff"
            />
          </View>
        </SafeAreaView>

        <SafeAreaView style={styles.detailPlayButton}>
          <AntDesign size={40} color="#fff" name="play" />
        </SafeAreaView>
      </View>
      <View style={styles.detailMovieContent}>
        <View style={styles.detailMovieContentWrapTitleStart}>
          <View style={{ flex: 1 }}>
            <Text style={styles.detailMovieTitle}>
              {movie.title || movie.name}
            </Text>
            <View style={styles.movieItemStar}>
              <AntDesign name="star" size={15} color="#FFC319" />
              <Text style={styles.movieItemStarTitle}>
                {movie.vote_average}
              </Text>
            </View>
          </View>
          <MaterialCommunity color="#333" name="bookmark-outline" size={30} />
        </View>
        <View style={styles.movieCardGenresList}>
          {movie.genres.map((item) => (
            <GenresItem key={item.id} item={item} />
          ))}
        </View>
        <View
          style={{
            marginVertical: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ color: "#9C9C9C" }}>Budget</Text>
            <Text style={{ fontWeight: "600", marginTop: 5 }}>
              {movie.budget || 0} $
            </Text>
          </View>
          <View>
            <Text style={{ color: "#9C9C9C" }}>Language</Text>
            <Text style={{ fontWeight: "600", marginTop: 5 }}>
              {movie?.spoken_languages[0]?.name || "English"}
            </Text>
          </View>
          <View>
            <Text style={{ color: "#9C9C9C" }}>Status</Text>
            <Text style={{ fontWeight: "600", marginTop: 5 }}>
              {movie.status}
            </Text>
          </View>
        </View>
        <View style={styles.detailMovieDescription}>
          <Text style={styles.detailMovieDescriptionTitle}>Description</Text>
          <Text style={styles.detailMovieDescriptionText}>
            {movie.overview}
          </Text>
        </View>
        {credit?.cast?.length > 0 && (
          <View style={styles.detailMovieDescription}>
            <Text style={styles.detailMovieDescriptionTitle}>Cast</Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              style={{ marginTop: 10 }}
              horizontal
              data={credit.cast?.slice(0, 10)}
              renderItem={({ item }) => (
                <CastItem key={item.cast_id} item={item} />
              )}
            />
          </View>
        )}
        {similar?.results?.length > 0 && (
          <View style={styles.detailMovieDescription}>
            <Text style={styles.detailMovieDescriptionTitle}>Similar</Text>
            <MovieSlide isShowTitle={false} data={similar.results} title="" />
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  detailBackdropImageWrap: {
    position: "relative",
  },
  detailBackdropImage: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  detailGoBackWrap: {
    position: "absolute",
    paddingHorizontal: 16,
    width: "100%",
    flexDirection: "column",
    height: "100%",
    zIndex: 2,
  },
  detailBackDot: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailPlayButton: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#33333380",
  },
  detailPlayButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    marginTop: 10,
  },
  detailMovieContent: {
    padding: 16,
  },
  detailMovieTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  movieItemStar: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  movieItemStarTitle: {
    color: "#C9C9CE",
    marginStart: 4,
  },
  detailMovieContentWrapTitleStart: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  movieCardGenresList: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  detailMovieDescription: {
    marginTop: 10,
  },
  detailMovieDescriptionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  detailMovieDescriptionText: {
    fontSize: 14,
    color: "#9C9C9C",
    marginTop: 5,
  },
});

export default Details;
