import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";

function PageNotFound() {
  return (
    <Fragment>
      <Head>
        <title>404 | Dallas Home Watch</title>
        <meta
          name="description"
          content="You have typed in an invalid URL. The page you requested does not exist. Please go back to the home page and start over."
        />
      </Head>

      <section className="page-title pageback-404">
        <div className="auto-container">
          <h1>404</h1>
          <h2 className="lost">
            The page you requested does not exist. <br />
            Try going back to the  <Link href="/">home
            page.</Link>
          </h2>
      
        </div>
      </section>

     
    </Fragment>
  );
}

export default PageNotFound;
