import { Fragment } from 'react';
import MainNavigation from "./main-navigation";
import FooterNavigation from './footer-navigation';

function BlogLayout(props) {
  return (
    <Fragment>
      <MainNavigation />

      <main>{props.children}</main>
      <FooterNavigation />
    </Fragment>
  );
}

export default BlogLayout;
