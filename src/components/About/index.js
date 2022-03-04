import React from "react";

import HeadingLineDec from "../../assets/images/heading-line-dec.png";
import AboutRightDec from "../../assets/images/about-right-dec.png";

const About = (props) => {
  return (
    <div id="about" className="about-us section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h4>
                About <em>What We Do</em> &amp; Who We Are
              </h4>
              <img src={HeadingLineDec} alt="" />
              <p>
                Application where, various stakeholders allocated specific roles
                can perform functions such as, adding to the ledger, transfer
                property on the ledger and so on.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="box-item">
                  <h4>
                    <a href="#">Property Search</a>
                  </h4>
                  <p>
                    Search for property ownership by the current and previos
                    owners
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-item">
                  <h4>
                    <a href="#">Transfer Property</a>
                  </h4>
                  <p>Transfer property from one owner to the next</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-item">
                  <h4>
                    <a href="#">Adding To The Ledger</a>
                  </h4>
                  <p>Adding new property to the ledger of other properties</p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="box-item">
                  <h4>
                    <a href="#">Transparency </a>
                  </h4>
                  <p>
                    A single transaction of land would be broadcasted on the
                    network to all the nodes{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-12">
                <p>Sign UP for more information about the system</p>
                <div className="gradient-button">
                  <a href="#">SIGN UP</a>
                </div>
                <span>*WELCOME</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-image">
              <img src={AboutRightDec} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
