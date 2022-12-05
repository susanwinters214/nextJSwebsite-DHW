import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Dallas Home Watch</title>
        <meta name="description" content="About Dallas Home Watch" />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-about">
        <div className="auto-container">
          <h1>About Us</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>About</li>
          </ul>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="case-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <h2>Dallas Home Watch</h2>
                    <h3>Owned By: Tina Lawson</h3>

                    <img id="DallasGif" src="#" />
                   

                    <>
                      <Script src="getGiphyAPI.js" />
                    </>
                  </div>
                  <div className="text">
                    <p>
                      Ater 20+ years in personalized estate management, I feel
                      we can throughly check on your luxury home or property
                      with thorough checks to mitigate issues together prior to
                      your return.
                    </p>
                    <p>
                      There is a huge need in the Dallas area to discreetly
                      check your home per your preferred frequencies and work
                      together toward any solution should property issues arise.
                    </p>
                    <p>
                      We want to ease your worries while you are away by
                      Automatically checking the interior, exterior plus the
                      attic after all major storms.
                    </p>
                  </div>
                  <div className="text-box">
                    I am personally reachable because I actually care and know
                    you deserve a real response when you trust your home to
                    Dallas Home Watch.
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div
                    className="image wow fadeInLeft"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <img src="images/tina-lawson.jpg" alt="Tina Lawson" />
                    <br />
                    <center>
                      Photo of Tina Lawson, Owner of Dallas Home Watch
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default AboutPage;
