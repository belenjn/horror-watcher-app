import "./Favorites.css"

export const Favorites = () => {
  const movies: [] = []
  return (
    <div className='favorites__container'>
        <h1 className="favorites__container--title">
            Favorites
        </h1>

        <div className="favorites__container--grid">
          {
            movies.length === 0 ? <h1>No movies yet :(</h1> : <h1>Movies</h1>
          }
        </div>
    </div>
  )
}
