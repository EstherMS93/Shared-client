import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../styles/navBar.css"
import { FaHome } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

export default class NavBar extends Component {
    render() {
        return (
            <div className="navigation">
                <img src="/logo.png" alt="logo" className="logo" />
                <Link to="/" className="nav-link">
                <FaHome className="nav-icon"/>
                <br />
                Home
              </Link>
                <Link to="/add-event" className="nav-link">
                <FaPlus className="nav-icon"/>
                <br />
                Add your events!
              </Link>
            </div>
        )
    }
}
