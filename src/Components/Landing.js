import React from 'react'

const Landing = () => {
    return (
        <div className="container-fluid landing">
        <header className="default-header">
          <nav className="navbar navbar-expand-lg  navbar-light">
            <div className="container">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="text-white lnr lnr-menu" />
              </button>
              <div className="collapse navbar-collapse justify-content-center align-items-center" id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li><a className="nav-link text-light" href="#home">Home</a></li>
                  <li><a className="nav-link text-light" href="#about">About</a></li>
                  <li><a className="nav-link text-light" href="#project">Projects</a></li>
                  <li><a className="nav-link text-light" href="#skills">Skills</a></li>
                  <li><a className="nav-link text-light" href="#gallery">Gallery</a></li>
                  <li><a className="nav-link text-light" href="#contact">Contact</a></li>
                </ul>
              </div>						
            </div>
          </nav>
        </header>
        <div className="row">
          <div className="col-lg-6 align-self-center pl-4 ">
            <h1 className="display-3">Hello ,</h1>
            <h1>I am Nitish Patel</h1>
            <h2 className="font-weight-bold languages">
              Python , React , Flutter Dev
            </h2>
          </div>
          <div className="col-lg-6 col-sm-12">
            <svg className="blob" viewBox="0 0 250 250" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="user-space" clipPathUnits="userSpaceOnUse">
                  <path fill="#8A3FFC" d="M47.6,-64.9C60.2,-56.4,67.8,-40.5,74.4,-23.4C81.1,-6.3,86.8,11.9,81.9,26.5C77,41.2,61.5,52.3,46.1,59.4C30.7,66.4,15.4,69.4,2.5,65.9C-10.3,62.5,-20.7,52.6,-32.1,44.2C-43.5,35.9,-55.9,29,-60.3,18.8C-64.8,8.6,-61.2,-5.1,-58,-20.2C-54.9,-35.3,-52.3,-51.8,-42.7,-61.3C-33.1,-70.8,-16.6,-73.2,0.5,-73.9C17.5,-74.5,35.1,-73.4,47.6,-64.9Z" transform="translate(100 100)" />
                </clipPath>
              </defs>
              <image width="100%" height="100%" preserveAspectRatio="xMaxYMid slice" xlinkHref="https://i.ibb.co/17PP6mV/nitishsite.jpg" clipPath="url(#user-space)" />
            </svg>
          </div>
        </div>
      </div>
    )
}

export default Landing
