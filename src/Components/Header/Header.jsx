import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import { FaAlignJustify } from "react-icons/fa";
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg   netflix-nav " >
      <div className="container-fluid ">
        <Link className="navbar-brand" href="#">
          <Logo />
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaAlignJustify />
        </button>
        <div className="collapse navbar-collapse header " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/tvshows">
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to ="/moviespage">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" href="#">
             New & Popular
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" href="#">
                My List
              </Link>
            </li>
          </ul>

          <SearchBar />
        </div>
      </div>
    </nav>
  );
};
export default Header;
