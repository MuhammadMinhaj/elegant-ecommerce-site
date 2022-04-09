import React from "react";
import "./TOPslider.css";
import Slider1 from "../../../Images/shope_slider/shop_slider1.png";
import Slider2 from "../../../Images/shope_slider/shop_slider1.png";
import { Link } from "react-router-dom";

const TOPslider = () => {
  return (
    <div className="top_slider_full_area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <div className="inner_left_side_bar">
              <div className="side_menu_area">
                <ul>
                  <li>
                    <Link to="/">Men's Fashion</Link>
                  </li>
                  <li>
                    <Link to="/">Watches & Accessories</Link>
                  </li>
                  <li>
                    <Link to="/">Electronic Accessories</Link>
                  </li>
                  <li>
                    <Link to="/">Electronic Devices</Link>
                  </li>
                  <li>
                    <Link to="/">Health & Beauty</Link>
                  </li>
                  <li>
                    <Link to="/">Groceries & Pets</Link>
                  </li>
                  <li>
                    <Link to="/">Home & Lifestyle</Link>
                  </li>
                  <li>
                    <Link to="/">TV & Home Appliances</Link>
                  </li>
                  <li>
                    <Link to="/">Watches & Accessories</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12">
            <div className="inner_right_slider">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner slider_img">
                  <div className="carousel-item active">
                    <img src={Slider1} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={Slider1} className="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TOPslider;
