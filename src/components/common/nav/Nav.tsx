import "./Nav.css";
import { NavLink } from "react-router";

function Nav() {
    return(<nav>
        <div className="page-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/my-watchlist">My Watchlist</NavLink>
        </div>
    </nav>);
}

export default Nav;