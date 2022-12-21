import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Hero from '../components/home-page/hero';
import Image from "next/image";

function VehicleCarePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Vehicle Care | Dallas Home Watch </title>
        <meta
          name="description"
          content="Dallas Home Watch offers Vehicle Care for existing Home Watch clients."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-vehcare">
        <div className="auto-container">
          <h1>Vehicle Care</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>Vehicle Care</li>
          </ul>
        </div>
      </section>

      {/* insert section component with Welcome*/}
      <section className="welcome-section style-two">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image">
                    <Image
                      src="/images/car-care/car-battery-red-ferrari-genuine.jpg"
                      alt="ferrari wall battery charger"
                      width={555}
                      height={655}
                    />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2>Stored Car Care</h2>
                    <div className="text">
                      We will visually check the vehicles stored in your garage
                      as well as its wall battery to make sure you don't come
                      home to a flat tire or dead battery.
                    </div>
                    <div className="text">
                      Vehicle Care Service is an additional fee and is only
                      available for Home Watch clients under contract.
                    </div>
                    <div className="text">
                      Dallas Home Watch has experience operating the following
                      types of vehicles:
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="column col-lg-6 col-md-6 col-sm-6">
                      <ul className="list-style-one">
                        <li>Ferrari</li>
                        <li>Bentley</li>
                        <li>Tesla</li>
                        <li>Mercedes</li>
                        <li>Cadillac</li>
                        <li>Porche</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-6">
                      <ul className="list-style-one">
                        <li>Rolls-Royce</li>
                        <li>Lamborghini</li>
                        <li>BMW</li>
                        <li>Hummer</li>
                        <li>Motorcycles</li>
                        <li>and more</li>
                      </ul>
                    </div>
                  </div>

                  {/*
                         <div className="btns-box btn-style-one">
                    <Link href="/contact">
                      <span className="txt">
                        Free Consultation <i className="arrow flaticon-right" />
                      </span>
                    </Link>

                  </div>
                    */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with Photos & Keywords */}
      <section className="services-page-section">
        <div className="auto-container">
          {/* Services Block Three */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3 className="boxTitle">Car Batteries</h3>
                    <div className="text">
                      Dallas Home Watch will check the wall battery of your
                      luxury vehicles to ensure your car is getting power.
                    </div>
                    <div className="text">
                      Come home from your business trip knowing that your car is
                      ready to go!
                    </div>
                    {/*a href="contact.html" class="theme-btn btn-style-three"><span class="txt">Read more <i class="arrow flaticon-right"></i></span>--a*/}
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/car-battery-bentley.jpg"
                        alt="Bentley Battery"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block Three */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/car-tire-mercedes.jpg"
                        alt="Mercedes Tire"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3 className="boxTitle">Car Service</h3>
                    <div className="text">
                      We will keep an eye on the vehicles you have in your
                      garage and inform you if any tires are obviously low on
                      air. If you select to have your dealership come to your
                      home, we can be there to greet them and stay while they
                      service your car or sign off for them to take your car to
                      their location.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block Three */}
          <div className="services-block-three">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3 className="boxTitle">Garage Door Openers</h3>
                    <div className="text">
                      Dallas Home Watch will make sure that your garage door
                      openers are working properly and can meet with your garage
                      door technician while they complete the annual maintenance
                      of your garage door system.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/garage-door-openers.jpg"
                        alt="Tina Lawson checking garage doors and openers"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block Three */}
          <div className="services-block-three style-two">
            <div
              className="inner-box wow fadeInUp"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
            >
              <div className="row clearfix">
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <Image
                        width={585}
                        height={460}
                        src="/images/car-care/garage-door-wireless-keypad-check.jpg"
                        alt="inspector checking the garage door wireless keypad"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h3 className="boxTitle">Garage Door Entries</h3>

                    <div className="text">
                      Dallas Home Watch will check your external wireless keypad
                      to ensure it is working and also verify the outside motion
                      sensor lighting around your garage works.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="services-page-section shade">
        <div className="auto-container">
          {/* Block Detail */}
          <div
            className="blog-detail"
            style={{ marginTop: "10px", marginBottom: 50 }}
          >
            <h2>Why Would I Need Vehicle Care While Out Of Town?</h2>

            <div className="inner-box">
              <div className="lower-content">
                <p>
                  Unless you are taking all your vehicles on a road trip,
                  overseas vacation or to the coast for the summer, you are
                  probably leaving one or more cars in the garage. Left for
                  weeks or months, tires, batteries, and finishes (especially if
                  not in a garage) will deteriorate. Your expensive investments
                  deserve attention.
                </p>

                <p>
                  Dallas Home Watch will provide routine maintenance for your
                  cars while you are away. We will drive them as often as you
                  specify, watching for any indication that maintenance or
                  repairs are needed.
                </p>
                <p>
                  We will take cars to your preferred service department to have
                  oil changes; tire rotations, alignments, or changes; washes
                  and detailing; fueling; battery checks; yearly inspections,
                  and electric car charging.{" "}
                </p>
                <p>
                  If a serious problem arises, we will alert you immediately and
                  follow your instructions on any service needed.{" "}
                </p>
                <p>
                  When you return home, your car will be at its best and ready
                  to go.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}



export default VehicleCarePage;
