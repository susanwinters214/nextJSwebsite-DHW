import Image from "next/image";
import classes from "./cta1.module.css";
import Link from "next/link";

function CTA1() {
  return (
    <section className={classes.ctasection}>
      <div className={classes.autocontainer}>
        <div className={classes.innercontainer}>
          <div className={classes.image}>
            <img
              src="images/shaking-hands-in-front-of-house.jpg"
              alt="shaking hands in front of house"
            />
          </div>
          <div className={classes.content}>
            <h2>
              Speak With Our <br /> Experts Today!
            </h2>
            <Link
              href="/contact"
              className={(classes.themebtn, classes.btnstyletwo)}
            >
              <span className="txt">
                Get a quote <i class="arrow flaticon-right"></i>
              </span>
            </Link>
          </div>
          <div className={classes.hammerimage}>
            <img src="images/house-keys.png" alt="house keys" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA1;


