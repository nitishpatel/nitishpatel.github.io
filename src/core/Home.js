import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Gallery from '../Components/Gallery'
import Landing from '../Components/Landing'
import Lanugages from '../Components/Lanugages'
import Project from '../Components/Project'

const Home = () => {
    return (
        <div className="protfolio-wrap">
            <Landing />
            <About />
            <Project/>
            <Lanugages/>
            <Gallery/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Home
