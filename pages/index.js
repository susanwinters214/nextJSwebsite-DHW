import { Fragment } from 'react';
import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from '../lib/posts-util';



function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch</title>
        <meta
          name="description"
          content="Dallas Home Watch is company that provides professional Home Watch Services for home owners in Dallas. Home Watch professionals perform a visual inspection of your home while you are away and alert you of any concerns about the conditions of the real estate."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="banner-section">
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

        <div className="main-slider-carousel owl-carousel owl-theme">
          {/*TOP BANNER*/}
          <div
            className="slide pageback-homepage"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
          >
            {/* insert HomePage content upTop */}
            <div className="homebanner-section">
              {/* Content Column */}
              <div className="content-column">
                <div className="inner-column">
                  <div className="auto-container">
                    <div className="inner-container">
                      <div className="row clearfix">
                        {/* Services Block HOME WATCH*/}
                        <div className="services-block col-lg-6 col-md-12 col-sm-12">
                          <div className="homepagetopcontent">
                            <h1>
                              Dallas <br /> Home Watch Services
                            </h1>
                            <br />
                            <h2 className="textHome">
                              Home Watch is a service that performs visual
                              inspections of a home or property, looking for
                              obvious issues.
                            </h2>
                            <br />
                            <div className="btns-box">
                              <a
                                href="tel:972-982-7050"
                                className="theme-btn btn-style-one"
                              >
                                <span className="txt">
                                  Call For Appointment
                                  <i className="arrow flaticon-right" />
                                </span>
                              </a>
                            </div>
                          </div>
                          <h3 className="textHome2">
                            Home Watch inspections provide peace of mind about
                            your property while you are away.
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert 4 Blocks of h2 */}
      <section className="services-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              {/* Services Block HOME WATCH*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file" />
                    <h4>
                      <Link href="/home-watch-checklist">
                        Home Watch Services
                      </Link>
                    </h4>
                    <div className="text">
                      We perform a visual inspection of your home and keep you
                      informed about your property while you are away.
                    </div>
                  </div>
                  <a
                    href="homewatch-checklist"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block KEY HOLDER*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="0ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-file-1" />
                    <h4>
                      <Link href="/keyholder-services">
                        Key Holder Services
                      </Link>
                    </h4>
                    <div className="text">
                      We can allow vendor and contractor access to your home and
                      stay with them until their job is complete.
                    </div>
                  </div>
                  <a
                    href="keyholder-services"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block CONCIERGE*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInLeft"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-umbrella-1" />
                    <h4>
                      <Link href="/concierge-services">Concierge Services</Link>
                    </h4>
                    <div className="text">
                      Professional services performed so that you can enjoy your
                      freedom of time. (Only for Home Watch clients)
                    </div>
                  </div>
                  <a
                    href="/concierge-services"
                    className="arrow flaticon-right"
                  />
                </div>
              </div>
              {/* Services Block VEHICLES*/}
              <div className="services-block col-lg-6 col-md-12 col-sm-12">
                <div
                  className="inner-box wow fadeInRight"
                  data-wow-delay="150ms"
                  data-wow-duration="1500ms"
                >
                  <div className="content">
                    <div className="icon flaticon-car-1" />
                    <h4>
                      <Link href="/vehicle-care">Vehicle Care</Link>
                    </h4>
                    <div className="text">
                      We alert you of low tires or battery and meet with your
                      dealership when necessary. (Only for Home Watch clients)
                    </div>
                  </div>
                  <a href="/vehicle-care" className="arrow flaticon-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert Welcome */}
      <section
        className="welcome-section"
        style={{ backgroundImage: "url(images/background/pattern-1.png)" }}
      >
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image title" data-tilt="" data-tilt-max={2}>
                    <Image
                      width={585}
                      height={725}
                      src="/images/home-watch-professional-checking-doors.jpg"
                      alt="home-watch-professional-checking-doors"
                    />
                  </div>
                  <div
                    className="case-box wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    20<sup>+</sup>
                    <span>
                      Years of <br /> Experience
                    </span>
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2>Welcome to Dallas Home Watch</h2>
                    <div className="text">
                      We are a professional, knowledgeable, and certified Home
                      Watch Business in Dallas County. We work very hard to
                      provide the highest quality residential services you'll ever
                      experience.
                    </div>
                    <br />
                  </div>
                  <ul className="list-style-one">
                    <li>Home Watch Services</li>
                    <li>Key Holder for Contractors</li>
                    <li>Concierge Services</li>
                    <li>Vehicle Care </li>
                  </ul>
                  <div className="btns-box">
                    <a
                      href="tel:972-982-7050"
                      className="theme-btn btn-style-two"
                    >
                      <span className="txt">
                        Get a quote <i className="arrow flaticon-right" />
                      </span>
                    </a>
                    <a
                      href="homewatch-checklist"
                      className="theme-btn btn-style-three"
                    >
                      <span className="txt">
                        Read more <i className="arrow flaticon-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert blue area with video */}
      <section className="counter-section">
        <div
          className="image-layer"
          style={{
            backgroundImage: "url(images/background/water-damage-ceiling.jpg)",
          }}
        />
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title light centered">
            <h3 className="blueBkg">
              20+ Years' Experience in the Home Watch Business
            </h3>
            <div className="text" style={{ fontSize: "2em" }}>
              Risk mitigation is the process of planning for disasters and
              having a way to lessen the negative impact. Our goal is to
              visually inspect a home or property looking for obvious issues and
              notifying the homeowner - working as a team to give vendors
              access to fix small problems before they become big problems.
            </div>
          </div>
          {/*REMOVE THIS AREA*/}
          <div className="fact-counter">
            <div className="row clearfix"></div>
          </div>
          {/*Video Box*/}
          <div className="video-boxed">
            <figure className="video-image">
              <img src="images/large-modern-home.jpg" alt="large home" />
            </figure>
            <a
              href="https://www.youtube.com/watch?v=SsvDaOhk0ME"
              className="lightbox-image overlay-box"
            >
              <span className="flaticon-play-arrow">
                <i className="ripple" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* insert SEO content */}
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Content Side */}
            <div className="content-side col-lg-12 col-md-12 col-sm-12">
              {/* Block Detail */}
              <div className="blog-detail">
                <div className="inner-box">
                  <div className="lower-content">
                    <h2>Why Hire a Home Watch Service?</h2>
                    <p>
                      The typical consumer assumes that a Home Watch service is
                      either a security service or a house-sitting service.
                      Dallas Home Watch is neither of these. Instead, Dallas
                      Home Watch professionals come into your home while you are
                      away and perform a visual inspection of your home, looking
                      for issues that may warrant a call to the homeowner
                      informing them of problems. These might include a leaky
                      faucet, clogged drain, air conditioning or heating issue,
                      pool, or fountain pump problem and more. The larger the
                      home, the more that can go wrong and, if left unattended,
                      small problems can quickly lead to larger, more costly
                      ones.
                    </p>
                    <p>
                      The longer a house sits vacant, the bigger the potential
                      for unauthorized persons to trespass or intrude on your
                      property. Dallas Home Watch services include bringing in
                      the mail, boxes, or newspapers from the front porch to help
                      keep from signaling that the homeowners are gone.
                    </p>
                    <p>
                      Dallas Home Watch serves the owners of C-suite level homes
                      and informs homeowners of any problems found, then adheres
                      to their directions for resolution and treatment of any
                      issues. Because our clients often travel out of state or
                      out of country for long periods of time, they can rest
                      assured that Dallas Home Watch will visit their property
                      on a regular schedule and be their eyes and ears while
                      they are away.
                    </p>
                    <p>
                      If you plan to leave your home vacant for more than 7
                      consecutive days, call us to schedule the Dallas Home Watch services
                      that suit your needs.
                    </p>

                    <blockquote>
                      <span className="quote-icon flaticon-quote-1" />
                      <div className="quote-text">
                        "Keep informed about your home while you are away”
                      </div>
                      <div className="quote-author">By Tina Lawson</div>
                    </blockquote>
                    <p>
                      Direct communication with our clients is paramount to
                      keeping homeowners informed about the status of their home
                      and property.
                    </p>
                    <p>
                      We enter all properties with a&nbsp;
                      <Link href="homewatch-checklist">
                        Home Watch Checklist
                      </Link>
                      &nbsp; that includes a list of services to be performed
                      based on the length of vacancy and the property involved
                      and customized by the owner. We take photos and/or videos
                      of identified problems or potential problems and send them
                      via text or email depending on the client's preference of
                      communication. We ensure the homeowner is aware of any
                      issues and follow the client’s instructions regarding a
                      resolution.
                    </p>
                    <div className="two-column">
                      <div className="row clearfix">
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <div className="image">
                            <Image
                              width={585}
                              height={350}
                              src="/images/home-watch-professional-front-entry.jpg"
                              alt="home-watch-professional-checking-doors"
                            />
                          </div>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-6 col-md-6 col-sm-12">
                          <p>
                            We enter your property according to the schedule
                            agreed upon and perform all agreed upon tasks. In
                            addition, we perform a visual inspection of the
                            property, either inside, outside, or both. We take
                            photos and/or videos of potential problems and send
                            them to the homeowner via text or email, depending
                            on the client’s preference.
                          </p>
                          <p>
                            After discussions with the homeowner, we will manage
                            the resolution of the problem according to their
                            instructions, whether it involves arranging,
                            meeting, and supervising tradespeople or some other
                            way of handling the problem satisfactorily.
                          </p>
                          <p>
                            The homeowner will be keep apprised of the situation
                            throughout via regular updates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* insert Gated Communities */}
      <section
        className="practice-section shade"
        style={{ backgroundImage: "url(images/background/pattern-2.png)" }}
      >
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h3 className="serviceAreas">Our Home Watch Service Areas</h3>
            <h4>Gated Communities</h4>
          </div>
          <div className="inner-container">
            <div className="clearfix">
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="Lake Forest gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Highland Park</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="Lake Forest gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Lake Forest</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="University Park gated community"
                    />
                    <br />
                    <span className="flaticon-gate">University Park</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="Preston Hollow gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Preston Hollow</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="Lake Highlands gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Lake Highlands</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="Bluffview gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Bluffview</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="Uptown gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Uptown</span>
                  </h5>
                </div>
              </div>
              {/* Gated Community Block */}
              <div className="practice-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box gated">
                  <h5>
                    <img
                      src="images/icons/icons8-gate-64-navy.png"
                      alt="Oak Lawn gated community"
                    />
                    <br />
                    <span className="flaticon-gate">Oak Lawn</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  <FeaturedPosts posts={props.posts} />*/}
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage;
