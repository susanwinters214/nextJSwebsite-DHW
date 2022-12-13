import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';


function NewsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch News</title>
        <meta name="googlebot" content="noindex"></meta>
        <meta
          name="description"
          content="Dallas Home Watch News - from social media sites, press releases and more"
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
      <section className="project-style-two">
        <div className="auto-container" style={{ marginTop: "-100px" }}>
          <div className="row clearfix">
            <div className="project-block-one col-lg-12 col-md-6 col-sm-12">
              <div className="inner-box">
                <section id="contentBlock">
                  <h2 className="pageTitle">
                    Dallas Home Watch News
                  </h2>
                  <p>August 2022 - Dallas Home Watch joined the NHWA.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}



export default NewsPage;
