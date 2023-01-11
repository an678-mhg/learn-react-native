import { Credit, Movie, MovieDetail, Response } from "../types/index.types";
import client from "../utils/axios";

export const getMovieDetail = async (
  id: number,
  media_type: "movie" | "tv"
): Promise<[MovieDetail, Credit, Response<Movie>]> => {
  const response = await Promise.all([
    (await client.get<MovieDetail>(`/${media_type}/${id}`)).data,
    (await client.get<Credit>(`/${media_type}/${id}/credits`)).data,
    (await client.get<Response<Movie>>(`/${media_type}/${id}/similar`)).data,
  ]);
  return response;
};
