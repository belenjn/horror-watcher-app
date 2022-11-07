import { Movie } from "../../../types/movie";
import { GridMyMoviesPage } from "../grid/GridMyMoviesPage";
import "./Favorites.css"


export const Favorites = ({favoritesMovies}: {favoritesMovies: Movie[]}) => {

  
  return (
    <div className='favorites__container animate__animated animate__fadeIn animate__faster'>
        <h1 className="favorites__container--title">
            Favorites
        </h1>

        <div className="favorites__container--grid">
          {
            favoritesMovies.length === 0 ? <h1 style={{
              height: 500
            }}>No movies yet :(</h1> : <GridMyMoviesPage movies={favoritesMovies}/>
          }
        </div>
    </div>
  )
}
