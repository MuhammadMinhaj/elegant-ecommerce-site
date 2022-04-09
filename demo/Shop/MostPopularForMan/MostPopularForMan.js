import React from "react";
import "./MostPopularForMan.css";
import MostPopularForMan_img from "../../../Images/MostPopularForMan/MostPopularForMan.jpg";
import { Link } from "react-router-dom";
import MostPopularForManData from "../../../Data/MostPopularForManData/MostPopularForManData";

const MostPopularForMan = () => {
  return (
    <div className="MostPopularForMan_full_area">
      <div className="container">
        <div className="MostPopularForMan_inner_area">
          <h4>MOST POPULAR FOR MAN</h4>
          <div className="row">
            <div className="col-lg-4">
              <div className="MostPopularForMan_left_area">
                <img src={MostPopularForMan_img} alt="" />
                <div className="MostPopularForMan_left_inner">
                  <h5>All Product Discount - 30%</h5>
                  <Link to="/">READ MORE</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="MostPopularForMan_right_area">
                {/* <h3>product MostPopularForMan</h3> */}
                <div className="row">
                  {MostPopularForManData.map((item) => (
                    <div item={item.id} className="col-lg-3 col-md-4 col-sm-6">
                      <div className="inner_product_for_man">
                        <div item={item?.id}>
                          <img src={item?.img} alt="" />
                          <p className="discount">{item?.discount}</p>
                          <p>{item?.name}</p>
                          <p className="quality_text">{item?.quality}</p>
                          <p className="man_product_price">${item?.price}</p>
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
  );
};

export default MostPopularForMan;
