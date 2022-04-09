import React from "react";
import "./BuildingTols.css";

import building_img from "../../../Images/MostPopularForMan/building_tols.jpg";
import { Link } from "react-router-dom";
import BuildingToolsData from "../../../Data/BuildingToolsData/BuildingToolsData";

const BuildingTols = () => {
  return (
    <div className="py-3 my-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="MostPopularForMan_left_area">
              <img src={building_img} alt="" />
              <div className="building_left_inner MostPopularForMan_left_inner">
                <h5>Building Tools And Accessories</h5>
                <Link to="/">READ MORE</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            {/* filtering categories   */}
            <section>
              <div className="container">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="nav-link active"
                      id="nav-home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-home"
                      type="button"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      New
                    </button>
                    <button
                      className="nav-link"
                      id="nav-profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-profile"
                      type="button"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      Featured
                    </button>
                    <button
                      className="nav-link"
                      id="nav-contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-contact"
                      type="button"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Top Sellers
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="row">
                      {BuildingToolsData.map((item) => (
                        <div item={item?.id} className="col-lg-3">
                          <div className="build_tools_inner">
                            <img src={item?.img} alt="" />
                            <p>{item?.name}</p>
                            <p>{item?.brand}</p>
                            <p>${item?.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-profile"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    <div className="row">
                      {BuildingToolsData.map((item) => (
                        <div item={item?.id} className="col-lg-3">
                          <div className="build_tools_inner">
                            <img src={item?.img} alt="" />
                            <p>{item?.name}</p>
                            <p>{item?.brand}</p>
                            <p>${item?.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-contact"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    <div className="row">
                      {BuildingToolsData.map((item) => (
                        <div item={item?.id} className="col-lg-3">
                          <div className="build_tools_inner">
                            <img src={item?.img} alt="" />
                            <p>{item?.name}</p>
                            <p>{item?.brand}</p>
                            <p>${item?.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingTols;
