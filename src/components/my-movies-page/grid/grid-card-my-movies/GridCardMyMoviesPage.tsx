import React from 'react'
import { Link } from 'react-router-dom'
import { Movie } from '../../../../types/movie'
import { STRINGS } from '../../../../utils/strings'
import "./GridCardMyMoviesPage.css"

export const GridCardMyMoviesPage = ({ movie }: { movie: Movie }) => {
  return (
    <>
    <div
      className="gridCardMyMoviesPage__container--poster"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
      }}
    >
    </div>
  </>
  )
}
