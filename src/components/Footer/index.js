import React from "react";

import WhiteLogo from "../../assets/images/white-logo.png";

const Footer = (props) => {
  return (
    <footer id="newsletter">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-heading">
              <h4>
                Join our mailing list to receive the news &amp; latest trends
              </h4>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-3">
            <form id="search" action="#" method="GET">
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <fieldset>
                    <input
                      type="address"
                      name="address"
                      className="email"
                      placeholder="Email Address..."
                      autoComplete="on"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <fieldset>
                    <button type="submit" className="main-button">
                      Subscribe Now <i className="fa fa-angle-right"></i>
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-widget">
              <h4>Contact Us</h4>
              <p>Nairobi, 22795-008, Kenya</p>
              <p>
                <a href="#">254-791-847358</a>
              </p>
              <p>
                <a href="#">steveris101@gmail.com</a>
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h4>About Us</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>

                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">App Engine</a>
                </li>
                <li>
                  <a href="#">Programming</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">App News</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">App Dev Team</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-widget">
              <h4>About Our Company</h4>
              <div className="logo">
                <img src={WhiteLogo} alt="" />
              </div>
              <p>
                In the case of blockchain system, trust is replaced by
                cryptographic proof. Blockchain represents a solution where each
                new block of transaction is tied to previous block, thus forming
                a chain of blocks.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="copyright-text">
              <p>
                Copyright © 2022 Stephen & Marvin. All Rights Reserved.
                <br />
                Design:{" "}
                <a
                  href="https://templatemo.com/"
                  target="_blank"
                  title="css templates"
                >
                  RISKAM
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
