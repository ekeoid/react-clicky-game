import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Clicky Game
            </Link>

            <div className="navbar-nav ml-auto">
                <li className="nav-item score">
                    Score: <span>{props.score}</span>
                </li>
                |
                <li className="nav-item top-score">
                    Top Score: {props.topScore}
                </li>
            </div>
        </nav>
    );
}

export default Navbar;
