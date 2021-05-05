import React,{useEffect} from 'react'
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { getnumber } from './../store/Actions/orderAction';

function Navbar(props) {   
    useEffect(() => {
        getnumber();
    }, [])
   
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand  text-100" to="/">Fooddies</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-flex-icons ml-auto">                           
                            <li className="nav-item pl-4">
                                <NavLink className="nav-link" exact to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item pl-4">
                                
                                <NavLink className="nav-link" exact to="/cart">
                                <span><i class="fas fa-shopping-cart"></i></span>
                                <span class="badge badge-pill bg-danger">{props.cartProps.cartnumbers}</span>
                                </NavLink>                                
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
const mapStateToProps = state => ({
    cartProps:state.carts
})
export default connect(mapStateToProps,{getnumber}) (Navbar);
