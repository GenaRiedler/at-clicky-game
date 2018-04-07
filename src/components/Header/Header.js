import React from "react";
import "./Header.css";
import img from "../images/landofooo.jpg"

// const Header = ({ children }) => (
//   <div className="jumbotron">
//     {children}
//   </div>
// );
const Header = props => (
    <div className="jumbotron">
        <h1>Adventure Time!</h1>
        <h2>Click on the characters no more than once to win</h2>
        <img src={img} alt="Adventure Time!" />
    </div>
)

export default Header;
