import React from "react";
import "./DiscountAllProduct.css";

const DiscountAllProduct = () => {
  return (
    <div className="discount_all_product py-2 my-3">
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-6">
            <div className="discount_all_inner_left">
              <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-link-business-kiranshastry-gradient-kiranshastry.png" />
              <div className="ps-3">
                <h5>Learn how to get a 30% discount on all products.</h5>
                <p>
                  Senectus ullamcorper lacus a euismod vestibulum habitasse.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="discount_all_inner_right text-end">
              <p>Follow us</p>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-instagram"></i>
              {/* <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-pinterest-p"></i>
              <i className="far fa-envelope"></i>
              <i className="fab fa-google"></i> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountAllProduct;
