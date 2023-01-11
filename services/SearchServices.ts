import { Genres, Movie, Response } from "../types/index.types";
import client from "../utils/axios";

export const searchMovieByKeyword = async (
  keyword: string,
  pageParam: number
): Promise<Response<Movie>> => {
  const response = await client.get("/search/multi", {
    params: { query: keyword, page: pageParam },
  });
  return response.data;
};

export const getKeyword = async (
  keyword: string
): Promise<Response<Genres>> => {
  const response = await client.get("/search/keyword", {
    params: { query: keyword },
  });
  return response.data;
};
