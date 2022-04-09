import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Container, Row, Col, Dropdown, Navbar, Nav } from "react-bootstrap";
import Dropd from "react-dropd";
import "../assets/css/MainMenu.css";
import MenuIcon from "@material-ui/icons/MenuOutlined";
import PersonIcon from "@material-ui/icons/PersonOutlined";
import HeartIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";
import ArrowUp from "@material-ui/icons/ArrowUpward";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Shop from "../Pages/Shop/Shop";
import ViewProjectDetails from "../Pages/ViewProjectDetails/ViewProjectDetails";
import CategoriesDetails from "../Pages/CategoriesDetails/CategoriesDetails";
// import { NavHashLink } from "react-router-hash-link";
import ScrollToTop from "../Pages/CountUp/ScrollToTop";
import CheckOut from "../Pages/CheckOut/CheckOut";
import MyAccount from "../Pages/MyAccount/MyAccount";
import UserAccountSetting from "../Pages/UserAccountSetting/UserAccountSetting";
import MyOrder from "../Pages/MyOrder/MyOrder";
let navbar, sticky;
let parent,
  scroll = 450;
export class MainMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollTop: false,
    };
  }

  componentDidMount() {
    navbar = document.getElementById("main-navbar");
    sticky = navbar.offsetTop;

    // parent = document.getElementById("scroll-top");
    // scroll = parent.offsetTop;

    window.addEventListener("scroll", this.handleSticky);
    window.addEventListener("scroll", this.handleScrollTop);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleSticky);
    window.removeEventListener("scroll", this.handleScrollTop);
  }

  handleSticky = () => {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("navbar-sticky");
    }
  };

  handleScrollTop = () => {
    if (window.pageYOffset > scroll) {
      this.setState({
        scrollTop: true,
      });
    } else {
      this.setState({
        scrollTop: false,
      });
    }
  };

  render() {
    let toggleScroll = this.state.scrollTop ? <ScrollTop /> : "";
    return (
      <>
        <Router>
          <ScrollToTop />

          <div className="main-menu" id="main-navbar">
            <Container>
              <Row>
                <Col md={3}>
                  <div className="category-wrapper">
                    {/* <a className="dropdown" href="#"> 
                                    <span className="icon"><MenuIcon /></span>
                                    {/* <span className='label'>Shop By</span>
                                    <label>Categories</label> 
                                    <div className="dropdown-menu">
                                        
                                    </div> 
                                </a> */}
                    <span className="icon">
                      <MenuIcon />
                    </span>
                    <Dropd
                      placeholder="Select Category"
                      onOpen={(list, event) => console.log(list, event)}
                      list={["Caramel", "Peanut butter", "Sundae", "Oreos"]}
                    />
                  </div>
                </Col>
                <Col md={9}>
                  <Navbar collapseOnSelect expand="lg">
                    <Row>
                      <Col md="12">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                          <Nav className="navbar-main">
                            <ul className="nav">
                              <li>
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/"
                                >
                                  <i className="fa fa-home"></i> Home
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/shop"
                                >
                                  <i className="fa fa-dollar"></i> Shop
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/credit-manager"
                                >
                                  <i className="fa fa-credit-card"></i> B2B
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/identity-protector"
                                >
                                  <i className="fa fa-shield"></i> Recent
                                  Products
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/identity-protector"
                                >
                                  <i className="fa fa-shield"></i> Blog
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/identity-protector"
                                >
                                  <i className="fa fa-shield"></i> Contact Us
                                </Nav.Link>
                              </li>
                              <li>
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/credit-card"
                                >
                                  <i className="fa fa-tachometer"></i> Rate
                                  Compare
                                </Nav.Link>
                              </li>
                            </ul>

                            <ul className="nav nav-right">
                              <li className="sticky-show">
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/wishlist"
                                >
                                  <HeartIcon />
                                </Nav.Link>
                              </li>
                              <li className="sticky-show">
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/login"
                                >
                                  <PersonIcon />
                                </Nav.Link>
                              </li>
                              <li className="sticky-show cart-item">
                                <Nav.Link
                                  as={NavLink}
                                  exact
                                  activeClassName="active"
                                  to="/cart"
                                >
                                  <ShoppingCart />
                                  <span className="item-count">5</span>
                                </Nav.Link>
                              </li>
                            </ul>
                          </Nav>
                        </Navbar.Collapse>
                      </Col>
                    </Row>
                  </Navbar>
                </Col>
              </Row>
              {/* show/hide scroll top Top */}
              {toggleScroll}
            </Container>
          </div>
          <div className="inner-content">
            <Route exact path="/" component={Home} />
            <Route
              path="/view_project_details/:id"
              component={ViewProjectDetails}
            />
            <Route path="/CategoriesDetails" component={CategoriesDetails} />
            <Route path="/checkout" component={CheckOut} />
            <Route path="/my_account" component={MyAccount} />
            <Route path="/my_order" component={MyOrder} />
            <Route path="/setting" component={UserAccountSetting} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home-purchaser" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/identity-protector" component={Home} />
          </div>
        </Router>
      </>
    );
  }
}

const ScrollTop = () => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="scroll-top" id="scroll-top">
      <button onClick={scrollUp}>
        <ArrowUp />
      </button>
    </div>
  );
};

export default MainMenu;
