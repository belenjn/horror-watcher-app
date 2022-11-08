import { Movie } from "../types/movie"
import { Footer } from "../components/footer/Footer"
import { Grid } from "../components/explore-page/grid/Grid"
import { Navbar } from "../components/navbar/Navbar"

export const ExplorePage = ({movies} : {movies: Movie[]}) => {
  return (
    <div className="animate__animated animate__fadeIn animate__faster">
    <Navbar/>
    <Grid movies={movies}/>
    <Footer/>
    </div>
  )
}
