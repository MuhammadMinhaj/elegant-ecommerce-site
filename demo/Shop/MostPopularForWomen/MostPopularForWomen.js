import React from "react";
import "./MostPopularForWomen.css";
import MostPopularForWomen_img from "../../../Images/MostPopularForMan/MostPopularForWomen.jpg";
import { Link } from "react-router-dom";
import MostPopularForWomenData from "../../../Data/MostPopularForWomenData/MostPopularForWomenData";

const MostPopularForWomen = () => {
  return (
    <div>
      <div className="MostPopularForWomen_full_area MostPopularForMan_full_area">
        <div className="container">
          <div className="MostPopularForWomen_inner_area MostPopularForMan_inner_area">
            <h4>MOST POPULAR FOR WOMEN</h4>
            <div className="row">
              <div className="col-lg-4">
                <div className="MostPopularForWomen_left_area MostPopularForMan_left_area">
                  <img src={MostPopularForWomen_img} alt="" />
                  <div className="MostPopularForWomen_left_inner MostPopularForMan_left_inner">
                    <h5>Discount On Summer Collection</h5>
                    <Link to="/">READ MORE</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="MostPopularForWomen_right_area MostPopularForMan_right_area">
                  {/* <h3>product MostPopularForWomen</h3> */}
                  <div className="row">
                    {MostPopularForWomenData.map((item) => (
                      <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="inner_product_women inner_product_for_man">
                          <div item={item?.id}>
                            <img src={item?.img} alt="" />
                            <p className="discount">{item?.discount}</p>
                            <p>{item?.name}</p>
                            <p className="quality_text">{item?.quality}</p>
                            <p className="women_product_price man_product_price">
                              ${item?.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPopularForWomen;
