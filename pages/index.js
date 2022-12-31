import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dallas Home Watch</title>
        <meta
          name="description"
          content="Dallas Home Watch is company that provides professional Home Watch Services for home owners in Dallas. Home Watch professionals perform a visual inspection of your home while you are away and alert you of any concerns about the conditions of the real estate."
        />
      </Head>
      {/* insert top banner with Page Title & Breadcrumb*/}
      <section className="page-title pageback-about">
        <div className="auto-container">
          <h1>NEW HOME PAGE</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/">home</a>
            </li>
            <li>About</li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
