import React from "react";

const ProgressWidget = ({ title, percent }) => {
  return (
    <div className="col-lg-6 progresswidget" data-aos="flip-up">
      <h6 className="font-weight-bold">{title}</h6>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${percent}%`, background: "#4834d4" }}
        >
          {percent}%
        </div>
      </div>
    </div>
  );
};
const Lanugages = () => {
  return (
    <div className="skills m-4" id="skills" data-aos="ease-in">
      <h2 className="text-center font-weight-bolder">Technical Expertise</h2>
      <p className="text-center">
        Always ready to try hands-on new and emerging technologies
      </p>
      <div className="container">
        <div className="row">
          <ProgressWidget title="Python" percent="80" />
          <ProgressWidget title="Flutter" percent="80" />
          <ProgressWidget title="React" percent="70" />
          <ProgressWidget title="Django" percent="80" />
          <ProgressWidget title="REST API" percent="70" />
          <ProgressWidget title="MERN" percent="50" />
          <ProgressWidget title="Firebase" percent="60" />
          <ProgressWidget title="Javascript" percent="70" />
        </div>
      </div>
    </div>
  );
};

export default Lanugages;
