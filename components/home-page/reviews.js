
import classes from "./reviews.module.css";

function Reviews(props) {
  return (
    <section
      className="testimonial-section"
      style={{ backgroundImage: "url(images/background/pattern-3.png)" }}
    >
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <h3 className="serviceAreas">Dallas Home Watch Testimonials</h3>
        </div>
        <div className="inner-container">
          <div className="single-item-carousel owl-carousel owl-theme">
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="author-image">
                  <img
                    src="images/clients/avatar-man-age-55.jpg"
                    alt="executive man giving testimonial of Dallas Home Watch services"
                  />
                </div>
                <span className="quote-icon flaticon-quote-1" />
                <div className="text">
                  Tina Lawson with Dallas Home Watch has been taking care of our
                  home for over 10 years. She has alerted us of several problems
                  and handled getting repairs done quickly avoiding costly
                  damage to our home while we were away.
                </div>
                <div className="name">Kevin P.</div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="author-image">
                  <img
                    src="images/clients/avatar-man-age-45.jpg"
                    alt="business man giving testimonial of Dallas Home Watch services"
                  />
                </div>
                <span className="quote-icon flaticon-quote-1" />
                <div className="text">
                  Dallas Home Watch gives me peace of mind knowing knowing our
                  home is taken care of while I am out of town on business.
                </div>
                <div className="name">Mark C.</div>
              </div>
            </div>
            {/* Testimonial Block */}
            <div className="testimonial-block">
              <div className="inner-box">
                <div className="author-image">
                  <img
                    src="images/clients/avatar-woman-age-35.jpg"
                    alt="executive woman giving testimonial of Dallas Home Watch services"
                  />
                </div>
                <span className="quote-icon flaticon-quote-1" />
                <div className="text">
                  Tina provides professional home watch services while we are
                  away. We have great confidence in her abilities to detect any
                  issues we have in and around our home.
                </div>
                <div className="name">Linda M.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
