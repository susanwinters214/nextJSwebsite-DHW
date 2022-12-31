import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from "next/image";


function ConciergePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Concierge Services for Dallas Home Watch Clients</title>
        <meta
          name="description"
          content="Concierge Services are special services performed by a professional. These services include anything from stocking the refrigerator to picking up the dry cleaning. Busy executives hire professionals to perform concierge services so that they gain back time in their lives to do the things they enjoy."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-con">
        <div class="auto-container">
          <h1>Concierge Services</h1>
          <ul class="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Concierge Services</li>
          </ul>
        </div>
      </section>
      {/* insert top photo section*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="image">
              <Image
                width={1120}
                height={460}
                src="/images/concierge-services/refrigerator-inventory.jpg"
                alt="stocking the refrigerator"
              />
            </div>
            <div className="lower-content">
              <h2>Concierge Services for Home Watch Clients</h2>
              <p>
                Dallas Home Watch offers personal concierge services while you
                are away so that you can come home, and rest assured that your
                home is ready to enjoy. Personal Concierge Services are only
                available for Dallas Home Watch clients. Some of the services we
                provide include but are not limited to the following:
              </p>
              <div className="row clearfix">
                <div className="column col-lg-6 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Pick up items from Home Depot</li>
                    <li>Return packages to Amazon locker locations</li>
                    <li>
                      Pick Up packages from your front porch and bring inside
                    </li>
                    <li>Stock your refrigerator with bottled water & sodas.</li>
                    <li>Drop Off / Pick Up Dry Cleaning</li>
                  </ul>
                </div>

                <div className="column col-lg-6 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Clean up debris in yards after storms and tornados</li>
                    <li>Open and close home for visiting family or friends</li>
                    <li>Arrange Maid Service, Open & Close the house</li>
                    <li>Arrange Chef Service for Special Occasions</li>
                  </ul>
                </div>
              </div>
              <p>
                Concierge Services are only available for Dallas Home Watch
                Clients under contract for Home Watch Services.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* insert section component with content SEO*/}
      <section className="services-page-section">
        <div className="auto-container">
          <div className="blog-detail">
            <div className="inner-box">
              <div clasNames="lower-content">
                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <h2 className="blue">What are Concierge Services?</h2>
                    <p>
                      Think of Dallas Home Watch as your personal assistant
                      while you are away.
                    </p>
                    <p>
                      It is our goal to keep your home running smoothly while
                      you are gone, so those pesky chores and to-dos that still
                      need to get done will be ours to do for you.{" "}
                    </p>
                    <p>
                      This may include personal errands like picking up dry
                      cleaning, purchasing and wrapping a gift, returning an
                      item to a store, or shipping a box via UPS.{" "}
                    </p>
                    <p>
                      Household chores can include seeing that the yard and
                      entry are drive-up ready or that the inside is
                      spic-and-span.{" "}
                    </p>
                    <p>
                      To get ready for your return, we can set the temperature,
                      stock the fridge with drinks, order fresh flowers, or have
                      a meal catered.{" "}
                    </p>
                    <p>
                      And when others are in your home while you are gone, we
                      will open and close the home for them and perform visual
                      inspections.{" "}
                    </p>
                    <p>
                      If you don’t see the service you need, please contact us
                      as this is only some of the services, we can offer our
                      homeowners.{" "}
                    </p>
                  </div>
                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <div className="image">
                      <Image
                        width={500}
                        height={600}
                        src="/images/concierge-services/wine-cellar.jpg"
                        alt="wine bottles on shelves in a wine cellar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with content2*/}
      <section className="services-page-section bg-color-light">
        <div className="auto-container">
          <div className="sec-title centered ">
            <h2>Benefits of Concierge Services</h2>

            <p>
              Concierge services make your life easier and help you get jobs
              done faster because you are not doing it all on your own.
            </p>
            <ul>
              <li>
                <strong>Saves Time</strong>
                <br />
                The ability to have more time and energy to focus on what really
                matters is one of the most evident advantages of using a
                concierge service. You can set goals, connect with family, and
                improve your quality of life while the concierge takes care of
                regular tasks.
                <br />
                <br />
              </li>
              <li>
                <strong>Reliability</strong>
                <br />
                You can't be in two places at the same time, so call Dallas Home
                Watch to help you get things done.
                <br />
                <br />
              </li>
              <li>
                <strong>Emergency assistance</strong>
                <br />
                Through emergency concierge help, you have someone to call that
                can assist with your specific issues. <br /> <br />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* insert section component CTA*/}
    </Fragment>
  );
}



export default ConciergePage;
