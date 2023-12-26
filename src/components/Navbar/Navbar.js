import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              <Link to="/home">Home</Link>
              <span class="sr-only"></span>
            </a>
            <a class="nav-item nav-link" href="#">
              <Link to="/">Login</Link>
            </a>
            <a class="nav-item nav-link" href="#">
              <Link to="/signup">Signup</Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
