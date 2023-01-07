import { MovieResponse } from "../types/index.types";
import client from "../utils/axios";
import { API_KEY } from "../utils/contanst";

const homeApi = {
  Trending: `/trending/movie/day?api_key=${API_KEY}`,
  Popular: `/movie/popular?api_key=${API_KEY}`,
};

const getMovie = async (
  key: "Trending" | "Popular"
): Promise<MovieResponse> => {
  const response = await client.get(homeApi[key]);
  return response.data;
};

export const getHome = async () => {
  const response = await Promise.all([
    getMovie("Trending"),
    getMovie("Popular"),
  ]);
  return response;
};
