import { Movie, Response } from "../types/index.types";
import client from "../utils/axios";

const HomeAPI: { [key: string]: { url: string; media_type: "movie" | "tv" } } =
  {
    "Movie Trending": { url: `/trending/movie/day`, media_type: "movie" },
    "Movie Popular": { url: `/movie/popular`, media_type: "movie" },
    "Movie Now Playing": { url: "/movie/now_playing", media_type: "movie" },
    "TV Trending": { url: `/trending/tv/day`, media_type: "tv" },
    "TV Popular": { url: `/tv/popular`, media_type: "tv" },
    "TV On The Air": { url: "/tv/on_the_air", media_type: "tv" },
  };

export const getHome = async (): Promise<any> => {
  const response = await Promise.all(
    Object.keys(HomeAPI).map((item) =>
      client.get<Response<Movie>>(HomeAPI[item].url)
    )
  );

  const data = response.reduce((final, item, index) => {
    final[Object.keys(HomeAPI)[index]] = item.data.results?.map((item) => ({
      ...item,
      media_type: HomeAPI[Object.keys(HomeAPI)[index]].media_type,
    }));
    return final;
  }, {} as any);

  return data;
};
