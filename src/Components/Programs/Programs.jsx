import React from "react";
import "./Programs.css";
import istockphoto_1 from "../../assets/istockphoto-1.jpg";
import istockphoto_2 from "../../assets/istockphoto-2.jpg";
import istockphoto_3 from "../../assets/istockphoto-3.jpg";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={istockphoto_1} alt="" />
        <div className="caption">
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={istockphoto_2} alt="" />
        <div className="caption">
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={istockphoto_3} alt="" />
        <div className="caption">
          <p>Graduation Degree</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
