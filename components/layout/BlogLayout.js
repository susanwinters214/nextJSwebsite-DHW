import { Fragment } from 'react';
import MainNavigation from "./main-navigation";
import FooterNavigation from './footer-navigation';

function BlogLayout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <h1>THIS IS NEW</h1>
      <main>{props.children}</main>
      <FooterNavigation />
    </Fragment>
  );
}

export default BlogLayout;
