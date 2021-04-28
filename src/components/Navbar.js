import React, { Component } from 'react'
import {Link, NavLink} from 'react-router-dom';
export class Navbar extends Component {
    render() {
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand  text-100" to="/">Fooddies</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-lg-2">                           
                            <li className="nav-item pl-4">
                                <NavLink className="nav-link" exact to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item pl-4">
                                <NavLink className="nav-link" exact to="/order">Order</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar
