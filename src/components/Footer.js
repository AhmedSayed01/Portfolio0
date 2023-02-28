import React, { Component }  from 'react';
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github400.svg";
import navIcon3 from "../assets/img/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div style={{display:'flex', justifyContent:'space-between' , marginBottom:'1rem'}}>
          {/* <MailchimpForm /> */}
          <div style={{display:'flex',width:'fit-content', alignItems:'end'}}>
            <img className='footer-logo' src={logo} alt="Logo" />
          </div>
          <div style={{display:'block', textAlign:'end', alignSelf:'end'}}>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ahmed-sayed-aaa282208/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ahmedsayed01"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/ahmed_sayed.s/"><img src={navIcon3} alt="Icon" /></a>
            </div>
          </div>
        </div>
          
      </Container>
    </footer>
  )
}
