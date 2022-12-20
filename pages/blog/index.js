import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";

const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "blog index - Getting Started",
    image: "getting-started-with-nextjs.png",
    excerpt: "Just the drill",
    date: "12/01/2022",
    content: "This blog is about getting started with next js",
  },
  {
    slug: "mastering-javascript",
    title: "blog index - Day Two",
    image: "mastering-js-thumb.png",
    excerpt: "Shaking Hands",
    date: "12/08/2022",
  },
  {
    slug: "one",
    title: "blog index -  THE END",
    image: "handyman-drill.jpg",
    excerpt: "This is a great way to get started",
    date: "12/15/2022",
  },
  {
    slug: "swimming-pools",
    title: "blog index -  THE END",
    image: "securing-gate.jpg",
    excerpt: "This is a great way to get started",
    date: "12/15/2022",
  },
];

function BlogPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch BLOG</title>
        <meta name="description" content="Dallas Home Watch BLOG" />
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
              <AllPosts posts={props.posts} />

              <div className="blog-details">
                <p>
                  First paragraph starts here sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Feugiat vivamus at augue eget arcu dictum. Mi
                  bibendum neque egestas congue quisque egestas diam. Auctor
                 
                </p>
                <p>
                  Second paragraph starts here. sed euismod nisi porta lorem
                  mollis. Elementum curabitur vitae nunc sed. Quisque id diam
                  vel quam elementum pulvinar etiam non quam. Elementum integer
               
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts
    }
  };
}

export default BlogPage;
