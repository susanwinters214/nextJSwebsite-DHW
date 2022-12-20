import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PostContent from "../../components/posts/post-detail/post-content.js";
import { getPostData, getPostsFiles } from "../../lib/posts-util.js";
import Layout from "../../components/layout/bloglayout";

function BlogDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title></title>
      </Head>
      <section className="blog-title">
        <div className="auto-container">
          <h1>{"{Future Blog Title}"}</h1>
          <ul className="page-breadcrumb">
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </section>
      <h1>POSTSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</h1>
      <PostContent post={props.post }  />;
      <Layout>
        <script src="js/jquery.js" strategy="afterInteractive"></script>
        <script src="/js/popper.min.js" strategy="afterInteractive"></script>
        <script
          src="./js/bootstrap.min.js"
          strategy="afterInteractive"
        ></script>
        <script
          src="../js/jquery.mCustomScrollbar.concat.min.js"
          strategy=""
        ></script>
        <script
          src="/js/jquery.fancybox.js"
          strategy="afterInteractive"
        ></script>
        <script src="/js/appear.js" strategy="afterInteractive"></script>
        <script src="/js/parallax.min.js" strategy="afterInteractive"></script>
        <script
          src="/js/tilt.jquery.min.js"
          strategy="afterInteractive"
        ></script>
        <script
          src="/js/jquery.paroller.min.js"
          strategy="afterInteractive"
        ></script>
        <script src="../js/owl.js" strategy="afterInteractive"></script>
        <script src="/js/wow.js" strategy="afterInteractive"></script>
        <script src="/js/nav-tool.js" strategy="afterInteractive"></script>
        <script src="/js/jquery-ui.js" strategy="afterInteractive"></script>
        <script src="/js/script.js" strategy="afterInteractive"></script>
      </Layout>
    </Fragment>
  );

}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);
  return {
    posts: postData
  }
}

export function getStaticPaths() { 
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: {slug:slug}  }) ),
    fallback: false
  }
}

export default BlogDetailPage;
