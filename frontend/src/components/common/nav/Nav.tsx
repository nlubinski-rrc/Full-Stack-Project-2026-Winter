import "./Nav.css";
import { NavLink } from "react-router";
import { SignInButton, SignUpButton, UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
function Nav() {
    return (
        <nav>
            <div className="page-links">
                <NavLink to="/"> Home </NavLink>
                <NavLink to="/my-watchlist"> My Watchlist </NavLink>
                <NavLink to="/create-reviews"> Create Reviews </NavLink>
                <NavLink to="/favorite-actors">Favorite Actors</NavLink>
                <NavLink to="/watched-movies">Watched Movies</NavLink>
            </div>
            <SignedOut>
                <SignInButton />
                <SignUpButton />
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
}
export default Nav;
