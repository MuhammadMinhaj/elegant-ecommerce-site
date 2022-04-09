import {
  AccessAlarm as AccessAlarmIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
  Headphones as HeadphonesIcon,
  Instagram as InstagramIcon,
  LinkedIn as LinkedInIcon, LocationOn as LocationOnIcon, Send as Plane,
  Twitter as TwitterIcon
} from '@mui/icons-material';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-upper">
        <Container>
          <div className="row">
            <div className="col-lg-5">
              <div className="footer-column">
                <h3 className="footer-title">Contact Info</h3>
                <p className="pt-4">
                  We are always available for you to pass & get back on the
                  right track.
                </p>

                <div className="contact-item row">
                  <div className="contact-icon col-2">
                    <p>
                      <LocationOnIcon />
                    </p>
                  </div>
                  <div className="contact-detail col-10">
                    <p>Block # 13, Rowsten street west hampshire South Wales</p>
                  </div>
                </div>

                <div className="contact-item row">
                  <div className="contact-icon col-2">
                    <p>
                      <EmailIcon />
                    </p>
                  </div>
                  <div className="contact-detail col-10">
                    <p>Tell Us The Reason For Your Query</p>
                    <p>admin@intellwink.com</p>
                  </div>
                </div>

                <div className="contact-item row">
                  <div className="contact-icon col-2">
                    <p>
                      <AccessAlarmIcon />
                    </p>
                  </div>
                  <div className="contact-detail col-10">
                    <p>Monday To Satarday : 8am - 6pm.</p>
                    <p>Sunaday Closed</p>
                  </div>
                </div>

                <div className="contact-item item-lg row">
                  <div className="contact-icon col-3">
                    <p>
                      <HeadphonesIcon />
                    </p>
                  </div>
                  <div className="contact-detail col-9">
                    <h3>+92-343-123-4786</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="footer-column">
                <h3 className="footer-title">Quicklinks</h3>
                <p className="pt-4">Find out our other exicting items</p>

                <ul className="nav row useful-links">
                  <li className="col-6">
                    <a href="/">Make Profit</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Terms & Conditions</a>
                  </li>
                  <li className="col-6">
                    <a href="/">FAQs</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Our Partners</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Achievements</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Privacy Policy</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Terms & Conditions</a>
                  </li>
                  <li className="col-6">
                    <a href="/">FAQs</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Our Partners</a>
                  </li>
                  <li className="col-6">
                    <a href="/">Achievements</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footer-column">
                <h3 className="footer-title">Newsletter</h3>
                <p className="pt-4">
                  Subscribe to our newsletter to receive latest news &
                  notification on our services.
                </p>

                <div className="newsletter-box">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                    <button type="button" className="input-group-append">
                      <div className="input-group-text">
                        <Plane />
                      </div>
                    </button>
                  </div>
                </div>
                <div className="social-box">
                  <p className="pt-4">Follow us On Social Media</p>
                  <ul className="nav">
                    <li>
                      <a href="/">
                        <FacebookIcon />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <TwitterIcon />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <InstagramIcon />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <LinkedInIcon />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <p>All Rights Reserved. Copyright © 2021 Developer by INTELWINK</p>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
