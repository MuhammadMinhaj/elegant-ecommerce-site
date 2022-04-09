import {
  ArrowUpward as ArrowUp,
  FavoriteBorderOutlined as HeartIcon,
  MenuOutlined as MenuIcon,
  PersonOutlined as PersonIcon,
  ShoppingCart
} from '@mui/icons-material';
import React, { Component } from 'react';
import {
  Col, Container, Nav, Navbar, Row
} from 'react-bootstrap';
import Dropd from 'react-dropd';
import NavItem from './NavItem';

let navbar;
let sticky;
const scroll = 450;

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: false
    };
  }

  componentDidMount() {
    navbar = document.getElementById('main-navbar');
    sticky = navbar.offsetTop;

    window.addEventListener('scroll', this.handleSticky);
    window.addEventListener('scroll', this.handleScrollTop);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleSticky);
    window.removeEventListener('scroll', this.handleScrollTop);
  }

  handleSticky = () => {
    if (window.pageYOffset > sticky) {
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('navbar-sticky');
    }
  };

  handleScrollTop = () => {
    if (window.pageYOffset > scroll) {
      this.setState({
        scrollTop: true
      });
    } else {
      this.setState({
        scrollTop: false
      });
    }
  };

  render() {
    const { scrollTop } = this.state;
    const toggleScroll = scrollTop ? <ScrollTop /> : '';
    return (

      <div className="main-menu" id="main-navbar">
        <Container>
          <Row>
            <Col md={3}>
              <div className="category-wrapper">
                <span className="icon">
                  <MenuIcon />
                </span>
                <Dropd
                  placeholder="Select Category"
                  onOpen={(list, event) => console.log(list, event)}
                  list={['Caramel', 'Peanut butter', 'Sundae', 'Oreos']}
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
                          <NavItem path="/" name="Home" iconName="fa fa-home" />
                          <NavItem path="/shop" name="Shop" iconName="fa fa-dollar" />
                          <NavItem path="/credit-manager" name="B2B" iconName="fa fa-credit-card" />
                          <NavItem path="/identity-protector" name=" Recent Products" iconName="fa fa-shield" />
                          <NavItem path="/identity-protector" name="Blog" iconName="fa fa-shield" />
                          <NavItem path="/identity-protector" name="Contact Us" iconName="fa fa-shield" />
                          <NavItem path="/credit-card" name=" Rate Compare" iconName="fa fa-tachometer" />
                          <NavItem path="/identity-protector" name="Blog" iconName="fa fa-shield" />
                          <NavItem path="/identity-protector" name="Blog" iconName="fa fa-shield" />
                        </ul>

                        <ul className="nav nav-right">
                          <li className="sticky-show">
                            <a
                              href="/wishlist"
                            >
                              <HeartIcon />
                            </a>
                          </li>
                          <li className="sticky-show">
                            <a
                              href="/login"
                            >
                              <PersonIcon />
                            </a>
                          </li>
                          <li className="sticky-show cart-item">
                            <a
                              href="/cart"
                            >
                              <ShoppingCart />
                              <span className="item-count">5</span>
                            </a>
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

    );
  }
}

function ScrollTop() {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="scroll-top" id="scroll-top">
      <button type="button" onClick={scrollUp}>
        <ArrowUp />
      </button>
    </div>
  );
}

export default MainMenu;
