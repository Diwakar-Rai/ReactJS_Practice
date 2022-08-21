import React from "react";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <div className="row align-items-center px-0 mx-0">        
        <div className="col-lg-11">
          <nav className="navbar navbar-expand-lg bg-white col-12 ">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item px-3">
                    <Link
                      className="nav-link text-warning active"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/courses">
                      Courses
                    </Link>
                  </li>
                  <li className="nav-item px-3">
                    <Link className="nav-link" to="/teachers">
                      Teachers
                    </Link>
                  </li>
                  <li className="nav-item dropdown px-4">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="/"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Blog
                    </Link>
                    <ul className="dropdown-menu px-3">
                      <li>
                        <Link className="dropdown-item" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/noteapp">
                      NoteApp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/todoapp">
                      TodoApp
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/functodoapp">
                      Todo Function
                    </Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <button
                    className="btn btn-outline-light btn-sm bg-warning"
                    type="submit"
                  >
                    Join Now
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
