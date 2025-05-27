
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link active fs-5" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5" to="/business">Business</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5" to="/science">Science</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5" to="/health">Health</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5" to="/technology">Technology</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link fs-5" to="/sports">Sports</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
