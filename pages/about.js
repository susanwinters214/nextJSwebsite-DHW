import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function AboutPage() {
  return (
    <Fragment>
      <Head>
        <title>About Dallas Home Watch</title>
        <meta
          name="description"
          content="About Dallas Home Watch. Tina Lawson is the owner of Dallas Home Watch and services the homes of clients while they are away. Tina Lawson has been in the Home Watch Industry for over 20 years."
        />
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

    
      <section className="case-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title first">
                    <h2 className="pushdown25">Dallas Home Watch</h2>
                    <h3>Owned By: Tina Lawson</h3>
                  </div>
                  <div className="text">
                    <p className="first">
                      After 20+ years in personalized estate management, we have
                      gained the experience to throughly check on your luxury
                      home or property with thorough checks to mitigate issues
                      together prior to your return.
                    </p>

                    <p>
                      We want to ease your worries while you are away by
                      automatically checking the interior and exterior of your home. We also inspect your attic
                      after major storms looking for roof damage and water leaks. 
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
                    className="image wow fadeInLeft pushdown50"
                    data-wow-delay="0ms"
                    data-wow-duration="1500ms"
                  >
                    <center>
                      <Image                        
                        src="/images/tina-lawson.jpg"
                        alt="Tina Lawson"
                        width={300}
                        height={300}
                      />
                      <br />
                      Photo of{" "}
                      <a href="https://www.linkedin.com/in/tina-lawson-a57252254/">
                        Tina Lawson
                      </a>
                      , Owner of Dallas Home Watch
                      <br />
                      <br />
                      <p className="about">
                        Dallas Home Watch provides the service of discreetly
                        checking your home while you are away. The home owner
                        can designate the preferred frequency of visits and we
                        work together toward any solution should property issues
                        arise.
                      </p>
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
