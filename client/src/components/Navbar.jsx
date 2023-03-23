import React, { useContext } from "react";
//import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);

  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink className="nav-item nav-link active" to="/">
            Home{" "}
          </NavLink>
          <NavLink className="nav-item nav-link" to="/grievance">
            Grievance
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about">
            Profile
          </NavLink>
          <NavLink className="nav-item nav-link " to="/logout">
            Logout
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink className="nav-item nav-link active" to="/">
            Home{" "}
          </NavLink>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link " to="/signup">
            Signup
          </NavLink>
        </>
      );
    }
  };
  return (
    <>
      <section className="shadow p-2 mb-2 bg-body">
      <nav className="navbar container position-static navbar-expand-lg ">
        <NavLink className="navbar-brand" to="/">
          PMC WEB
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="bg-primary navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <RenderMenu />
          </div>
        </div>
      </nav>
      </section>
    </>
  );
};

export default Navbar;
