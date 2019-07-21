import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">
        EDGAR SÁNCHEZ
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0 mr-3">
          <li className="nav-item active">
            <Link to="/projects" className="nav-link" href="#">
              PROJECTS <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" href="#">
              ARTICLES
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" href="#">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" href="#">
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
