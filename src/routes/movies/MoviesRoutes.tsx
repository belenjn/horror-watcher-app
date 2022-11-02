import { Navigate, Route, Routes } from "react-router-dom"
import { ExplorePage } from "../../components/explore-page/ExplorePage"
import { Movie } from "../../types/movie"

export const MoviesRoutes = ({movies}: {movies: Movie[]}) => {
  return (
   <Routes>
    <Route path="/" element={<ExplorePage movies={movies}/>} />
    <Route path="/*" element={<Navigate to="/" />} />

   </Routes>
  )
}
