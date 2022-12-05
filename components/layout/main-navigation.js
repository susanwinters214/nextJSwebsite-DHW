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
          <div className="pull-left logo-box">
            <div className="logo">
              <a href="/">
                <img
                  src="/images/Dallas-Home-Watch-Logo.png"
                  alt="Dallas Home Watch"
                  title="Dallas Home Watch"
                />
                <div style={{ float: "right",  color: "white", fontSize: "2em", fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}>
                  Dallas Home Watch
                  <br />
                 
                  <span
                    style={{ color: "white",   marginTop:-10,                   
                      fontSize: ".5em",
                      fontFamily:
                        '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                    }}
                  >
                    Home Watch Services in Dallas, Texas
                  </span>
                </div>
              </a>
              <br />
             
            </div>
          </div>
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
                        <a href="/homewatch-checklist">Home Watch Check</a>
                      </li>
                      <li>
                        <a href="/keyholder-services">Key Holder Service</a>
                      </li>
                      <li>
                        <a href="/vehicle-care">Vehicle Care</a>
                      </li>
                      <li>
                        <a href="/concierge-services">Concierge Services</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            {/* Main Menu End*/}
            <div className="outer-box clearfix">
              {/* Btn Box */}
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
                    <a href="“tel:972-982-7050”">972-982-7050</a>
                  </strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}

      {/* Sticky Header WAS HERE */}

      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <span className="icon flaticon-multiply" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <a href="/">
              <img
                src="images/Dallas-Home-Watch-Logo.png"
                alt="Dallas Home Watch logo"
                title="Dallas Home Watch logo"
              />
            </a>
            <span style={{ fontWeight: "bold" }}>Dallas Home Watch</span>
            <br />
            <div className="menu-mobile">
              <hr />
              <a className="mobile-link" href="/homewatch-checklist">
                HomeWatch Checklist
              </a>
              <br />
              <a className="mobile-link" href="/keyholder-services">
                Key Holder Services
              </a>
              <br />
              <a className="mobile-link" href="/concierge-services">
                Concierge Services
              </a>
              <br />
              <a className="mobile-link" href="/vehicle-care">
                Vehicle Care
              </a>
              <hr />
              <a className="mobile-link" href="/about">
                About
              </a>
              <br />
              <a className="mobile-link" href="/contact">
                Contact
              </a>
              <br />
              <a className="mobile-link" href="/news">
                News
              </a>
              <br />
              <a className="mobile-link" href="/accreditation">
                Accreditation
              </a>
            </div>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}





    </header>
  );
}

export default MainNavigation;
