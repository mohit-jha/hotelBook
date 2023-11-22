import React from "react";
import Payments from "./Payments";
const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="top_container">
          <div className="fc_logo">
            <img
              src="https://booking.webestica.com/assets/images/logo-light.svg" // Replace with the actual path to your logo
              alt="Logo"
            />
            <p>
              Departure defective arranging rapturous did believe him all had
              supported.
            </p>
            <ul>
              <li>+1234 568 963</li>
              <li>example@gmail.com</li>
            </ul>
          </div>
          <div className="fc_right">
            <div className="footer-links">
              <h4>Page</h4>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>News and Blog</li>
                <li>Meet a Team</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Link</h4>
              <ul>
                <li>Sign up</li>
                <li>Sign in</li>
                <li>Privacy Policy</li>
                <li>Terms</li>
                <li>Cookie</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Global Site</h4>
              <ul>
                <li>India</li>
                <li>California</li>
                <li>Indonesia</li>
                <li>Canada</li>
                <li>Malaysia</li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Booking</h4>
              <ul>
                <li>Hotel</li>
                <li>Flight</li>
                <li>Tour</li>
                <li>Cabs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="top_links">
          <div className="footer-column">
            <h4>Top Links</h4>
            <ul>
              <li className="nav_link">Flights</li>
              <li className="nav_link">Hotels</li>
              <li className="nav_link">Tours</li>
              <li className="nav_link">Cabs</li>
              <li className="nav_link">About</li>
              <li className="nav_link">Contact us</li>
              <li className="nav_link">Blogs</li>
              <li className="nav_link">Services</li>
              <li className="nav_link">Detail page</li>
              <li className="nav_link">Services Policy</li>
              <li className="nav_link">Testimonials</li>
              <li className="nav_link">Newsletters</li>
              <li className="nav_link">Podcasts</li>
              <li className="nav_link">Protests</li>
              <li className="nav_link">NewsCyber</li>
              <li className="nav_link">Education</li>
              <li className="nav_link">Sports</li>
              <li className="nav_link">Tech and Auto</li>
              <li className="nav_link">Opinion</li>
              <li className="nav_link">Share Market</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment_social_wrapper">
          <div className="left">
            <Payments />
          </div>
          <div className="right">
            <div className="social-media">
              <p>Follow us on</p>

              <ul className="list-inline mb-0 mt-3">
                <li className="fb">
                  {" "}
                  <a className="btn btn-sm px-2 bg-facebook mb-0" href="#">
                    <i className="fab fa-fw fa-facebook-f"></i>
                  </a>{" "}
                </li>
                <li className="ig">
                  {" "}
                  <a
                    className="btn btn-sm shadow px-2 bg-instagram mb-0"
                    href="#"
                  >
                    <i className="fab fa-fw fa-instagram"></i>
                  </a>{" "}
                </li>
                <li className="tw">
                  {" "}
                  <a
                    className="btn btn-sm shadow px-2 bg-twitter mb-0"
                    href="#"
                  >
                    <i className="fab fa-fw fa-twitter"></i>
                  </a>{" "}
                </li>
                <li className="li">
                  {" "}
                  <a
                    className="btn btn-sm shadow px-2 bg-linkedin mb-0"
                    href="#"
                  >
                    <i className="fab fa-fw fa-linkedin-in"></i>
                  </a>{" "}
                </li>
              </ul>
              {/* Add your social media icons and links here */}
            </div>
            </div>
          </div>
            <div className="copy_write_wrapper">
              <div className="copyright">
                <p>Copyrights ©2023 Booking. Build by Webestica.</p>
              </div>
              <div className="legal-links">
                <p>Privacy policy</p>
                <p>Terms and conditions</p>
                <p>Refund policy</p>
              </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
