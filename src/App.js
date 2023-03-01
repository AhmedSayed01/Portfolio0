import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Contact from "./components/Contact";
import bg from "./assets/img/bg.jpg";

// import { Router , Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
// import { Banner } from "./components/Banner";
// import { Client_carousel } from "./components/Client_carousel";
// import { Services } from "./components/Services";
// import { Statics } from "./components/Statics";
// import { Contact } from "./components/Contact";
// import { Reviews } from './components/Reviews';
import { Footer } from "./components/Footer";
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
// import ClipLoader from 'react-spinners/ClipLoader';
import { Sugar } from 'react-preloaders2';
import sample from '../src/assets/img/180226_A_03.mp4';

const App = () => {

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // add event listener to update isMobile state
    function handleResize() {
      setIsMobile(window.innerWidth < 765);
    }
    handleResize(); // set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  const [loadingInProgress, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="container">
      {loadingInProgress ? (
        <div className="loader-container">
          <Sugar background={("linear-gradient(180deg, #3facd7 0%, #062335 100%)")} color={'#EEEEEE'} />
          {/* <ClipLoader color={'#fff'} size={150} /> */}
        </div>
      ) : (
        <div className="main-content">
          <div>

          {isMobile ? (
         <img src={bg} className='vid' alt="" srcset="" /> 

      ) : (
        <video draggable={false} className="vid" muted autoPlay loop
              style={{
                position: 'fixed',
                width: '100%',
                paddingLeft: '0',
                paddingRight: '0',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%,-50%)',
                zIndex: '-1999'
              }}
            >
              <source src={sample} type='video/mp4' />

            </video>
      )}

            
           
          </div>
          <div>
            <NavBar />

          </div>
          <div>
            {/* <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes> */}
            <Home />
          </div>

          <Footer />

        </div>
      )}
    </div>
  );
};

export default App;