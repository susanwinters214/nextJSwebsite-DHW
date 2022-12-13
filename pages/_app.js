import Head from 'next/head';
import '../styles/globals.css';
import '../styles/bootstrap.css';
import '../styles/style.css';
import "../styles/responsive.css";
import "../styles/susan.css";
import Layout from '../components/layout/layout';
import Document, { Html, Main, NextScript } from "next/document";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="googlebot" content="noindex"></meta>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" href="images/favicon.ico" type="image/x-icon"></link>
      </Head>
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>

      <script src="js/jquery.js" strategy="afterInteractive"></script>
      <script src="/js/popper.min.js" strategy="afterInteractive"></script>
      <script src="js/bootstrap.min.js" strategy="afterInteractive"></script>
      <script
        src="js/jquery.mCustomScrollbar.concat.min.js"
        strategy=""
      ></script>
      <script src="js/jquery.fancybox.js" strategy="afterInteractive"></script>
      <script src="js/appear.js" strategy="afterInteractive"></script>
      <script src="js/parallax.min.js" strategy="afterInteractive"></script>
      <script src="js/tilt.jquery.min.js" strategy="afterInteractive"></script>
      <script
        src="js/jquery.paroller.min.js"
        strategy="afterInteractive"
      ></script>
      <script src="js/owl.js" strategy="afterInteractive"></script>
      <script src="js/wow.js" strategy="afterInteractive"></script>
      <script src="js/nav-tool.js" strategy="afterInteractive"></script>
      <script src="js/jquery-ui.js" strategy="afterInteractive"></script>
      <script src="js/script.js" strategy="afterInteractive"></script>
    </Layout>
  );
}

export default MyApp;
