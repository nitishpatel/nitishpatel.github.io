import React from "react";

import ProfileImage from "../images/personal.jpg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1
              className="display-4 archivo text-center font-weight-bolder"
              data-aos="fade-up "
            >
              About
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="image-cropper">
              <img
                data-aos="fade-left"
                src={ProfileImage}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col align-self-center" data-aos="fade-right">
            <p>
              I am a Developer from Mumbai, I enjoy building everything from
              small sites to interactive Web & Mobile apps. I also have a deep
              interest in Cyber-Security. I prefer building cross platform apps
              using Flutter , React Native. Also I love developing Web Apps
              using MERN , React , Django.
            </p>
            <a href="#contact" className="btn btn-outline-dark ">
              Hire Me
            </a>
            <a
              href="https://github.com/nitishpatel/nitishpatel/raw/master/Resume.pdf"
              className="btn btn-warning ml-2"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
