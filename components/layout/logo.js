import { Fragment } from "react";
import classes from "./logo.module.css";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Fragment>
      <div className="footer-logo">
        <div className="row">
          <div className="col-md-2">
            <div className="row">
              
                <div className="logoIcon">
                  <a href="/">
                    <Image
                      src="/images/Dallas-Home-Watch-Logo.png"
                      alt="Dallas Home Watch"
                      title="Dallas Home Watch"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
              
            </div>
          </div>

          <div className="col-md-10">
            <div className="row">
              <div className="col-md-12">
                <div className={classes.logoName}>
                  <a href="/">Dallas Home Watch</a>
                </div>
                <div className={classes.logoTag}>
                  Home Watch Services in Dallas, Texas
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Logo;
