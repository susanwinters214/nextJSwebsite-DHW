import { Fragment } from 'react';
import Head from 'next/head';
import Image from "next/image";
const blogTitle = "Household Generators";

function BlogPage() {
return (
  <Fragment>
    <Head>
      <title>Dallas Home Watch</title>
      <meta name="description" content="Dallas Home Watch" />
    </Head>

    <section className="blog-title">
      <div className="auto-container">
        <h1>{blogTitle}</h1>
      </div>
    </section>

    {/* insert section component with content - SEO*/}
    <section className="blog-section">
      <div className="auto-container">
        <div
          className="content-column col-lg-12 col-md-12 col-sm-12"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          <h2>Second Header</h2>
          <div className="inner-box">
            <div className="blog-details">
              <p>
                First paragraph starts here 
              </p>

              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <p>
                    Second paragragph starts here. 
                  </p>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="image">
                    <Image
                      width={585}
                      height={450}
                      src="/images/checking-security-alarm.jpg"
                      alt="visual inspection of home security alarm"
                    />
                  </div>
                </div>
              </div>

           
            </div>
          </div>
        </div>

      </div>
    </section>

    <section
      className="practice-section shade"
      style={{ backgroundImage: "url(images/background/white-marble.jpg)" }}
    >
      <div className="auto-container">
        <div className="video-boxed">
          <figure className="video-image">
            <Image
              src="/images/large-modern-home.jpg"
              alt="large home"
              title=""
              width={1170}
              height={615}
            />
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
  </Fragment>
);  
}

export default BlogPage;