import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className="container-fluid ">
          <a className="navbar-brand text-grey mx-3 " href="/">
            <b>{props.title}</b>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <a
                  className="nav-link active text-grey"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-grey" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.togglemode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Your Title",
};

export default Navbar;
