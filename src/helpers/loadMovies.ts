import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { Movie } from "../types/movie";

export const loadMovies = async (userId: string | number) => {
  if (!userId) throw new Error("The userId doesn't exist");

  const collectionRef = collection(
    FirebaseDB,
    `${userId}/favorites-movies/movies`
  );

  const docs = await getDocs(collectionRef);

  const movies: any = [];

  docs.forEach((doc) => {
    movies.push({ ...doc.data() });
  });

  return movies;
};
