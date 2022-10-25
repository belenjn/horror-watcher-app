import { Movie } from "../../types/movie"
import { Footer } from "../footer/Footer"
import { Grid } from "../grid/Grid"
import { Navbar } from "../navbar/Navbar"

export const ExplorePage = ({movies} : {movies: Movie[]}) => {
  return (
    <>
    <Navbar/>
    <Grid movies={movies}/>
    <Footer/>
    </>
  )
}
