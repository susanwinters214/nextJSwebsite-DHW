import Link from 'next/link';
import Image from "next/image";
import Logo from './logo';
import classes from './main-navigation.module.css';

function MainNavigation() {
  return (
    <header className="main-header header-style-one">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="auto-container clearfix">
          <Logo />
          <div className="nav-outer clearfix">
            {/*Mobile Navigation Toggler*/}
            <div className="mobile-nav-toggler">
              <span className="icon flaticon-menu" />
            </div>
            {/* Main Menu */}
            <nav className="main-menu navbar-expand-md">
              <div className="navbar-header">
                {/* Toggle Button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div
                className="navbar-collapse collapse clearfix"
                id="navbarSupportedContent"
              >
                <ul className="navigation clearfix">
                  <li className="dropdown">
                    <a href="/">Home Watch Services</a>
                    <ul>
                      <li>
                        <Link href="/homewatch-checklist">
                          Home Watch Check
                        </Link>
                      </li>
                      <li>
                        <Link href="/keyholder-services">
                          Key Holder Service
                        </Link>
                      </li>
                      <li>
                        <Link href="/vehicle-care">Vehicle Care</Link>
                      </li>
                      <li>
                        <Link href="/concierge-services">
                          Concierge Services
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Btn Box 
              <div className="btn-box">
                <a href="/contact" className="theme-btn btn-style-one">
                  <span className="txt">Contact US</span>
                </a>
              </div>
              {/* Phone Box */}
              <div className="phone-box">
                <div className="box-inner">
                  <span className="icon flaticon-smartphone-1" />
                  Call US Today!
                  <strong>
                    <a className="phoneNumberLink" href="tel:972-982-7050">972-982-7050</a>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}

      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon flaticon-multiply" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img
                src="images/Dallas-Home-Watch-Logo.png"
                alt="Dallas Home Watch logo"
                title="Dallas Home Watch logo"
              />
            </Link>
            <span style={{ fontWeight: "bold" }}>Dallas Home Watch</span>
            <br />
            <div className="menu-mobile">
              <hr />
              <Link className="mobile-link" href="/homewatch-checklist">
                HomeWatch Checklist
              </Link>
              <br />
              <Link className="mobile-link" href="/keyholder-services">
                Key Holder Services
              </Link>
              <br />
              <Link className="mobile-link" href="/concierge-services">
                Concierge Services
              </Link>
              <br />
              <Link className="mobile-link" href="/vehicle-care">
                Vehicle Care
              </Link>
              <hr />
              <Link className="mobile-link" href="/about">
                About
              </Link>
              <br />
              <Link className="mobile-link" href="/contact">
                Contact
              </Link>
              <br />
              <Link className="mobile-link" href="/news">
                News
              </Link>
              <br />
              <Link className="mobile-link" href="/accreditation">
                Accreditation
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
    </header>
  );
}

export default MainNavigation;
