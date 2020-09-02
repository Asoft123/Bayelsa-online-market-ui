import React, { Component } from "react";
import { NavLink } from "react-router-dom"
// import auth from "../../services/authService";
import "./header.css";

import DrawerToggleButton from "./DrawerToggleButton";
import { Container } from "react-bootstrap";

class Header extends Component {
    state= {
        scrolled:false,
    }

     
    render() {

        // auth.expiredLogout()
        // const { user } = this.props;
        return (
                <div className={this.state.scrolled ? "navbar navberscrolled": "navbar"}>
                <Container>
                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                   
                    <div className="spacer" />
                   
                    <div>
                        <ul className="nav">
                            <li>
                                <NavLink to="/add-new-user" activeClassName="active-link" className="ot-link">
                                   Ministries
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/give" activeClassName="active-link" className="ot-link active">
                                    Give
                                </NavLink>
                            </li>
                        
                            <li>
                                <NavLink to="/events" activeClassName="active-link" className="ot-link">
                                    Events
                                </NavLink>
                            </li>     
                            <li>
                                <NavLink to="/resources" activeClassName="active-link" className="ot-link">
                                    Resources
                                </NavLink>
                            </li>
                            <li>
                                {" "}
                                <NavLink to="/about_us" activeClassName="active-link" className="ot-link">
                                    About Us
                                </NavLink>
                            </li>  
                            
                            <li>
                                <NavLink to="/contact_us"activeClassName="active-link" className="ot-link">
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/logout"activeClassName="active-link" className="ot-link">
                                    Sign Out
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </Container>
                </div>
           
        );
    }
}

export default Header;
