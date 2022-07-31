import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Reunion
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">

            <li className="nav-item mx-3">
              <a className="nav-link active" aria-current="page" href="#">
                Rent
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Buy
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">
                Sell
              </a>
            </li>

            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Manage Property
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mx-3">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button type="button" className="btn btn-outline-dark mx-3">
              Login
            </button>
            <button type="button" className="btn btn-outline-dark">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
