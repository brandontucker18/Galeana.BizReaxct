import React, { Component } from 'react';
import './styles/navigation.scss';


import { NavLink} from "react-router-dom";

export default class navigationContainer extends Component {
  render() {
    return <div>
              <div className="footer-wrapper">
      <div className="logo">
             <img src="../images/treetwo.png" alt="logo" />
        </div>
        <div className="nav-links">
            <div className="navlinks">
              <NavLink to="./home" activeClassName="nav-link-active ">
              {/* nav-link-active */}
                home
              </NavLink>
            </div>
                <div className="navlinks">
              <NavLink to="" activeClassName="">
                About
              </NavLink>
            </div>
            <div className="navlinks">
              <NavLink to="" activeClassName="">
                Contact
              </NavLink>
            </div>
        </div>
        </div>
    </div>;
  }
}
