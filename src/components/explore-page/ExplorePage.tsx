import { Movie } from "../../types/movie"
import { Footer } from "../footer/Footer"
import { Grid } from "./grid/Grid"
import { Navbar } from "../navbar/Navbar"

export const ExplorePage = ({movies} : {movies: Movie[]}) => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
    <Navbar/>
    <Grid movies={movies}/>
    <Footer/>
    </div>
  )
}
