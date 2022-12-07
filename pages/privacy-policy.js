import { Fragment } from 'react';
import Head from 'next/head';
import Link from "next/link";


function PrivacyPage() {
  return (
    <Fragment>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy for Dallas Home Watch"
        />
      </Head>

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title style-two pageback-privacy">
        <div className="auto-container">
          <h1>Privacy Policy </h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="portfolio-page project-style-two">
        <div className="auto-container" style={{ marginTop: "-100px" }}>
          <h2 style={{ textAlign: "center", marginBottom: 25 }}>
            Privacy Policy of Dallas Home Watch
          </h2>
          <div className="row clearfix">
            <div className="project-block-one col-lg-12 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="pattern-layer">
                  <section id="contentBlock">
                    <p>
                      Dallas Home Watch ("us", "we", or "our") operates the
                      www.dallashomewatch.com website (the "Service").
                    </p>
                    <p>
                      This page informs you of our policies regarding the
                      collection, use and disclosure of Personal Information
                      when you use our Service.
                    </p>
                    <p>
                      We will not use or share your information with anyone
                      except as described in this Privacy Policy. This Privacy
                      Policy is licensed by TermsFeed Generator to Dallas Home
                      Watch.
                    </p>
                    <p>
                      We use your Personal Information for providing and
                      improving the Service. By using the Service, you agree to
                      the collection and use of information in accordance with
                      this policy. Unless otherwise defined in this Privacy
                      Policy, terms used in this Privacy Policy have the same
                      meanings as in our Terms and Conditions, accessible at
                      www.dallashomewatch.com
                    </p>
                    <h2 className="priv">Information Collection And Use</h2>
                    <p>
                      While using our Service, we may ask you to provide us with
                      certain personally identifiable information that can be
                      used to contact or identify you. Personally identifiable
                      information may include, but is not limited to, your name,
                      phone number, email, or other information ("Personal
                      Information").
                    </p>
                    <h2 className="priv">Log Data</h2>
                    <p>
                      We collect information that your browser sends whenever
                      you visit our Service ("Log Data"). This Log Data may
                      include information such as your computer's Internet
                      Protocol ("IP") address, browser type, browser version,
                      the pages of our Service that you visit, the time and date
                      of your visit, the time spent on those pages and other
                      statistics.
                    </p>
                    <h2 className="priv">Cookies</h2>
                    <p>
                      Cookies are files with small amount of data, which may
                      include an anonymous unique identifier. Cookies are sent
                      to your browser from a web site and stored on your
                      computer's hard drive.
                    </p>
                    <p>
                      We use "cookies" to collect information. We use tracking
                      devices and cookies for advertising purposes; and by using
                      this site you consent to the placing of tracking devices,
                      such as cookies (including tracking devices enabled by
                      Rakuten Marketing) on your computer and/or devices that
                      you use to connect to this website. If you do not wish for
                      tracking cookies to be used then you may opt-out or remove
                      cookies/tracking devices in compliance with any applicable
                      law by instructing your browser to refuse all cookies or
                      to indicate when a cookie is being sent. However, if you
                      do not accept cookies, you may not be able to use some
                      portions of our Service.
                    </p>
                    <h2 className="priv">Service Providers</h2>
                    <p>
                      We may employ third party companies and individuals to
                      facilitate our Service, to provide the Service on our
                      behalf, to perform Service-related services or to assist
                      us in analyzing how our Service is used.
                    </p>
                    <p>
                      These third parties have access to your Personal
                      Information only to perform these tasks on our behalf and
                      are obligated not to disclose or use it for any other
                      purpose.
                    </p>
                    <h2 className="priv">Security</h2>
                    <p>
                      The security of your Personal Information is important to
                      us, but remember that no method of transmission over the
                      Internet, or method of electronic storage is 100% secure.
                      While we strive to use commercially acceptable means to
                      protect your Personal Information, we cannot guarantee its
                      absolute security.
                    </p>
                    <h2 className="priv">Links To Other Sites</h2>
                    <p>
                      Our Service may contain links to other sites that are not
                      operated by us. If you click on a third party link, you
                      will be directed to that third party's site. We strongly
                      advise you to review the Privacy Policy of every site you
                      visit.
                    </p>
                    <p>
                      We have no control over, and assume no responsibility for
                      the content, privacy policies or practices of any third
                      party sites or services.
                    </p>
                    <h2 className="priv">Children's Privacy</h2>
                    <p>
                      Our Service does not address anyone under the age of 13
                      ("Children").
                    </p>
                    <p>
                      We do not knowingly collect personally identifiable
                      information from children under 13. If you are a parent or
                      guardian and you are aware that your Children has provided
                      us with Personal Information, please contact us. If we
                      discover that a Children under 13 has provided us with
                      Personal Information, we will delete such information from
                      our servers immediately.
                    </p>
                    <h2 className="priv">Changes To This Privacy Policy</h2>
                    <p>
                      We may update our Privacy Policy from time to time. We
                      will notify you of any changes by posting the new Privacy
                      Policy on this page.
                    </p>
                    <p>
                      You are advised to review this Privacy Policy periodically
                      for any changes. Changes to this Privacy Policy are
                      effective when they are posted on this page.
                    </p>
                    <h2 className="priv">Contact Us</h2>
                    <p>
                      If you have any questions about this Privacy Policy,
                      please contact us.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default PrivacyPage;
