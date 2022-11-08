import { useState } from "react";
import { useAppSelector } from "../../hooks/redux-hooks";
import { Footer } from "../footer/Footer";
import { Navbar } from "../navbar/Navbar";
import { Favorites } from "./favorites/Favorites";
import { Pending } from "./pending/Pending";
import { SelectorPages } from "./selector-pages-favorites-pending/SelectorPages";
import {FaFilter} from "react-icons/fa"

export const MyMoviesPage = () => {
  const [favorites, setFavorites] = useState(true);
  const [pending, setPending] = useState(false);

  const favoritesMovies = useAppSelector(state => state.movies.favoritesMovies);
  const pendingMovies = useAppSelector(state => state.movies.pendingMovies);
  

  return (
    <>
      <Navbar />
      <SelectorPages favorites={favorites} pending={pending} setFavorites={setFavorites} setPending={setPending} />
      <FaFilter/>
      {favorites === true ? <Favorites favoritesMovies={favoritesMovies}/> : <Pending pendingMovies={pendingMovies}/>}

      <Footer />
    </>
  );
};
