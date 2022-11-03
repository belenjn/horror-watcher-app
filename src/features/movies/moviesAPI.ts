import axios from "axios";
import { apiKey } from "../../env";

export const moviesAPI = async (page: number) => {
  try {
    return await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie/?api_key=${apiKey}&with_genres=27&page=${page}`
      )
      .then((res) => res.data.results);
  } catch (error) {
    console.error(error);
    throw new Error("Something bad happened");
  }
};
