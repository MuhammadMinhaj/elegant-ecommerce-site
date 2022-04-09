import React from "react";
import "./DiscountOffer.css";
import DiscountData from "../../../Data/DiscountData/DiscountData";
import { Link } from "react-router-dom";
const DiscountOffer = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {DiscountData.map((item) => (
            <div item={item?.id} className="col-lg-3">
              <div className="discount_offer_inner">
                <img src={item?.img} alt="" />
                <div className="discount_offer_text">
                  <h5>{item?.name}</h5>
                  <Link to="/">view more</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscountOffer;
