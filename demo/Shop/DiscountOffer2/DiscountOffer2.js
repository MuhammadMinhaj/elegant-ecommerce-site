import React from "react";
import "./DiscountOffer2.css";
import DiscountData2 from "../../../Data/DiscountData/DiscountData2";
import { Link } from "react-router-dom";
const DiscountOffer2 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {DiscountData2.map((item) => (
            <div item={item?.id} className="col-lg-4">
              <div className="discount_offer_inner" id="discount_offer_inner">
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

export default DiscountOffer2;
