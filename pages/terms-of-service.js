import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

function TermsPage() {
  return (
    <Fragment>
      <Head>
        <title>Terms of Service</title>
        <meta name="description" content="Our Privacy Policy" />
      </Head>

      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title style-two pageback-terms">
        <div className="auto-container">
          <h1>Terms of Service</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="">home</a>
            </li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="portfolio-page project-style-two">
        <div className="auto-container pageContent1">
          <h2 className="pageTitle">Terms of Service of Dallas Home Watch</h2>
          <div className="row clearfix">
            <div className="project-block-one col-lg-12 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="pattern-layer">
                  <section id="contentBlock">
                    <p>
                      Please read these Terms and Conditions ("Terms", "Terms
                      and Conditions") carefully before using the
                      www.dallashomewatch.com website (the "Service") operated
                      by Dallas Home Watch ("us", "we", or "our").
                    </p>
                    <p>
                      Your access to and use of the Service is conditioned on
                      your acceptance of and compliance with these Terms. These
                      Terms apply to all visitors, users and others who access
                      or use the Service.
                    </p>
                    <p>
                      By accessing or using the Service you agree to be bound by
                      these Terms. If you disagree with any part of the terms
                      then you may not access the Service. This Terms &amp;
                      Conditions agreement is licensed by TermsFeed to Dallas
                      Home Watch.
                    </p>
                    <h2 className="priv">Accounts</h2>
                    <p>
                      When you create an account with us, you must provide us
                      information that is accurate, complete, and current at all
                      times. Failure to do so constitutes a breach of the Terms,
                      which may result in immediate termination of your account
                      on our Service.
                    </p>
                    <p>
                      You are responsible for safeguarding the password that you
                      use to access the Service and for any activities or
                      actions under your password, whether your password is with
                      our Service or a third-party service.
                    </p>
                    <p>
                      You agree not to disclose your password to any third
                      party. You must notify us immediately upon becoming aware
                      of any breach of security or unauthorized use of your
                      account.
                    </p>
                    <h2 className="priv">Links To Other Web Sites</h2>
                    <p>
                      Our Service may contain links to third-party web sites or
                      services that are not owned or controlled by Dallas Home
                      Watch.
                    </p>
                    <p>
                      Dallas Home Watch has no control over, and assumes no
                      responsibility for, the content, privacy policies, or
                      practices of any third party web sites or services. You
                      further acknowledge and agree that Dallas Home Watch shall
                      not be responsible or liable, directly or indirectly, for
                      any damage or loss caused or alleged to be caused by or in
                      connection with use of or reliance on any such content,
                      goods or services available on or through any such web
                      sites or services.
                    </p>
                    <p>
                      We strongly advise you to read the terms and conditions
                      and privacy policies of any third-party web sites or
                      services that you visit.
                    </p>
                    <h2 className="priv">Termination</h2>
                    We may terminate or suspend access to our Service
                    immediately, without prior notice or liability, for any
                    reason whatsoever, including without limitation if you
                    breach the Terms.
                    <p />
                    <p>
                      All provisions of the Terms which by their nature should
                      survive termination shall survive termination, including,
                      without limitation, ownership provisions, warranty
                      disclaimers, indemnity and limitations of liability.
                    </p>
                    <p>
                      We may terminate or suspend your account immediately,
                      without prior notice or liability, for any reason
                      whatsoever, including without limitation if you breach the
                      Terms.
                    </p>
                    <p>
                      Upon termination, your right to use the Service will
                      immediately cease. If you wish to terminate your account,
                      you may simply discontinue using the Service.
                    </p>
                    <p>
                      All provisions of the Terms which by their nature should
                      survive termination shall survive termination, including,
                      without limitation, ownership provisions, warranty
                      disclaimers, indemnity and limitations of liability.
                    </p>
                    <h2 className="priv">Governing Law</h2>
                    <p>
                      These Terms shall be governed and construed in accordance
                      with the laws of Texas, United States, without regard to
                      its conflict of law provisions.
                    </p>
                    <p>
                      Our failure to enforce any right or provision of these
                      Terms will not be considered a waiver of those rights. If
                      any provision of these Terms is held to be invalid or
                      unenforceable by a court, the remaining provisions of
                      these Terms will remain in effect. These Terms constitute
                      the entire agreement between us regarding our Service, and
                      supersede and replace any prior agreements we might have
                      between us regarding the Service.
                    </p>
                    <h2 className="priv">Changes</h2>
                    <p>
                      We reserve the right, at our sole discretion, to modify or
                      replace these Terms at any time. If a revision is material
                      we will try to provide at least 30 days notice prior to
                      any new terms taking effect. What constitutes a material
                      change will be determined at our sole discretion.
                    </p>
                    <p>
                      By continuing to access or use our Service after those
                      revisions become effective, you agree to be bound by the
                      revised terms. If you do not agree to the new terms,
                      please stop using the Service.
                    </p>
                    <h2 className="priv">Contact Us</h2>
                    <p>
                      If you have any questions about these Terms, please
                      contact us.
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

export default TermsPage;
