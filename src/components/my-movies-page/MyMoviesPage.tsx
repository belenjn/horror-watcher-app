import { Footer } from "../footer/Footer"
import { Navbar } from "../navbar/Navbar"
import { Favorites } from "./favorites/Favorites"
import { Pending } from "./pending/Pending"
import {SelectorPages} from "./selector-pages-favorites-pending/SelectorPages"

export const MyMoviesPage = () => {
  return (
    <>
    <Navbar/>
    <SelectorPages/>
    <Favorites/>
    {/* <Pending/> */}
    <Footer/>
    </>
  )
}
