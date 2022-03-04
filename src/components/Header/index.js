import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

const Header = (props) => {
  return (
    <header
      className={`header-area header-sticky wow slideInDown `}
      // background-header
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* <!-- ***** Logo Start ***** --> */}
              <a href="index.html" className="logo">
                <img src={Logo} alt="Chain App Dev" />
              </a>
              {/* <!-- ***** Logo End ***** -->
          <!-- ***** Menu Start ***** --> */}
              <ul className={`nav`}>
                <li className="scroll-to-section">
                  <Link to="/" className="active">
                    Home
                  </Link>
                </li>

                <li className="scroll-to-section">
                  <Link to="/">About</Link>
                </li>

                <li className="scroll-to-section">
                  <a>Newsletter</a>
                </li>
                <li>
                  <div className="gradient-button">
                    <Link to="/reg" id="modal_trigger">
                      <i className="fa fa-sign-in-alt"></i> Sign In
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="gradient-button">
                    <Link to="/log" id="modal_trigger">
                      <i className="fa fa-sign-in-alt"></i> Log In
                    </Link>
                  </div>
                </li>
              </ul>
              <a className={`menu-trigger`}>
                <span>Menu</span>
              </a>
              {/* <!-- ***** Menu End ***** --> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
