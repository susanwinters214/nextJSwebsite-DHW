import { Fragment } from 'react';
import Head from 'next/head';
import Link from 'next/link';



function HomeWatchChecklistPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Checklist</title>
        <meta name="description" content="I love web development." />
      </Head>
      {/* insert top banner with breadcrumb*/}
      <section className="page-title pageback-hwchk">
        <div className="auto-container">
          <h1>Home Watch Check List</h1>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>Home Watch Check List</li>
          </ul>
        </div>
      </section>

      {/* insert top photo section*/}
      <section className="welcome-section style-two">
        <div className="auto-container">
          <div className="inner-container">
            <div className="clearfix">
              {/* Image Column */}
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="image">
                    <img
                      src="images/outdoor-ac-unit-inspection.jpg"
                      alt="outside a/c unit inspection"
                    />
                  </div>
                </div>
              </div>
              {/* Content Column */}
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <h2>What Does Home Watch Services Include?</h2>
                    <div className="text">
                      Home Watch is “a visual inspection of a home or property,
                      looking for obvious issues.” These inspections include a
                      basic check of plumbing, electrical, and HVAC systems, as
                      well as the overall condition of the home and property.
                      Home Watch service performs scheduled inspections of
                      unoccupied or vacant properties while the owner is away.
                    </div>
                  </div>
                  <div className="row clearfix">
                    <div className="column col-lg-6 col-md-6 col-sm-6">
                      <ul className="list-style-one">
                        <li>Secure all entries</li>
                        <li>Pick up mail and packages</li>
                        <li>Visual inspection</li>
                        <li>Check A/C Units</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-6">
                      <ul className="list-style-one">
                        <li>Check Appliances</li>
                        <li>Look for Water Damage</li>
                        <li>Look for Mold Issues</li>
                        <li>Check Pool Equipment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with content - SEO*/}
      <section className="services-page-section">
        <div className="auto-container">
          {/* Block Detail */}
          <div
            className="blog-detail"
            style={{ marginTop: "-75px", marginBottom: 100 }}
          >
            <h2>Home Watch Checklist</h2>
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
                  enim lobortis scelerisque fermentum.
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
                  Congue quisque egestas diam in arcu cursus.
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
          {/* Services Block ONE */}
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
                    <h2 className="navy">home security alarm</h2>
                    <div className="text-15">
                      We make sure your alarm system is operational.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img
                        src="images/checking-security-alarm.jpg"
                        alt="visual inspection of home security alarm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block TWO */}
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
                      <img
                        src="images/checking-under-bar-sink.jpg"
                        alt="visual inspection of under the bar sink"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="navy">Plumbing</h2>
                    <div className="text-15">
                      We check for leaks and mold caused by water damage.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block THREE */}
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
                    <h2 className="navy">Electrical Closets</h2>
                    <div className="text-15">
                      We can make sure your electronics are in good working
                      order.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img
                        src="images/check-electronics.jpg"
                        alt="visual inspection of electronic closet"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block FOUR */}
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
                      <img
                        src="images/checking-router.jpg"
                        alt="visual inspection of home router"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="navy">Routers</h2>
                    <div className="text-15">
                      Because your security system may depend on your internet
                      connection, we make sure your router is working properly
                      and can reboot the router when necessary.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block FIVE */}
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
                    <h2 className="navy">Replacing Air Filters</h2>
                    <div className="text-15">
                      Dallas Home Watch can check and change your air filters on
                      a timely basis.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img
                        src="images/installing-air-filters.jpg"
                        alt="installing air filters in the attic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block SIX */}
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
                      <img
                        src="images/checking-AC-in-attic.jpg"
                        alt="visual inspection of the AC unit in the attic"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="navy">A/C Unit</h2>
                    <div className="text-15">
                      We will do a visual inspection of your A/C units to ensure
                      there are no condensation leaks in the drip pan. We will
                      look to see if there is any air leaking from the tubes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block SEVEN */}
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
                    <h2 className="navy">Breaker Boxes</h2>
                    <div className="text-15">
                      We look to see if any breakers have been tripped and if so
                      we will reset them.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image">
                      <img
                        src="images/checking-breaker-box.jpg"
                        alt="checking breaker box"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block EIGHT */}
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
                      <img
                        src="images/checking-washing-machine.jpg"
                        alt="visual inspection of the washing machine"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="navy">Washing Machine</h2>
                    <div className="text-15">
                      We will check your washing machine to make sure there is
                      no water leaking and no unusual odors.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Block Detail */}
          <div className="blog-detail">
            <div className="inner-box">
              <div className="lower-content">
                <h2>Why Hire a Home Watch Service?</h2>
                <p>
                  The typical consumer assumes that Home Watch is either a
                  security service or a house-sitting service when it is
                  mentioned. Home Watch is not an alarm company nor a house
                  sitting service. Instead, Home Watch professionals come into
                  your home while you are away and perform a visual inspection
                  of your home looking for issues that may warrant a call to the
                  home owner informing them of problems like leaky faucets,
                  clogged drains, air conditioning and/or heating problems, pool
                  and fountain pump problems and more. The larger the home the
                  more things that could go wrong and if left unattended, small
                  problems can quickly lead to larger problems that can get very
                  expensive to repair.
                </p>
                <p>
                  The longer a house sits vacant the bigger the potential is
                  that unauthorized persons may attempt to trespass and possibly
                  intrude your home and possessions. Home Watch includes
                  bringing in the mail and picking up boxes and newspapers or
                  flyers from the front porch to assist in the home not
                  appearing vacant.
                </p>
                <p>
                  Dallas Home Watch serves the C-suite level homes and informs
                  the homeowner of any problems found and adheres to their
                  directions for their resolution and treatment. Because our
                  clients often travel either out of state or out of the country
                  for long periods of time, they can rest assured that Dallas
                  Home Watch will visit their property on a consistant schedule
                  and be their eyes and ears while they are away. If you leave
                  your home vacant for more than 7 days, we recommend using a
                  Home Watch service business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* insert section component with content2*/}
      {/* insert section component with content3*/}
    </Fragment>
  );
}



export default HomeWatchChecklistPage;
