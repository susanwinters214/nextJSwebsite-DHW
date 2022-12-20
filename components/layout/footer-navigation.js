import Link from 'next/link';
import Logo from './logo';
import classes from './footer-navigation.module.css';

function FooterNavigation() {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        {/* Widgets Section */}
        <div className="widgets-section">
          {/* Scroll To Top - removed */}

          <div className="row clearfix">
            {/* LOGO in Grid */}
            <div className="big-column col-lg-4 col-md-4 col-sm-12">
              <Logo />
            </div>

            {/* social media icons */}
            <div className="footer-column col-lg-4 col-md-4 col-sm-12">
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
                    <li className="facebook">
                      <a href="https://www.facebook.com/profile.php?id=100083133612372">
                        <span className="fa fa-facebook" />
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

            <div className="footer-column col-lg-4 col-md-4 col-sm-12">
              <ul className="footer-list">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              
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

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright">
            ©Copyright 2022, Dallas Home Watch LLC. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterNavigation;
