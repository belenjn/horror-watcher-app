import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar__container">
        <div className="logo__navbar" />
        <div className="navbar__container--menu">
            <span className="first__option">My movies</span>
            <span className="second__option">Explore</span>
            <div className="logout"/>
        </div>
    </div>
  )
}
