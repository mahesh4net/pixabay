import { Link, Navigate, NavLink } from "react-router-dom"
import logo from '../assets/logo.png'


export default function Navbar() {
  return (
    <>
      <div className="nav-container-outer">
        <div className="nav-container">
          <img src={logo} alt="" onClick={() => {window.location = '/'}}/>

          <div className="menu-links">
            <NavLink
              to="/backgrounds"
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
            >
              Backgrounds
            </NavLink>
            <NavLink
              to="/fashion"
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
            >
              Fashion
            </NavLink>
            <NavLink
              to="/nature"
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
            >
              Nature
            </NavLink>
            <NavLink
              to="/sports"
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
            >
              Sports
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "navlink active" : "navlink"
              }
            >
              Search
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
