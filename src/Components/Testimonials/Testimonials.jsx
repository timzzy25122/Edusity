import React, { useRef } from "react";
import "./Testimonials.css";
import arrow_1 from "../../assets/arrow-1.png";
import arrow_2 from "../../assets/arrow-2.png";
import Aig_1 from "../../assets/Aig-1.jpeg";
import mike_1 from "../../assets/mike-1.avif";
import female_7 from "../../assets/female-7.jpeg";
import istockphoto_8 from "../../assets/istockphoto-8.webp";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonial">
      <img src={arrow_1} alt=" " className="next-btn" onClick={slideForward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={Aig_1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community, state-of-the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={mike_1} alt="" className="img" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community, state-of-the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={female_7} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community, state-of-the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={istockphoto_8} alt="" className="img" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, Usa</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decision I've ever made. The supportive community, state-of-the
                art facilities, and commitment to academic excellence have truly
                exceeded my expectations
              </p>
            </div>
          </li>
        </ul>
      </div>
      <img src={arrow_2} alt="" className="back-btn" onClick={slideBackward} />
    </div>
  );
};

export default Testimonials;
