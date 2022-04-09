import FacebookIcon from '@material-ui/icons/Facebook';
import LockIcon from '@material-ui/icons/LockOpen';
import EmailIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import { default as GoogleIcon, default as TwitterIcon } from '@material-ui/icons/Twitter';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../assets/css/Account.css';

function Login() {
  return (
    <div className="account-wrapper">
      <div className="breadcrumb-holder">
        <div className="breadcrumb-caption">
          <h2>Login</h2>
          <ul>
            <li className="breadcrumb-item">
              <a href="/" className="breadcrumb-link">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <span>Login</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="account-content">
        <Row className="flex-row">
          <Col sm={6}>
            <div className="account-inner">
              <div className="section-title">
                <div className="title-upper">
                  <h3 className="account-heading">Login Now</h3>
                  <div className="separator" />
                </div>
              </div>

              <form className="account-form">
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter Your Name"
                  />
                  <span className="icon">
                    <PersonIcon />
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Email Address"
                  />
                  <span className="icon">
                    <EmailIcon />
                  </span>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Password"
                  />
                  <span className="icon">
                    <LockIcon />
                  </span>
                </div>
                <div className="form-bottom">
                  <div className="action">
                    <button className="btn btn-login">
                      <span className="text">Login Now</span>
                    </button>
                  </div>
                  <div className="login-social">
                    <span>Or login with</span>
                    <ul className="nav social-nav">
                      <li>
                        <a className="facebook" href="/">
                          <FacebookIcon />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="/">
                          <TwitterIcon />
                        </a>
                      </li>
                      <li>
                        <a className="google" href="/">
                          <GoogleIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="form-footer">
                  <p>
                    Be our valuable member !
                    {' '}
                    <a href="/register">Sign Up</a>
                  </p>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Login;
