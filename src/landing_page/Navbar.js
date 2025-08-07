import React from "react";
import Toggle from "./toggle"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg border-bottom p-3"
            style={{ backgroundColor: "white" }}
        >
            <div className="container">
                <Link className="navbar-brand" to='/'>
                    <img
                        src="media\images\logo.svg"
                        alt="Zerodha logo"
                        className="img-fluid"
                        style={{ maxWidth: "120px" }}
                    ></img>
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
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/Signup'>
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/product">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/support">
                                Support
                            </Link>
                        </li>
                        <li>
                            <Toggle/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
