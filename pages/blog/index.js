import { Fragment } from 'react';
import Head from 'next/head';
import Image from "next/image";
const blogTitle = "Household Generators";

function BlogPage() {
return (
  <Fragment>
    <Head>
      <title>Dallas Home Watch</title>
      <meta name="description" content="Dallas Home Watch" />
    </Head>

    <section className="blog-title">
      <div className="auto-container">
        <h1>HomeWatch Blog Articles</h1>
      </div>
    </section>

    {/* insert section component with content - SEO*/}
    <section className="blog-section">
      <div className="auto-container">
        <div
          className="content-column col-lg-12 col-md-12 col-sm-12"
          style={{ marginTop: 50, marginBottom: 50 }}
        >
          
          <div className="inner-box">
            <div className="blog-details">
              <p>
                First paragraph starts here sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Feugiat vivamus at augue eget arcu dictum. Mi bibendum
                neque egestas congue quisque egestas diam. Auctor augue mauris
                augue neque gravida in fermentum. Eleifend mi in nulla posuere
                sollicitudin. Fermentum et sollicitudin ac orci. Ridiculus mus
                mauris vitae ultricies leo integer malesuada. Vitae turpis massa
                sed elementum tempus egestas sed sed risus. Ornare suspendisse
                sed nisi lacus sed viverra tellus. Mi ipsum faucibus vitae
                aliquet nec ullamcorper sit amet. Cursus mattis molestie a
                iaculis. Nulla pellentesque dignissim enim sit amet venenatis
                urna cursus. Vitae semper quis lectus nulla at volutpat diam ut
                venenatis. Duis tristique sollicitudin nibh sit amet commodo. In
                vitae turpis massa sed elementum tempus egestas sed. Tellus in
                metus vulputate eu scelerisque felis imperdiet. Commodo
                ullamcorper a lacus vestibulum sed. Quis enim lobortis
                scelerisque fermentum.
              </p>
              <p>
                Second paragraph starts here. sed euismod nisi porta lorem
                mollis. Elementum curabitur vitae nunc sed. Quisque id diam vel
                quam elementum pulvinar etiam non quam. Elementum integer enim
                neque volutpat ac tincidunt vitae semper quis. Orci ac auctor
                augue mauris. Risus viverra adipiscing at in tellus integer
                feugiat scelerisque. Rhoncus urna neque viverra justo nec
                ultrices dui. Sagittis vitae et leo duis ut diam quam. Odio
                euismod lacinia at quis risus sed vulputate odio ut. In hac
                habitasse platea dictumst quisque. Hac habitasse platea dictumst
                quisque sagittis purus sit amet volutpat. At erat pellentesque
                adipiscing commodo. Tortor dignissim convallis aenean et tortor.
                Elementum eu facilisis sed odio morbi. Vestibulum rhoncus est
                pellentesque elit ullamcorper dignissim cras. Orci a scelerisque
                purus semper eget duis at. Etiam dignissim diam quis enim
                lobortis scelerisque. Venenatis cras sed felis eget velit. Quam
                quisque id diam vel quam elementum pulvinar etiam. Congue
                quisque egestas diam in arcu cursus.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

  
  </Fragment>
);  
}

export default BlogPage;