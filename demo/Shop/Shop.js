import React from "react";
import "./Shop.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper";

// import offer2 from "../../Images/Offer_IMG/offer2.png";
// import offer3 from "../../Images/Offer_IMG/offer3.png";
// import offer4 from "../../Images/Offer_IMG/offer4.png";

import CategoriesData from "../../Data/CategoriesData/CategoriesData";
import FlashDeals from "./FlashDeals/FlashDeals";
import MostPopularForMan from "./MostPopularForMan/MostPopularForMan";
import ElectronicCategory from "./ElectronicCategory/ElectronicCategory";
import DiscountOffer from "./DiscountOffer/DiscountOffer";
import MostPopularForWomen from "./MostPopularForWomen/MostPopularForWomen";
import DiscountAllProduct from "./DiscountAllProduct/DiscountAllProduct";
import DiscountOffer2 from "./DiscountOffer2/DiscountOffer2";
import BuildingTols from "./BuildingTols/BuildingTols";
import { HashLink } from "react-router-hash-link";
import CountsBox from "./CountsBox/CountsBox";
import TOPslider from "./TOPslider/TOPslider";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <>
      {/* top slider  */}
      <TOPslider />
      {/* shop_slider_section */}
      {/* <section className="shop_slider_section">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay, Pagination, Pagination]}
        >
          <SwiperSlide>
            <div className="shop_slider_bg">
              <div className="container">
                <h2>
                  fashion <span>shop</span>
                </h2>
                <h5>2022 popular top products</h5>
                <h3>Ready-to-ship products</h3>
                <div className="row">
                  <div className="col-lg-4">
                    <ul>
                      <li>Our Hot Products</li>
                      <li>Customized products</li>
                      <li>Buy Now Shipping Next Day</li>
                    </ul>
                  </div>
                  <div className="col-lg-3 text-end">
                    <div className="shop_btn">
                      <button>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_slider_bg">
              <div className="container">
                <h2>
                  fashion <span>shop</span>
                </h2>
                <h5>2022 popular top products</h5>
                <h3>Ready-to-ship products</h3>
                <div className="row">
                  <div className="col-lg-4">
                    <ul>
                      <li>Our Hot Products</li>
                      <li>Customized products</li>
                      <li>Buy Now Shipping Next Day</li>
                    </ul>
                  </div>
                  <div className="col-lg-3 text-end">
                    <div className="shop_btn">
                      <button>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="shop_slider_bg">
              <div className="container">
                <h2>
                  fashion <span>shop</span>
                </h2>
                <h5>2022 popular top products</h5>
                <h3>Ready-to-ship products</h3>
                <div className="row">
                  <div className="col-lg-4">
                    <ul>
                      <li>Our Hot Products</li>
                      <li>Customized products</li>
                      <li>Buy Now Shipping Next Day</li>
                    </ul>
                  </div>
                  <div className="col-lg-3 text-end">
                    <div className="shop_btn">
                      <button>Shop Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section> */}
      {/* categories section  */}
      <section className="categories_section_full">
        <div className="container  text-center">
          <h3>Categories See all</h3>
        </div>
        <div className="categories_section">
          {CategoriesData.map((item) => (
            <div key={item.id} className="categories_Inner_section text-center">
              <Link to="/CategoriesDetails">
                <div className="inner_items_categories">
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                  <h6>{item.items} items</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* today flash details  */}
      <section className="flash_deals_section">
        <FlashDeals />
      </section>

      {/* counter section  */}

      {/* <section>
        <CountsBox />
      </section> */}
      {/* MostPopularForMan  */}
      <section className="MostPopularForMan">
        <MostPopularForMan />
      </section>

      {/* MostPopularForWomen  */}
      <section>
        <MostPopularForWomen />
      </section>

      {/* ElectronicCategory  */}
      <section>
        <ElectronicCategory />
      </section>

      {/* DiscountOffer  */}
      <section>
        <DiscountOffer />
      </section>

      {/* DiscountAllProduct  */}
      <section>
        <DiscountAllProduct />
      </section>

      {/* DiscountOffer2  */}
      <section>
        <DiscountOffer2 />
      </section>

      {/* BuildingTols  */}
      <section>
        <BuildingTols />
      </section>
    </>
  );
};

export default Shop;
