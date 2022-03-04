import React from "react";

import SliderDec from "../../assets/images/slider-dec.png";

const Banner = () => {
  return (
    <div
      className="main-banner wow fadeIn"
      id="top"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div
                  className="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <h2>Welcome To CHAIN LAND REGISTRY Records</h2>
                      <p>
                        A Distributed Land Management Application where, each
                        new block of transaction is tied to previous block, thus
                        forming a chain of blocks. A single transaction of land
                        either in selling or changing ownership would be
                        broadcasted on the network to all the nodes which is
                        accompanied with cryptographic proof.
                      </p>
                    </div>
                    <div className="col-lg-12">
                      <div className="white-button first-button scroll-to-section">
                        <a href="#contact">
                          Free Quote <i className="fab fa-apple"></i>
                        </a>
                      </div>
                      <div className="white-button scroll-to-section">
                        <a href="#contact">
                          Free Quote <i className="fab fa-google-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="right-image wow fadeInRight"
                  // data-wow-duration="1s"
                  // data-wow-delay="0.5s"
                >
                  <img src={SliderDec} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
