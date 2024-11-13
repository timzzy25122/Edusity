import React from "react";
import "./Campus.css";
import istockphoto_4 from "../../assets/istockphoto-4.webp";
import istockphoto_5 from "../../assets/istockphoto-5.webp";
import istockphoto_6 from "../../assets/istockphoto-6.webp";
import istockphoto_7 from "../../assets/istockphoto-7.webp";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={istockphoto_4} alt="" />
        <img src={istockphoto_5} alt="" />
        <img src={istockphoto_6} alt="" />
        <img src={istockphoto_7} alt="" />
      </div>
      <button className="btn dark-btn ">See More Here </button>
    </div>
  );
};

export default Campus;
