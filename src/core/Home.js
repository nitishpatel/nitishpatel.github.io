import React from "react";
import "../style.css";
import personal from "../images/personal.png";
import Typist from "react-typist";
import { Link, Redirect } from "react-router-dom";

const Home = () => {
  const title = "< nitishpatel />";
  const hasWindow = typeof window !== 'undefined';
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;


  const socialMedia = ()=>{
      return(
          <div className="row pt-4 pl-5 text-center">
              <div className={width>500?"col-2 ml-5 pl-5":"col-2"}>
                  <h3><a href="https://www.facebook.com/nitishp25/" className="text-light "><i class="fa fa-facebook-official " aria-hidden="true"></i></a></h3>
              </div>
              <div className="col-2">
                 <h3><a href="https://www.instagram.com/_nitishpatel_/" className="text-light"><i class="fa fa-instagram" aria-hidden="true"></i></a></h3>
              </div>
              <div className="col-2">
                 <h3><a href="https://www.linkedin.com/in/nitishp25/" className="text-light"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a></h3>
              </div>
              <div className="col-2">
                 <h3><a href="https://twitter.com/nitishpatel_" className="text-light"><i class="fa fa-twitter" aria-hidden="true"></i></a></h3>
              </div>
              <div className="col-2">
                 <h3><a href="https://github.com/nitishpatel" className="text-light"><i class="fa fa-github" aria-hidden="true"></i></a></h3>
              </div>
          </div>
      )
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 justify-content-center align-items-center text-center">
        <img src={personal} className="img-fluid" style={{maxWidth: width>500?"40%":"60%"}}/>
          <h1 className="name text-light">{title}</h1>
          <Typist className="h4 text-light animate">
            <span>Python Developer</span>
            <Typist.Backspace count={16} delay={200} />
            <span>Flutter Developer</span>
            <Typist.Backspace count={17} delay={200} />
            <span>Cyber Security Enthusiast</span>
            <Typist.Backspace count={25} delay={200} />
            <span>Python , Flutter Dev & Cyber Security Enthusiast</span>
          </Typist>
          <p className="text-light h6 pt-3">I am a Developer from Mumbai, I enjoy building everything from small sites to interactive Web & Mobile apps. I also have a deep interest in Cyber-Security. Always thinking for some startup ideas ,I love Indie Music,Street Food,Cricket.</p>
          {socialMedia()}
        <p className="text-light h6">Made With ♥</p>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
