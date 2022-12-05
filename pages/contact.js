import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/contact/contact-form';

function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-contact">
        <div className="auto-container">
          <h1>Contact Us</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>

      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section
        className="map-section"
        style={{ marginTop: 100, paddingBottom: 25 }}
      >
        <div className="auto-container">
          <div className="inner-container">
            {/* Map Boxed */}
            <div className="map-boxed">
              {/* Map Outer */}
              <div className="map-outer">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d53653.00202596772!2d-96.81646852006959!3d32.81048062878755!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1668188302433!5m2!1sen!2sus"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default ContactPage;
