import {
  FavoriteBorderOutlined as HeartIcon,
  MenuOutlined as MenuIcon,
  PersonOutlined as PersonIcon,
  Search as SearchIcon,
  ShoppingCartOutlined as ShoppingCart
} from '@mui/icons-material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dropd from 'react-dropd';

function TopMenu() {
  return (
    <>
      <div className="top-bar" id="top-bar">
        <div className="top_menu_bar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4">
                <div className="time">
                  <span>Monday-Fiday: 9 AM - 12 AM</span>
                  <span>Become a Seller</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-center">
                  <span>TRENDY 25SILVER JEWELRY, SAVE UP 35% OFF TODAY</span>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text-lg-end">
                  <span>+00 54 983498543 </span>
                  <span>info@gmail.com</span>
                  <div className="dropdown d-inline">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      English
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          French
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Italian
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Portogease
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="dropdown d-inline">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USD
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          C🛎
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          EU
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          RS
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-bar">
        <div className="container" />
      </div>
      <div className="middle-bar">
        <Container className="st-container text-sm-center">
          <Row>
            <Col sm={12} xl={3} className="py-2">
              <img src="/images/site-logo.png" className="site-logo" alt="site-logo" />
            </Col>
            <Col sm={12} xl={6}>
              <div className="dropdown-wrapper py-2">
                <div className="dropdown-flex-inner">
                  <div className="select-group">
                    <Dropd
                      placeholder="Select Category"
                      onOpen={(list, event) => console.log(list, event)}
                      list={[
                        'Electronics',
                        'Smartphones',
                        'Watches',
                        'Sports'
                      ]}
                    />
                    <select name="" id="" className="form-control">
                      <option>Select</option>
                      <option>Accesories</option>
                      <option>Sports</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <input type="text" className="form-control" />
                    <button type="button" className="btn btn-search">
                      <SearchIcon />
                      {' '}
                      <span>Search</span>
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={12} xl={3}>
              <div className="right-icon-wrapper py-2">
                <div className="icon-flex-wrapper">
                  <div className="icon-box ">
                    <HeartIcon />
                  </div>
                  <div className="icon-box">
                    <a href="/checkout" className="nav-link">
                      <ShoppingCart />
                    </a>
                  </div>

                  <div className="icon-box">
                    <a href="/login" className="nav-link">
                      <PersonIcon />
                    </a>
                  </div>
                  <div className="icon-box">
                    <MenuIcon />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TopMenu;
