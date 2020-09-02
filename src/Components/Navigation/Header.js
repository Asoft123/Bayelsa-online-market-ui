import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom"
// import auth from "../../services/authService";
import "./header.css";
// import logo from "../home/assets/fcc_logo.png";
import DrawerToggleButton from "./DrawerToggleButton";
import { Container } from "react-bootstrap";

class Header extends Component {
    state= {
        scrolled:false,
    }

      componentDidMount() {
            window.addEventListener(`scroll`, () => {
                const isTop = window.scrollY < 120;
                if(isTop !== true){
                    this.setState({scrolled:true})
                }else{
                    this.setState({scrolled:false})

                }
            })
        }
        componentWillUnmount() {
            window.removeEventListener('scroll')
        }
    render() {

      const { hideo } = this.props;
        // auth.expiredLogout()
        // const { user } = this.props;
        return (
                <div className={this.state.scrolled ? "navbar navberscrolled": "navbar"}>
                <Container>
                    <div>
                        <DrawerToggleButton click={this.props.drawerClickHandler} />
                    </div>
                    {/* <div>
                        <Link to="/" className="logo logo_display1">
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                    </div> */}
                    <div className="spacer" />
                    {/* {!hideo && <div className="small-screen">
                        <Link to="/" className="logo logo_display2">
                            <img className="logo" src={logo} alt="Logo" />
                        </Link>
                    </div>} */}
                    <div>
                        <ul className="nav">
                            <li>
                                <NavLink to="/ministries" activeClassName="active-link" className="ot-link">
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
                                <NavLink to="/building-project"activeClassName="active-link" className="ot-link">
                                    Faith Audithorium
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
