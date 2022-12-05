import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';



function KeyHolderPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Key Holder Services | Dallas Home Watch </title>
        <meta
          name="description"
          content="Dallas Home Watch offers Key Holder Services for existing Home Watch clients."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-keyh">
        <div className="auto-container">
          <h1>Key Holder Service</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>Key Holder Service</li>
          </ul>
        </div>
      </section>

      {/* insert section component with photo and message*/}
      <section className="services-detail-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="image">
              <img
                src="images/key-holder.jpg"
                alt="handing over the keys from one person to another"
              />
            </div>
            <div className="lower-content">
              <h2>Leave Your Keys In Trusting Hands</h2>
              <p>
                When you own a large home there are alot of things you need to
                manage. If you are a busy executive that spends a lot of time at
                the office, you don't have time to stay at home waiting around
                on deliveries and contractors needing access to your home to
                complete their projects. Dallas Home Watch can hold your keys
                and be your authorized on-site dedicated person to meet with
                vendors and contractors giving you back your time to continue
                doing what you do best.
              </p>
              <p>
                Did you lose the keys to your house while on vacation or your
                kids came home from school to find they have locked themselves
                out? Dallas Home Watch can help you and your family get access
                back into your home when you have lost your keys. Don't risk the
                security of your home by leaving keys under a doormat or under a
                flower pot. Instead leave your keys with a licensed and bonded
                company that you can trust.
              </p>
              <p>
                Below is a list of the many reasons you may want to use Dallas
                Home Watch as your dedicated Key Holder.
              </p>
              <div className="row clearfix">
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Wine Deliveries</li>
                    <li>Furniture Deliveries</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Cable / Internet Installers</li>
                    <li>Utility Company Appointments</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Maid Service</li>
                    <li>Handyman Services</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Garage Door Repairmen</li>
                    <li>Roof Installations</li>
                  </ul>
                </div>
              </div>
              <div className="btn-box btn-style-one">
                <Link href="/contact" className="theme-btn ">
                  <span className="txt">
                    Free Consultation <i className="arrow flaticon-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with Accreditation Benefits*/}
      <section
        className="clienst-section style-two"
        style={{ marginTop: 100, marginBottom: 100 }}
      >
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <h2>What is a Key Holder Service?</h2>
            <div className="text" style={{ fontSize: "1.5em" }}>
              Keyholding is a service where someone holds the keys to your
              premises and ensures the business is secure from any hassle when
              you are not there. If there is an out-of-hours intrusion or in
              case an alarm goes off, the keyholders are the ones who first
              respond for you.
            </div>
          </div>
          <div className="image-centered">
            <img src="images/icons/house-keys.png" alt="house keys" />
          </div>
        </div>
      </section>

      {/* insert section component with SEO Content */}
      <section className="services-page-section shade">
        <div className="auto-container">
          {/* Block Detail */}
          <div
            className="blog-detail"
            style={{ marginTop: "-75px", marginBottom: 100 }}
          >
            <h2>Why Would I Need A Key Holder Service?</h2>
            <a href="https://www.ace-security.net/blog/the-role-of-a-keyholder-in-security-services/">
              VIEW FOR REFERENCE
            </a>
            <div className="inner-box">
              <div className="lower-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Feugiat vivamus at augue eget arcu dictum. Mi bibendum neque
                  egestas congue quisque egestas diam. Auctor augue mauris augue
                  neque gravida in fermentum. Eleifend mi in nulla posuere
                  sollicitudin. Fermentum et sollicitudin ac orci. Ridiculus mus
                  mauris vitae ultricies leo integer malesuada. Vitae turpis
                  massa sed elementum tempus egestas sed sed risus. Ornare
                  suspendisse sed nisi lacus sed viverra tellus. Mi ipsum
                  faucibus vitae aliquet nec ullamcorper sit amet. Cursus mattis
                  molestie a iaculis. Nulla pellentesque dignissim enim sit amet
                  venenatis urna cursus. Vitae semper quis lectus nulla at
                  volutpat diam ut venenatis. Duis tristique sollicitudin nibh
                  sit amet commodo. In vitae turpis massa sed elementum tempus
                  egestas sed. Tellus in metus vulputate eu scelerisque felis
                  imperdiet. Commodo ullamcorper a lacus vestibulum sed. Quis
                  enim lobortis scelerisque fermentum.{" "}
                </p>
                <p>
                  Erat imperdiet sed euismod nisi porta lorem mollis. Elementum
                  curabitur vitae nunc sed. Quisque id diam vel quam elementum
                  pulvinar etiam non quam. Elementum integer enim neque volutpat
                  ac tincidunt vitae semper quis. Orci ac auctor augue mauris.
                  Risus viverra adipiscing at in tellus integer feugiat
                  scelerisque. Rhoncus urna neque viverra justo nec ultrices
                  dui. Sagittis vitae et leo duis ut diam quam. Odio euismod
                  lacinia at quis risus sed vulputate odio ut. In hac habitasse
                  platea dictumst quisque. Hac habitasse platea dictumst quisque
                  sagittis purus sit amet volutpat. At erat pellentesque
                  adipiscing commodo. Tortor dignissim convallis aenean et
                  tortor. Elementum eu facilisis sed odio morbi. Vestibulum
                  rhoncus est pellentesque elit ullamcorper dignissim cras. Orci
                  a scelerisque purus semper eget duis at. Etiam dignissim diam
                  quis enim lobortis scelerisque. Venenatis cras sed felis eget
                  velit. Quam quisque id diam vel quam elementum pulvinar etiam.
                  Congue quisque egestas diam in arcu cursus.{" "}
                </p>
                <p>
                  Cursus sit amet dictum sit amet. Egestas diam in arcu cursus
                  euismod quis viverra nibh cras. Donec ultrices tincidunt arcu
                  non sodales neque sodales ut. Sed euismod nisi porta lorem
                  mollis. Blandit libero volutpat sed cras ornare arcu. A lacus
                  vestibulum sed arcu. Ut venenatis tellus in metus. Egestas
                  tellus rutrum tellus pellentesque eu tincidunt tortor. Orci eu
                  lobortis elementum nibh tellus molestie nunc non. Gravida
                  rutrum quisque non tellus orci ac auctor. Iaculis at erat
                  pellentesque adipiscing commodo elit at imperdiet. Ipsum
                  faucibus vitae aliquet nec ullamcorper sit amet. Quis eleifend
                  quam adipiscing vitae. Sit amet luctus venenatis lectus magna
                  fringilla urna porttitor rhoncus. Nec feugiat nisl pretium
                  fusce id velit. Faucibus et molestie ac feugiat sed lectus
                  vestibulum. Gravida dictum fusce ut placerat orci.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}



export default KeyHolderPage;
