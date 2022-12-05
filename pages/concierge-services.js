import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';



function ConciergePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Concierge Services for Dallas Home Watch Clients</title>
        <meta name="description" content="I love web development." />
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
              <img
                src="images/check-refrigerator.jpg"
                alt="stocking the refrigerator"
              />
            </div>
            <div className="lower-content">
              <h2>concierge Services for Home Watch Clients</h2>
              <p>
                Dallas Home Watch offers personal concierge services while you
                are away so that you can come home and rest assured that your
                home is ready to enjoy. Personal Conceirge Services are only
                available for Dallas Home Watch clients. Some of the services we
                provide include but are not limited to the following:
              </p>
              <div className="row clearfix">
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Pick up items from Home Depot</li>
                    <li>Return packages to Amazon locker locations</li>
                    <li>
                      Pick Up packages from your front porch and bring inside
                    </li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Stock your refrigerator with bottle water & sodas.</li>
                    <li>Drop Off / Pick Up Dry Cleaning</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Clean up debries in yards after storms and tornados</li>
                    <li>Open and close home for visiting family or friends</li>
                  </ul>
                </div>
                <div className="column col-lg-3 col-md-6 col-sm-6">
                  <ul className="list-style-one">
                    <li>Arrange Maid Service</li>
                    <li>Arrange Chef Service for Special Occassions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* insert section component with content SEO*/}
      <section className="services-page-section">
        <div className="auto-container">
          <div className="blog-detail">
            <h2>What is Conceirge Services?</h2>
            <Link href="https://www.excellentwebworld.com/what-is-concierge-service/">
              VIEW FOR REFERENCE
            </Link>

            <div className="inner-box">
              <div clasNames="lower-content">
                <p>
                  Personal concierge are hired to provide a wide range of
                  services for busy people. incididunt ut labore et dolore magna
                  aliqua. Feugiat vivamus at augue eget arcu dictum. Mi bibendum
                  neque egestas congue quisque egestas diam. Auctor augue mauris
                  augue neque gravida in fermentum. Eleifend mi in nulla posuere
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

      {/* insert section component with content2*/}
      <section className="services-page-section bg-color-light">
        <div className="auto-container">
          <div className="sec-title centered ">
            <h2>Benefits of Concierge Services</h2>

            <p>
              Concierge services make your life easier and help you get jobs
              done faster because you are not doing it all on your own.{" "}
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
