import { Fragment } from "react";
import classes from "./logo.module.css";
import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Fragment>
      <div className="pull-left logo-box">
        <div className="logo">
          <a href="/">
            <Image
              src="/images/Dallas-Home-Watch-Logo.png"
              alt="Dallas Home Watch"
              title="Dallas Home Watch"
              width={60}
              height={60}
            />
            <div
              style={{
                float: "right",
                marginTop: 8,
                paddingLeft: 5,
                color: "white",
                fontSize: "1.7em",
                fontWeight: "500",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
              }}
            >
              Dallas Home Watch
              <br />
              <span
                style={{
                  color: "white",
                  marginTop: -10,
                  fontSize: ".6em",
                  fontWeight: "100",
                  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                }}
              >
                Home Watch Services in Dallas, Texas
              </span>
            </div>
          </a>
          <br />
        </div>
      </div>
    </Fragment>
  );
}

export default Logo;
