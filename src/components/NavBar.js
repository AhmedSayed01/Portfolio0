import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/download.png';
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/github400.svg';
// import { AiFillGithub } from "react-icons/ai";
import navIcon3 from '../assets/img/instagram.svg';
// import { HashLink } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";

// import {
//   BrowserRouter as Router
// } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
      <Navbar expand="xl" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h2>
              <img id="logo" src={logo} alt="Logo" /><span style={{color:'#fff',verticalAlign: '-webkit-baseline-middle'}}>.SAYED</span>
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <NavLink exact to='/' style={{color:'#ffffff', fontSize:'18px', padding:'10px 25px', textDecoration:'none'}} className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</NavLink> */}
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Banner')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Statics')}>Skills</Nav.Link>
              <Nav.Link href="#hobbies" className={activeLink === 'Client_carousel' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Client_carousel')}>Hobbies</Nav.Link>
              <Nav.Link href="#websites" className={activeLink === 'Services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Services')}>Websites</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/ahmed-sayed-aaa282208/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/ahmedsayed01"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/ahmed_sayed.s/"><img src={navIcon3} alt="" /></a>
              </div>
              <Nav.Link href="#contact" className={activeLink === 'contact' ? 'contact active navbar-link' : 'contact navbar-link'}><span> Let's Contact</span></Nav.Link>
                {/* <button className="vvd"><span>Let’s Connect</span></button> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}
