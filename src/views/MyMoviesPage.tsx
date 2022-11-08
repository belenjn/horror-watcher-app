import { useState } from "react";
import { useAppSelector } from "../hooks/redux-hooks";
import { Footer } from "../components/footer/Footer";
import { Navbar } from "../components/navbar/Navbar";
import { Favorites } from "../components/my-movies-page/favorites-page/Favorites";
import { Pending } from "../components/my-movies-page/pending-page/Pending";
import { SelectorPages } from "../components/my-movies-page/selector-pages-favorites-pending/SelectorPages";

export const MyMoviesPage = () => {
  const [favorites, setFavorites] = useState(true);
  const [pending, setPending] = useState(false);

  const favoritesMovies = useAppSelector(
    (state) => state.movies.favoritesMovies
  );
  const pendingMovies = useAppSelector((state) => state.movies.pendingMovies);

  return (
    <>
      <Navbar />
      <SelectorPages
        favorites={favorites}
        pending={pending}
        setFavorites={setFavorites}
        setPending={setPending}
      />
      {favorites === true ? (
        <Favorites favoritesMovies={favoritesMovies} />
      ) : (
        <Pending pendingMovies={pendingMovies} />
      )}

      <Footer />
    </>
  );
};
