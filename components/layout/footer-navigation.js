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
              {/* LOGO in Grid */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <Logo />
              </div>

              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="row clearfix">
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-widget">
                      <ul className="footer-list">
                        <li>
                          <Link href="/about">About Us</Link>
                        </li>
                        <li>
                          <Link href="/blog">Blog</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                    <div className="footer-widget contact-widget">
                      <ul className="footer-list">
                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="/terms-of-service">Terms of Service</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="auto-container">
            {/*Footer Column*/}
            <div className="center">
              <div className="footer-widget logo-widget">
                <div className="socialiconsfooter center">
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

                    <li className="google">
                      <a href="https://www.youtube.com/channel/UCzl3hTaEB3ds_IyRtJCr3kA">
                        <span className="fa fa-youtube" />
                      </a>
                    </li>
                  </ul>
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
