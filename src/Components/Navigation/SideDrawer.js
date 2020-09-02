import React, { Component } from "react";
import { FaMoneyCheckAlt} from 'react-icons/fa';
import { MdEventAvailable, MdInfo,MdContactMail,MdLibraryBooks} from 'react-icons/md';
import { GiLovers} from 'react-icons/gi';


// import logo from "../home/assets/fcc_logo.png";
// import auth from '../../services/authService';
import "./SideDrawer.css";
import {  NavLink } from "react-router-dom";

class SideDrawer extends Component {


    render() {
        const { hide } = this.props;
        // auth.expiredLogout()
        // console.log(user.usercat)
        let drawerClasses = "side-drawer";

        if (this.props.show) {
            drawerClasses = "side-drawer open";
        }
        return (
            <nav className={drawerClasses}>
                <div className="d-flex flex-column">
                    {/* <div className="side-nav">
                        <Link to="/" className="sd-link d-flex flex-wrap align-items-center">
                        <img className="m-2" style={{ width: "60px", height: "60px" }} onClick={hide} src={logo} alt="Logo" /><h3>FCC</h3>
                        </Link>
                    </div> */}

                    <div className="side-nav">
                        <NavLink to="/ministries" onClick={hide} activeClassName="active-link" className="sd-link mt-5">
                          <GiLovers activeClassName="active-link" className="icon-fix mb-n3"  color="white"  /> Ministries
                        </NavLink>
                    </div>

                    <div className="side-nav">
                        <NavLink to="/give" onClick={hide} activeClassName="active-link"  className="sd-link">
                            <FaMoneyCheckAlt className="icon-fix mb-n3" color="white"/> Give
                        </NavLink>
                    </div>
                    <div className="side-nav">
                        <NavLink to="/events" onClick={hide} activeClassName="active-link" className="sd-link">
                          <MdEventAvailable className="icon-fix mb-n3" color="white"/> Events
                        </NavLink>
                    </div>

                   <div className="side-nav">
                        <NavLink to="/resources" onClick={hide} activeClassName="active-link" className="sd-link">
                           <MdLibraryBooks className="icon-fix mb-n3" color="white"/> Resources
                        </NavLink>
                    </div>

                  
                    
                
                        <div className="d-flex flex-column">
                            <div className="side-nav">
                                <NavLink to="/about_us" onClick={hide} activeClassName="active-link" className="sd-link">
                                    <MdInfo className="icon-fix mb-n3" color="white"/>  About Us
                                </NavLink>
                            </div>
                            <div className="side-nav">
                                <NavLink to="/contact_us" onClick={hide} activeClassName="active-link" className="sd-link">
                                  <MdContactMail className="icon-fix mb-n3" color="white"/>  Contact
                                </NavLink>
                            </div>
                            <div className="side-nav">
                                <NavLink to="/building-project" onClick={hide} activeClassName="active-link" className="sd-link">
                                  <MdContactMail className="icon-fix mb-n3" color="white"/>  Faith Audithorium
                                </NavLink>
                            </div>
                        </div>
                 
                </div>
            </nav>
        );
    }
}

export default SideDrawer;
