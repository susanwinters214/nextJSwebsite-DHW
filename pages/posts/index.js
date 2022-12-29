import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";


function PostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch BLOG</title>
        <meta name="description" content="Dallas Home Watch BLOG" />
      </Head>

      <section className="blog-title">
        <div className="auto-container">
          <br /><br />
          <h1>Home Watch Blog Articles</h1>
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

export default PostPage;
