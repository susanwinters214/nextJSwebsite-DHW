import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';


function NewsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch News</title>
        <meta
          name="description"
          content="Dallas Home Watch News - from social media sites and more"
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-news style-two ">
        <div className="auto-container">
          <h1>Home Watch News</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>News</li>
          </ul>
        </div>
      </section>

      {/* insert section component with News Widget from LinkedIn*/}
      <section className="portfolio-page project-style-two">
        <div className="auto-container">
          <h2 style={{ textAlign: "center" }}>Dallas Home Watch News</h2>
          <div className="row clearfix">
            <div className="project-block-one col-lg-12 col-md-6 col-sm-12">
              <div className="inner-box">
                <figure className="image-box">
                  <div className="pattern-layer">
                    <section id="LINKEDIN-POSTS">
                      <div
                        className="taggbox"
                        style={{ width: "100%", height: "100%" }}
                        data-widget-id={114457}
                        data-tags="false"
                      />
                      here
                      <script
                        src="https://widget.taggbox.com/embed-lite.min.js"
                        type="text/javascript"
                      ></script>
                    </section>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}



export default NewsPage;
