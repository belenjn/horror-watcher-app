import {  useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Favorites } from "./favorites/Favorites";
import { Pending } from "./pending/Pending";
import { SelectorPages } from "./selector-pages-favorites-pending/SelectorPages";

export const MyMoviesPage = () => {
  const [favorites, setFavorites] = useState(true);
  const [pending, setPending] = useState(false);

  const favoritesMovies = useAppSelector(state => state.movies.favoritesMovies);
  

  return (
    <>
      <Navbar />
      <SelectorPages favorites={favorites} pending={pending} setFavorites={setFavorites} setPending={setPending} />
      {favorites === true ? <Favorites favoritesMovies={favoritesMovies}/> : <Pending />}

      <Footer />
    </>
  );
};
