import React, { Component } from "react";
import Slider from "react-slick";

import ProductOne from "../assets/images/product-one.jpg";
import ProductTwo from "../assets/images/category-two.jpg";
import ProductThree from "../assets/images/category-three.jpg";
import ProductFour from "../assets/images/category-four.jpg";
import ProductFive from "../assets/images/category-five.jpg";
import ProductSix from "../assets/images/category-six.jpg";
import ProductSeven from "../assets/images/category-seven.jpg";

import Star from "@material-ui/icons/Star";
import StarHalf from "@material-ui/icons/StarHalf";
import HeartIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCart from "@material-ui/icons/AddShoppingCart";
import DetailLink from "@material-ui/icons/Link";

class FeaturedProduct extends Component {
  render(props) {
    const settings = {
      dots: true,
      nav: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="featured-list">
        <h2 className="featured-title"> {this.props.title} </h2>
        <Slider {...settings}>
          <div className="product-outer">
            <a className="product-top" href="/">
              <div className="product-image">
                <img src={ProductOne} alt="product-tile" />
                <div className="inner-wrapper">
                  <div className="discount-row">
                    <span className="discount">40% OFF</span>
                  </div>
                  <div className="button-list">
                    <button>
                      <HeartIcon />
                    </button>
                    <button>
                      <ShoppingCart />
                    </button>
                    <button>
                      <DetailLink />
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-quick-view">
                <p>Quickview</p>
              </div>
            </a>
            <div className="product-body">
              <h4 className="product-title">Black Grey Headset</h4>
              <div className="product-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <h3 className="product-price">$39.00</h3>
            </div>
          </div>

          <div className="product-outer">
            <a className="product-top" href="/">
              <div className="product-image">
                <img src={ProductTwo} alt="product-tile" />
                <div className="inner-wrapper">
                  <div className="discount-row">
                    <span className="discount">30% OFF</span>
                  </div>
                  <div className="button-list">
                    <button>
                      <HeartIcon />{" "}
                    </button>
                    <button>
                      <ShoppingCart />{" "}
                    </button>
                    <button>
                      <DetailLink />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-quick-view">
                <p>Quickview</p>
              </div>
            </a>
            <div className="product-body">
              <h4 className="product-title">Baseballl Bat</h4>
              <div className="product-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <h3 className="product-price">$39.00</h3>
            </div>
          </div>

          <div className="product-outer">
            <a className="product-top" href="/">
              <div className="product-image">
                <img src={ProductThree} alt="product-tile" />
                <div className="inner-wrapper">
                  <div className="discount-row">
                    <span className="discount">40% OFF</span>
                  </div>
                  <div className="button-list">
                    <button>
                      <HeartIcon />{" "}
                    </button>
                    <button>
                      <ShoppingCart />{" "}
                    </button>
                    <button>
                      <DetailLink />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-quick-view">
                <p>Quickview</p>
              </div>
            </a>
            <div className="product-body">
              <h4 className="product-title">Black Grey Headset</h4>
              <div className="product-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <h3 className="product-price">$39.00</h3>
            </div>
          </div>

          <div className="product-outer">
            <a className="product-top" href="/">
              <div className="product-image">
                <img src={ProductFour} alt="product-tile" />
                <div className="inner-wrapper">
                  <div className="button-list">
                    <button>
                      <HeartIcon />{" "}
                    </button>
                    <button>
                      <ShoppingCart />{" "}
                    </button>
                    <button>
                      <DetailLink />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-quick-view">
                <p>Quickview</p>
              </div>
            </a>
            <div className="product-body">
              <h4 className="product-title">Baseballl Bat</h4>
              <div className="product-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <h3 className="product-price">$39.00</h3>
            </div>
          </div>

          <div className="product-outer">
            <a className="product-top" href="/">
              <div className="product-image">
                <img src={ProductFive} alt="product-tile" />
                <div className="inner-wrapper">
                  <div className="discount-row">
                    <span className="discount">40% OFF</span>
                  </div>
                  <div className="button-list">
                    <button>
                      <HeartIcon />{" "}
                    </button>
                    <button>
                      <ShoppingCart />{" "}
                    </button>
                    <button>
                      <DetailLink />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-quick-view">
                <p>Quickview</p>
              </div>
            </a>
            <div className="product-body">
              <h4 className="product-title">Black Grey Headset</h4>
              <div className="product-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <h3 className="product-price">$39.00</h3>
            </div>
          </div>

          <div className="product-outer">
            <a className="product-top" href="/">
              <div className="product-image">
                <img src={ProductSix} alt="product-tile" />
                <div className="inner-wrapper">
                  <div className="button-list">
                    <button>
                      <HeartIcon />{" "}
                    </button>
                    <button>
                      <ShoppingCart />{" "}
                    </button>
                    <button>
                      <DetailLink />{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="product-quick-view">
                <p>Quickview</p>
              </div>
            </a>
            <div className="product-body">
              <h4 className="product-title">Baseballl Bat</h4>
              <div className="product-rating">
                <Star />
                <Star />
                <Star />
                <Star />
                <StarHalf />
              </div>
              <h3 className="product-price">$39.00</h3>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default FeaturedProduct;
