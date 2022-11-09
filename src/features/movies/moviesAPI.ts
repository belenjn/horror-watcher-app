import { apiKey } from "../../env";

export const moviesAPI = async (page: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie/?api_key=${apiKey}&with_genres=27&page=${page}`,
      {
        method: "GET"
      }
    );
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.results;
    }
  } catch (error) {
    console.error(error);
    throw new Error("Something bad happened");
  }
};
