import Link from 'next/link';
import Logo from './logo';
import classes from './footer-navigation.module.css';

function FooterNavigation() {
  return (
    <>
      <footer className="main-footer">
        <div className="auto-container">
          {/* Widgets Section */}
          <div className="widgets-section">
            {/* Scroll To Top - removed */}

            <div className="row clearfix">
              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-7 col-md-6 col-sm-12">
                    <div className="footer-widget logo-widget">
                      <Logo />

                      <br />
                      {/* Social Nav */}
                      <ul className="social-nav">
                        <li className="linkedin">
                          <a href="https://www.linkedin.com/company/dallas-home-watch/">
                            <span className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="google">
                          <a href="https://g.page/r/CTJlJWOvqHOnEAI/review">
                            <span className="fa fa-google" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*Footer Column*/}
                  <div className="footer-column col-lg-5 col-md-6 col-sm-12">
                    <div className="footer-widget links-widget"></div>
                  </div>
                </div>
              </div>
              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  {/* Footer Column */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-widget">
                      <ul className="footer-list">
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="/contact">Contact Us</a>
                        </li>
                        <li>
                          <a href="/news">News</a>
                        </li>
                        <li>
                          <a href="/blog">Blog</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Footer Column */}
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-widget">
                      <ul>
                        <ul className="footer-list">
                          <li>
                            <a href="/accreditation">Accreditation</a>
                          </li>
                          <li>
                            <a href="/privacy-policy">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="/terms-of-service">Terms of Service</a>
                          </li>
                        </ul>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright">
              ©Copyright 2022, Dallas Home Watch LLC. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterNavigation;
