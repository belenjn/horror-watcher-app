import "./Pending.css"

export const Pending = () => {
  const movies: [] = []

  return (
    <div className='pending__container animate__animated animate__fadeIn animate__faster'>
    <h1 className="pending__container--title">
        Pending
    </h1>

    <div className="pending__container--grid">
      {
        movies.length === 0 ? <h1>No movies yet :(</h1> : <h1>Movies</h1>
      }
    </div>
</div>
  )
}
