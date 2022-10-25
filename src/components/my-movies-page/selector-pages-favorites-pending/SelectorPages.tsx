import { useState } from "react"
import "./SelectorPages.css"

export const SelectorPages = () => {
 

  return (
    <div className="gridMoviesPage__container">
        <div className="gridMoviesPage__container--pages">
        <div className="gridMoviesPage__container--pages--favorites">Favorites</div>
        <div className="gridMoviesPage__container--pages--pending">Pending</div>
        </div>

    </div>
  )
}
