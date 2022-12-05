import { Fragment } from 'react';
import MainNavigation from "./main-navigation";
import FooterNavigation from './footer-navigation';

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <FooterNavigation />
    </Fragment>
  );
}

export default Layout;
