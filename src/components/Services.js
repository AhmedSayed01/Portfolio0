import React from "react";
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ServiceCard } from "./ServiceCard";
import projImg11 from "../assets/img/website1image1.png";
import projImg12 from "../assets/img/website1image2.png";
import projImg13 from "../assets/img/website1image3.png";
import projImg14 from "../assets/img/website1image4.png";
import projImg21 from "../assets/img/website2image1.png";
import projImg22 from "../assets/img/website2image2.png";
import projImg23 from "../assets/img/website2image3.png";
import projImg3 from "../assets/img/website3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import { Display } from "react-bootstrap-icons";
// import TrackVisibility from 'react-on-screen';

export const Services = () => {

  const [currentImage1, setCurrentImage1] = useState(projImg11);
  const [currentImage2, setCurrentImage2] = useState(projImg21);
  const [currentImage3, setCurrentImage3] = useState(projImg3);

  // const services = [
  //   {
  //     id: 1,
  //     title: "Websites",
  //     description: "Design & Development",
  //     imgUrl: projImg11,
  //   },
  //   {
  //     id: 2,
  //     title: "Mobile Apps",
  //     description: "Design & Development",
  //     imgUrl: projImg2,
  //   },
  //   {
  //     id: 3,
  //     title: "Customer Relationship Management Systems (CRMs)",
  //     description: "Design & Development",
  //     imgUrl: projImg3,
  //   }];
  // const service1 = [
  //   {
  //     id: 11,
  //     imgUrl: projImg11,
  //   },
  //   {
  //     id: 12,
  //     imgUrl: projImg12,
  //   },
  //   {
  //     id: 13,
  //     imgUrl: projImg13,
  //   },
  //   {
  //     id: 14,
  //     imgUrl: projImg14,
  //   },

  // ];


  return (
    <section className="service" id="websites">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility> */}
            {/* {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}> */}
            <h2>Websites</h2><br /><br />
            <Tab.Container id="services-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5  justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">01</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">02</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp" >
                <Tab.Pane eventKey="first">
                  <Row>
                    <div className="pop-cards">
                      <Popup trigger={
                        <div style={{ display: 'contents' }}>
                          <img className="proj-imgbx" src={projImg11}></img>
                          {/* <ServiceCard style={{ width: '95%' }}
                          key={0}
                          {...services[0]}
                        /> */}
                        </div>


                      } position="center">
                        <div className="parentOfpop">
                          <div className="pop-cards">
                            <img className="proj-imgbx" src={projImg11} onClick={() => setCurrentImage1(projImg11)} alt="" srcset="" />
                            <img className="proj-imgbx" src={projImg12} onClick={() => setCurrentImage1(projImg12)} alt="" srcset="" />
                            <img className="proj-imgbx" src={projImg13} onClick={() => setCurrentImage1(projImg13)} alt="" srcset="" />
                            {/* {service1.map((service, index) => {
                            return (
                              <div>
                                <ServiceCard style={{ aspectRatio: '3/2', objectFit: 'contain', }}
                                key={index}
                                onClick={()=>{console.log(PopUp);}}
                                {...service}
                                />
                              </div>
                            )
                          })
                          } */}

                          </div>
                          <div><img style={{borderRadius:'20px'}} src={currentImage1} alt="" /></div>

                        </div>
                      </Popup>
                      <Popup trigger={
                        <div style={{ display: 'contents', width: '95%' }}>
                          {/* <ServiceCard
                          {...services[1]}
                        /> */}
                          <img className="proj-imgbx" src={projImg21} alt="" srcset="" />
                        </div>
                      } position="center">
                        <div className="parentOfpop">
                          <div className="pop-cards">
                            <img className="proj-imgbx" src={projImg21} onClick={() => setCurrentImage2(projImg21)} alt="" srcset="" />
                            <img className="proj-imgbx" src={projImg23} onClick={() => setCurrentImage2(projImg23)} alt="" srcset="" />
                            <img className="proj-imgbx" src={projImg22} onClick={() => setCurrentImage2(projImg22)} alt="" srcset="" />
                            {/* {services.map((service, index) => {
                            return (
                              <ServiceCard style={{ aspectRatio: '3/2', objectFit: 'contain', }}
                                key={index}
                                {...service}
                              />
                            )
                          })
                          } */}

                          </div>
                          <div><img src={currentImage2} alt="" /></div>

                        </div>
                      </Popup>

                      <Popup trigger={
                        <div style={{ display: 'contents', width: '95%' }}>
                          <img className="proj-imgbx" src={projImg3} alt="" srcset="" />
                          {/* <ServiceCard
                          {...services[2]}
                        /> */}
                        </div>
                      } position="center">
                        <div className="parentOfpop">
                          <div className="pop-cards">
                            {/* {services.map((service, index) => {
                            return (
                              <ServiceCard style={{ aspectRatio: '3/2', objectFit: 'contain', }}
                                key={index}
                                {...service}
                              />
                            )
                          })
                          } */}

                          </div>
                          <div><img src={projImg3} alt="" /></div>

                        </div>
                      </Popup>
                    </div>

                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {/* {
                      service1.map((service2, index) => {
                        return (
                          <ServiceCard
                            key={index}
                            {...service2}
                          />
                        )
                      })
                    } */}
                    <h3>More will be soon..</h3>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
            {/* </div> */}
            {/* } */}
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
