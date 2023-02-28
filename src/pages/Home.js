// import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavBar } from "../components/NavBar";
import React from "react";
import { Banner } from "../components/Banner";
import { Client_carousel } from "../components/Client_carousel";
import { Services } from "../components/Services";
import { Statics } from "../components/Statics";
// import { Reviews } from '../components/Reviews';
import { Contact } from "../components/Contact";
// import { Contact } from "../components/Contact";
// import { Footer } from "./components/Footer";
// import {Sugar} from 'react-preloaders2';

const Home = () => {
  // const [loadingInProgress, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <div className="container">
        <div className="main-content">
        {/* <NavBar /> */}
        <Banner />
        <Statics />
        <Client_carousel />
        <Services />
        {/* <Reviews /> */}
        <Contact />
        {/* <Contact /> */}
        {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Home