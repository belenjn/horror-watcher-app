import axios from "axios";
import { apiKey } from "../env";

export const moviesAPI = async (): Promise<any> => {
  try {
    return await axios
      .get(
        `https://api.themoviedb.org/3/discover/movie/?api_key=${apiKey}&with_genres=27`
      )
      .then((res) => console.log(res.data));
  } catch (error) {
    console.error(error);
    throw new Error("Something bad happened");
  }
};
