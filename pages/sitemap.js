import { Fragment } from "react";
import Head from "next/head";
import Hero from '../components/home-page/hero';
import LogoTop from "../components/layout/logotopxxx";
import classes from "../components/layout/logotop.module.css";


function SitemapPage() {
    return (
      <Fragment>
        <Head></Head>

        <Hero />
        <LogoTop className={classes.LogoTop} />
     
      </Fragment>
    );
        
  
}

export default SitemapPage;
