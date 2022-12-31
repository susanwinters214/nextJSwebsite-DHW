import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function HomeWatchChecklistPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Home Watch Checklist</title>
        <meta
          name="description"
          content="Customize your Home Watch Checklist. We have a list of household items that we check when we come into your home. The items we check are the ones that could possibly be the source of issues. You are invited to customize your homewatch checklist to 
          ensure everything you want checked is."
        />
        <meta
          property="og:url"
          content="http://www.dallashomewatch.com/homewatch-checklist"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Home Watch Checklist" />
        <meta
          property="og:description"
          content="Customize your Home Watch Checklist. We have a list of household items that we check when we come into your home. The items we check are the ones that could possibly be the source of issues. You are invited to customize your homewatch checklist to 
          ensure everything you want checked is."
        />
        <meta
          property="og:image"
          content="http://www.dallashomewatch.com/images/background/home-watch-enters-front-door.jpg"
        />
        <meta property="og:image:width" content="1200px" />
        <meta property="og:image:height" content="600px" />
      </Head>
      {/* insert top banner with breadcrumb*/}
      <section className="page-title pageback-hwchk">
        <div className="auto-container">
          <h1>Home Watch Check List</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
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
                    <Image
                      width={585}
                      height={600}
                      src="/images/hw-check/home-inspection-guys.jpg"
                      alt="home watch professional inspecting outside of house"
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
                      <br />
                      <ul className="list-style-one">
                        <li>Secure all entries</li>
                        <li>Pick up mail and packages</li>
                        <li>Visual inspection</li>
                        <li>Check A/C Units</li>
                      </ul>
                    </div>
                    <div className="column col-lg-6 col-md-6 col-sm-6">
                      <br />
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
            <h2 className="pageTitle">Home Watch Checklist</h2>
            <div className="inner-box">
              <div className="lower-content">
                <p>
                  Dallas Home Watch provides a standard checklist of items that
                  need to be checked in your home while you are away. You can
                  customize your Home Watch checklist to include items you may
                  have in your home that are different than the average
                  homeowner. Our Home Watch Professionals will document all
                  issues and provide you with a report so that you can make any
                  necessary decisions on actions to be taken for any problems
                  discovered.
                </p>
                <p>
                  Dallas Home Watch knows how important it is that you feel your
                  home is safe from vandalism. We will start by examining your
                  property for any forced entry or broken windows. We use our
                  Home Watch Checklist as we walk thru your home looking for any
                  signs of potential damage to your property. We will check
                  screens and porch enclosures for any sign of damage, remove
                  newspapers, flyers, packages, and debris from your front porch
                  to avoid signs of an empty home.
                </p>
                <p>
                  Our comprehensive menu of services takes the worry out of home
                  ownership whether you are away on business, vacationing,
                  relocating or simply in possession of a property that is not
                  your residence. Depending on the length of time you will be
                  away or the size of the property, you may pick and choose
                  which services are right for you, knowing that your property
                  will be attended to with the highest level of professionalism
                  and attention to detail.
                </p>

                <h3>Inside Your Home</h3>
                <p>
                  An extended leave may mean that the homeowner has disabled
                  certain aspects of the property like water or Internet. Our
                  indoor inspection will cover those items that should be
                  functional including working interior lights, functioning
                  alarm system, security of windows and doors, access by animals
                  or birds; functioning of appliances, air conditioning and
                  heating, no water leaks in bathrooms or kitchens; no leaks in
                  ceilings or windows; no alarms, beeping or other noises;
                  toilets flushing; no unusual odors; technical systems online;
                  and garage door operational. Any problems with these or other
                  interior areas will be reported to the homeowner and handled
                  according to their instructions.
                </p>
                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <ul className="list-style-one">
                      <li>Home Security Alarms </li>
                      <li>Water Leaks</li>
                      <li>Electrical Closets</li>
                      <li>Routers </li>
                      <li>Air Filters </li>
                      <li>A/C Units </li>
                      <li>Thermostats </li>
                      <li>Refrigerators </li>
                      <li>Washing Machines </li>
                      <li>Freezers </li>
                      <li>Ice Makers </li>
                      <li>Garbage Disposals </li>
                    </ul>
                  </div>

                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <ul className="list-style-one">
                      <li>Flush Toilets </li>
                      <li>Check Windows </li> <li> </li>
                      <li>Run Water from Faucets </li>
                      <li>Ceilings </li>
                      <li>Water Heaters </li>
                      <li>Water Softener System </li>
                      <li>Water Filters for leaks and verify salt level </li>
                      <li>Turn on lights and fans throughout the house</li>
                      <li>Investigate any noises, alarms, beeps, or odors.</li>
                      <li>Check elevators</li>
                      <li>Wine Cellar</li>
                    </ul>
                  </div>
                </div>

                <h3>Outside Your Home</h3>
                <p>
                  The outside inspection of your home may include removal of
                  mail, boxes, and packages; damage to front doorway and
                  entrances; maintenance of landscapes and pools; functioning of
                  pool and other equipment; pre- and post-freeze preparation;
                  security of windows and other points of entry; functioning of
                  exterior lighting; and access by animals or birds. Any
                  problems with these or other exterior areas will be reported
                  to the homeowner and handled according to their instructions.
                </p>

                <div className="row clearfix">
                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <ul className="list-style-one">
                      <li>Breaker Boxes </li>
                      <li>Swimming pool or outdoor fountain </li>
                      <li>
                        Outdoor faucets for leakage or covered in cold weather
                      </li>
                      <li>Check for damage caused by fallen trees or limbs </li>
                      <li>Verify landscaping has been performed </li>
                    </ul>
                  </div>

                  <div className="column col-lg-6 col-md-6 col-sm-6">
                    <ul className="list-style-one">
                      <li>
                        Operate garage door opener to check drive chain
                        mechanism
                      </li>
                      <li>
                        Irrigation Controller is functioning - inside garage
                        only
                      </li>
                      <li>Check property for erosion or drainage problems, </li>
                      <li>Bring up the trashcans from the street or alley. </li>
                      <li>Ensure all yard access is secure </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="centered">Home Watch Professional Services</h3>
          {/* Services Block 1 - Security Alarms */}
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
                    <h4 className="boxTitle">Security Alarms</h4>
                    <div className="text">
                      We make sure your alarm system is operational. Dallas Home
                      Watch will turn on the alarm and secure all entries when
                      leaving.
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
                        src="/images/hw-check/security-alarm-inspection.jpg"
                        alt="home security alarm inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 2 - Water Leaks */}
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
                        src="/images/hw-check/bar-sink-inspection.jpg"
                        alt="bar sink inspection"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">Water Leaks</h4>
                    <div className="text">
                      Our Home Watch Checklist includes inspecting under sinks
                      looking for leaks and mold caused by water damage.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 3 - Electrical Closets */}
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
                    <h4 className="boxTitle">Electrical Closets</h4>
                    <div className="text">
                      We can make sure your electronics are in good working
                      order.
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
                        src="/images/hw-check/electronics-closet-inspection.jpg"
                        alt="electronic closet inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 4 - Routers */}
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
                        src="/images/hw-check/router-inspection.jpg"
                        alt="troubleshooting home router"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">Routers</h4>
                    <div className="text">
                      Because your security system may depend on your internet
                      connection, we make sure your router is working properly
                      and can reboot the router when necessary.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 5 - Air Filters  */}
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
                    <h4 className="boxTitle">Air Filters</h4>
                    <div className="text">
                      Dallas Home Watch will check your air filters and replace
                      them when necessary. Just let us know where your new
                      filters are located so that we can replace them while on
                      site. We write the date on the air filters using a black
                      Sharpie so that you will always know the date of the last
                      time the filter was changed.
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
                        src="/images/hw-check/air-filter-replacement.jpg"
                        alt="replacing air filters in attic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 6- A/C Units */}
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
                        src="/images/hw-check/attic-ac-inspection.jpg"
                        alt="air conditioner inspection in 
                        attic"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">A/C Units</h4>
                    <div className="text">
                      We will do a visual inspection of your A/C units to ensure
                      there are no condensation leaks in the drip pan. We will
                      look to see if there is any air leaking from the tubes.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 7 - Breaker Boxes */}
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
                    <h4 className="boxTitle">Breaker Boxes</h4>
                    <div className="text">
                      We know how important it is not to lose electricity to
                      your household appliances while you are away. We check
                      your breaker box looking to see if any breakers have been
                      tripped and if so, we will reset them.
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
                        src="/images/hw-check/breaker-box-inspection.jpg"
                        alt="checking breaker box"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 8 - Washing Machines */}
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
                        src="/images/hw-check/washing-machine-inspection.jpg"
                        alt="visual inspection of the washing machine"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">Washing Machines</h4>
                    <div className="text">
                      We will check your washing machine to make sure there is
                      no water leaking and no unusual odors coming from the
                      machine.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 9 - Refrigerator */}
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
                    <h4 className="boxTitle">Refrigerators</h4>
                    <div className="text">
                      We check the refrigerator to make sure the light comes on.
                      If you want us to, we can clean out expired food from the
                      refrigerator as well as stock it with bottled water before
                      your arrival.
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
                        src="/images/hw-check/refrigerator-inspection.jpg"
                        alt="refrigerator inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 10 - Bathroom Faucet */}
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
                        src="/images/hw-check/faucet-sink-inspection.jpg"
                        alt="running water faucet"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">Water Faucets</h4>
                    <div className="text">
                      We check all water faucets to make sure the water runs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 11 - Toilets & Tubs */}
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
                    <h4 className="boxTitle">Toilets & Tubs</h4>
                    <div className="text">
                      We flush all of the toilets to make sure they are working.
                      We turn the water on and off in the tubs.
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
                        src="/images/hw-check/toilets-and-tubs.jpg"
                        alt="toilet flushing near tub"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 12 - Swimming Pool */}
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
                        src="/images/hw-check/swimming-pool.jpg"
                        alt="swimming pools and fountains"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">Pools & Fountains</h4>
                    <div className="text">
                      We check the pool and fountains around the house and make
                      a note if the pumps were running while we were there. We
                      check for algae growth or debris in and around the pool or
                      fountain.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 13 - WaterCop */}
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
                    <h4 className="boxTitle">Water Filtration Devices</h4>
                    <div className="text">
                      We check the water filtration devices to make sure they
                      are getting electricity and the light on the device is on.
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
                        src="/images/hw-check/watercop-device.jpg"
                        alt="water filter inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 14 - Trashcans */}
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
                        src="/images/hw-check/trash-cans.jpg"
                        alt="trash cans in garage"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">Trash Cans</h4>
                    <div className="text">
                      Leaving trash cans at the curb past your trash pickup day
                      is a sign of an absentee owner. If you left your trash and
                      recycle bins out at the curb when you left town, we will
                      bring them up to the house and place in the garage so that
                      neighbors do not notice you are not home.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 15 - Back Door */}
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
                    <h4 className="boxTitle">Securing Doors</h4>
                    <div className="text">
                      We check all door entries to make sure every one of them
                      is securely locked.
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
                        src="/images/hw-check/securing-back-doors.jpg"
                        alt="water filter inspection"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 16 - Back Gate */}
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
                        src="/images/hw-check/securing-back-gate.jpg"
                        alt="trash cans in garage"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h4 className="boxTitle">Back Gates</h4>
                    <div className="text">
                      We walk the entire property and make sure that every gate
                      or rear entry is secure.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 17 - Garage Doors & Openers */}
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
                    <h4 className="boxTitle">Garage Doors & Openers</h4>
                    <div className="text">
                      We will open and close your garage doors to make sure
                      everything is working properly.
                    </div>
                  </div>
                </div>
                {/* Image Column */}
                <div className="image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <div className="image centered">
                      <video
                        controls
                        src={"/videos/DHW-OpeningGarageDoor.mp4"}
                        style={{ width: "560px", height: "400px" }}
                      />
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
                <p>
                  Dallas Home Watch Professionals will check your home for
                  visual pest infestations and remove any dead insects found.
                  Occasionally we are asked to scare away any ducks or remove
                  turtles. If we encounter any dangerous wildlife, we will
                  immediately alert you to the issue so that the city's animal
                  control center can come and professionally and safely remove
                  it.
                </p>
                Dallas Home Watch will provide you with a Home Watch Checklist
                that you can customize by adding additional items that are
                specific to your home.
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HomeWatchChecklistPage;
