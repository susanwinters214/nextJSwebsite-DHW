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
                      src="/images/hw-check/outdoor-ac-unit-inspection.jpg"
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
                  need to be checked in your home while you are away. You are
                  able to customize your HomeWatch checklist to include items
                  you may have in your home that are different than the average
                  home owner. Our Home Watch Professionals will document all
                  issues and provide you with a report so that you can make any
                  necessary decisions on actions to be taken for any problems
                  discovered.
                </p>
                <p>
                  Dallas Home Watch knows how important it is that you feel your
                  home is safe from vandalism. We will start by examing your
                  property for any forced entry or broken windows. We use our
                  Home Watch Checklist as we walk thru your home looking for any
                  signs of potential damage to your property. We will check
                  screens and porch enclosures for any sign of damage, remove
                  newspapers, flyers, packages and debris from your front porch
                  to avoid signs of an empty home.
                </p>
                <p>
                  Below is a demonstration of some of the many items we check
                  while in your home including: Home Security Alarms, Water
                  Leaks, Electrical Closets, Routers, Air Filters, A/C Units,
                  Breaker Boxes, Washing Machines - CHECK: Thermostats,
                  Refrigerators & Freezers (avoiding spoiled food), Ice Makers
                  and Garbage Disposals, Flush Toilets, Run Water from Faucets,
                  Check Windows, Ceilings, Water Heaters, Water Softner, Water
                  Filters for leaks and verify salt level, Operate garage door
                  opener to check drive chain mechanism, Irrigation Controller
                  is functioning (inside garage only), Investitage any noises,
                  alarms, beeps or odors. Turn on lights and fans throughout the
                  house, Check elevator, Wine Cellar (Cleared wine cellar drain
                  line plus replaced the batteries in the temp alert. Holding at
                  55), Bulbs on timer lights are checked to make sure they are
                  not burnt out.
                </p>
                <p>
                  More items include: Check property for erosion or drainage
                  problems, check for damage caused by fallen trees or limbs,
                  verify landscaping has been performed, bring up the trashcans
                  from the street or alley. We check the property to ensure all
                  yard access is secure. We check outdoor faucets for leakage or
                  covered in cold weather. If you have a swimming pool or
                  outdoor fountain, we will check for algae growth or debris and
                  check the pool equipment for leaks. We will let you know if
                  the pump was running during our visit.
                </p>
                <p>
                  Dallas Home Watch Professionals will check your home for
                  visual pest infestations and remove any dead insects found.
                  Occassionally we are asked to scare away any ducks or remove
                  turtles. If we encounter any dangerous wildlife, we will
                  immediately alert you to the issue so that the city's animal
                  control center can come and professionally and safely remove
                  it.
                </p>
              </div>
            </div>
          </div>
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
                    <h3 className="boxTitle">Security Alarms</h3>
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
                    <h3 className="boxTitle">Water Leaks</h3>
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
                    <h3 className="boxTitle">Electrical Closets</h3>
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
                    <h3 className="boxTitle">Routers</h3>
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
                    <h3 className="boxTitle">Air Filters</h3>
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
                    <h3 className="boxTitle">A/C Units</h3>
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
                    <h3 className="boxTitle">Breaker Boxes</h3>
                    <div className="text">
                      We know how important it is not to loose electricity to
                      your household applicances while you are away. We check
                      your breaker box looking to see if any breakers have been
                      tripped and if so we will reset them.
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
                    <h3 className="boxTitle">Washing Machines</h3>
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
                    <h3 className="boxTitle">Refrigerators</h3>
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
                    <h3 className="boxTitle">Water Faucets</h3>
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
                    <h3 className="boxTitle">Toilets & Tubs</h3>
                    <div className="text">
                      We flush all of the toilets to make sure they are working. We turn the water on and off in the tubs. 
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
                    <h3 className="boxTitle">Pools & Fountains</h3>
                    <div className="text">
                      We check the pool and fountains around the house and make a note if the pumps were running while we were there.
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
                    <h3 className="boxTitle">Water Filtration Devices</h3>
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
                    <h3 className="boxTitle">Trash Cans</h3>
                    <div className="text">
                      Leaving trash cans at the curb past your trash pick up day
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
                    <h3 className="boxTitle">Securing Doors</h3>
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
                    <h3 className="boxTitle">Back Gate</h3>
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
                    <h3 className="boxTitle">Garage Doors & Openers</h3>
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
                Dallas Home Watch will provide you with a Home Watch Checklist
                that you can customize by adding additional items that are
                specific to your home.
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
