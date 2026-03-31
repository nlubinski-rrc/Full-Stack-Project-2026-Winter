import "./Nav.css";
import { NavLink } from "react-router";
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
function Nav() {
    return(<nav>
        <div className="page-links">
            <NavLink to="/"> Home </NavLink>
            <NavLink to="/my-watchlist"> My Watchlist </NavLink>
            <NavLink to='/create-reviews'> Create Reviews </NavLink>
            <NavLink to="/favorite-actors">Favorite Actors</NavLink>
            <NavLink to="/watched-movies">Watched Movies</NavLink>
        </div>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
    </nav>);
}
export default Nav;