import React from "react";
import "./CountsBox.css";
import SingleCount from "../../CountUp/SingleCount";

const CountsBox = () => {
  return (
    <div className="counter_section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="count_inner">
              <i className="far fa-user"></i>

              <SingleCount counter={750} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="count_inner">
              <i className="fas fa-cart-plus"></i>
              <SingleCount counter={800} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="count_inner">
              <i className="fas fa-paperclip"></i>
              <SingleCount counter={900} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountsBox;
