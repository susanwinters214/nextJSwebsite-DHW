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
                      src="/images/outdoor-ac-unit-inspection.jpg"
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
                    <h2 className="navy">Home Security Alarms</h2>
                    <div className="text-15">
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
                        height={450}
                        src="/images/checking-security-alarm.jpg"
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
                      <Image
                        width={585}
                        height={450}
                        src="/images/checking-under-bar-sink.jpg"
                        alt="visual inspection of under the bar sink"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="navy">Water Leaks</h2>
                    <div className="text-15">
                      Our Home Watch Checklist includes inspecting under sinks
                      looking for leaks and mold caused by water damage.
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
                      <Image
                        width={585}
                        height={450}
                        src="/images/check-electronics.jpg"
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
                      <Image
                        width={585}
                        height={450}
                        src="/images/checking-router.jpg"
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
                    <h2 className="navy">Air Filters</h2>
                    <div className="text-15">
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
                        height={450}
                        src="/images/installing-air-filters.jpg"
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
                      <Image
                        width={585}
                        height={450}
                        src="/images/checking-AC-in-attic.jpg"
                        alt="visual inspection of the AC unit in the attic"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="navy">A/C Units</h2>
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
                        height={450}
                        src="/images/checking-breaker-box.jpg"
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
                      <Image
                        width={585}
                        height={450}
                        src="/images/checking-washing-machine.jpg"
                        alt="visual inspection of the washing machine"
                      />
                    </div>
                  </div>
                </div>
                {/* Content Column */}
                <div className="content-column col-lg-6 col-md-12 col-sm-12">
                  <div className="inner-column">
                    <h2 className="navy">Washing Machines</h2>
                    <div className="text-15">
                      We will check your washing machine to make sure there is
                      no water leaking and no unusual odors coming from the
                      machine.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Services Block 9 */}

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
                    <h2 className="navy">Garage Doors & Openers</h2>
                    <div className="text-15">
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
              <div className="lower-content"></div>
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
