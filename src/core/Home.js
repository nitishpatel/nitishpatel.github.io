import React from "react";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Gallery from "../Components/Gallery";
import Landing from "../Components/Landing";
import Lanugages from "../Components/Lanugages";
import Project from "../Components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Blogs from "../Components/Blogs";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="protfolio-wrap">
      <Landing />
      <About />
      <Project />
      <Blogs />

      <Lanugages />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
