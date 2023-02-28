import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {


  

  const form = useRef();
  const [res, setRes] = useState('');
  const [load, setLoad] = useState('');
  const sendEmail = (e) => {
    e.preventDefault();
    setLoad('loading...');
    emailjs.sendForm('service_ydzfok7', 'template_ric057k', form.current, 'm-AW1Af1AWzWINkK6')
      .then((result) => {
        console.log(result.text);
        if (result.text === 'OK') {
          setLoad('');
          setRes('Message sent, I will contact you shortly');
        } else {
          setRes('Something went wrong, please try again later');
        }
      }, (error) => {
        console.log(error.text);
      });
  };



  const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

  return (
    <section className="contact" id="contact">
      <div className="container" responsive={responsive}>

      </div>
      <Container>
        <Row className="align-items-center">

          <TrackVisibility>
            {({ isVisible }) =>
              <div style={{  height: '60vh', margin: '0 auto' }} className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form className="contact-form" ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col xm={12} md={6} xl={6} style={{right:'0'}} className="px-1">
                      {/* <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} /> */}
                      <input type="text" name="user_name" placeholder="Full Name" />
                    </Col>
                    <Col xm={12} md={6} xl={6} className="px-1">
                      {/* <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/> */}
                      <input type="email" name="user_email" placeholder="Email" />
                    </Col>
                    <div style={{ textAlign: 'center'}}>
                      <textarea  name="message" placeholder="Message" />

                    </div>
                    {/* <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} /> */}

                    {/* <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col> */}

                    {/* <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea> */}
                    {/* <button type="submit"><span>{buttonText}</span></button> */}
                    <div style={{ textAlign: 'center' }}>
                      <input type="submit" value="Send" />

                      <h5>{load}</h5>
                      <h5>{res}</h5>


                    </div>
                    {/* {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    } */}
                  </Row>
                </form>
              </div>}
          </TrackVisibility>
        </Row>
      </Container>

    </section>
  )
}
