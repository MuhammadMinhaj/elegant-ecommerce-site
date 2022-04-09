import React from "react";
import TodaysFlashData from "../../../Data/TodaysFlashData/TodaysFlashData";
import SingleFlashDeals from "./SingleFlashDeals";
import "./FlashDeals.css";
const FlashDeals = () => {
  return (
    <>
      <div className="flash_deals_area my-2">
        <div className="container">
          <div className="flash_deals_inner">
            <div className="product_title_area">
              <div className="left_site_heading">
                <h6>Today's Flash Deals</h6>
              </div>
              <div className="right_site_link">
                <span>MORE DEALS</span>
                <i className="fas fa-chevron-circle-right text-danger ms-2"></i>
              </div>
            </div>
            <div className="row">
              {TodaysFlashData.slice(0, 6).map((singleProduct) => (
                <SingleFlashDeals
                  key={singleProduct.id}
                  singleProduct={singleProduct}
                ></SingleFlashDeals>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashDeals;
