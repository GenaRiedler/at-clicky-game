import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav className="nav navbar bg-dark sticky-top navbar-expand-md">
      <ul className="navbar-nav mr-auto ml-auto">
        <a className="navbar-brand" href="/">{props.title}</a>
        <li className="nav-item">
            <span className="navbar-text">Current Score: {props.score}</span>
        </li>
        <li className="nav-item">
            <span className="navbar-text">Top Score: {props.topScore}</span>
        </li>
        <li className="nav-item">
            <span className="navbar-text right-wrong">{props.rightWrong}</span>
        </li>
      </ul>
    </nav>
  );
export default Navbar;
