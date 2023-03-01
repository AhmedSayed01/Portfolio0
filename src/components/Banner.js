// import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import DownloadIcon from "../assets/img/download.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {

  
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState('');
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => { clearInterval(ticker) };
  // }, [text])

  // const tick = () => {
  // let i = loopNum % toRotate.length;
  // let fullText = toRotate[i];
  // let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

  // setText(updatedText);

  // if (isDeleting) {
  //   setDelta(prevDelta => prevDelta / 2);
  // }

  // if (!isDeleting && updatedText === fullText) {
  //   setIsDeleting(true);
  //   setIndex(prevIndex => prevIndex - 1);
  //   setDelta(period);
  // } else if (isDeleting && updatedText === '') {
  //   setIsDeleting(false);
  //   setLoopNum(loopNum + 1);
  //   setIndex(1);
  //   setDelta(500);
  // } else {
  //   setIndex(prevIndex => prevIndex + 1);
  // }
  // }

  return (
    <div>

      <section className="banner" id="home">
        <Container>
          <Row className="row-blob">

            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div>
                    {/* <span className="tagline">Welcome to my Portfolio</span> */}
                    <h1>Welcome to
                      my Portfolio <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'></span></h1>
                    <p>Hiiiii, I'm Ahmed Sayed</p> <p>I'm a ReactJS Web Developer from Egypt, Take a tour in my website and have a look at my humble skills, hobbies and some of my websites i made.</p>
                    <div className="CV-div">
                      <h4>My CV</h4>
                      <a className="CVa" target="_blank" href="https://drive.google.com/file/d/1Cnr5fqjlpk2C8PKy3qr7nYDkVYFjqfjb/view?usp=share_link">
                        <img src={DownloadIcon} alt="Download Icon" />
                      </a>
                    </div>
                    {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {/* <div className="animate__animated animate__zoomIn"> */}
                {/* <img id='thumb1' className="welcome-animation" src={headerImg1} alt="Header Img" /> */}
                {/* <img id='thumb2' className="welcome-animation" src={headerImg2} alt="Header Img" /> */}
                {/* <img id='thumb3' className="welcome-animation" src={headerImg3} alt="Header Img" /> */}
                {/* <img id='thumb4' className="welcome-animation" src={headerImg4} alt="Header Img" /> */}
                {/* </div> */}
                <div className="blob-container">
                  <div className="blob">
                    <div className="box1"></div>
                  </div>
                  {/* <div className="blob">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'rgb(65, 196, 241)' }}></stop>
                          <stop offset="100%" style={{ stopColor: 'rgb(74, 85, 104)' }}></stop>
                          <stop offset="100%" style={{ stopColor: 'rgb(40, 146, 187)' }}></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#gradient)">
                        <animate attributeName="d"
                          dur="10000ms"
                          repeatCount="indefinite"
                          values="
                          M461.5,316Q431,382,364.5,390.5Q298,399,236,442Q174,485,125.5,430Q77,375,45,312.5Q13,250,47.5,189Q82,128,134.5,91.5Q187,55,243.5,75Q300,95,368,105Q436,115,464,182.5Q492,250,461.5,316Z;
                          M405.5,302Q394,354,347.5,381Q301,408,239.5,440Q178,472,130.5,421.5Q83,371,95,310.5Q107,250,113.5,202.5Q120,155,158,119Q196,83,252,76.5Q308,70,342,114.5Q376,159,396.5,204.5Q417,250,405.5,302Z;
                          M457,311Q419,372,364.5,403Q310,434,249.5,435Q189,436,160.5,386Q132,336,76.5,293Q21,250,74.5,206Q128,162,166,136Q204,110,248,115.5Q292,121,360.5,120.5Q429,120,462,185Q495,250,457,311Z;
                          M389.5,294.5Q372,339,336.5,373Q301,407,240,437Q179,467,156,401Q133,335,114.5,292.5Q96,250,74,178Q52,106,117,72.5Q182,39,251,37.5Q320,36,337,105Q354,174,380.5,212Q407,250,389.5,294.5Z;
                          M461.5,316Q431,382,364.5,390.5Q298,399,236,442Q174,485,125.5,430Q77,375,45,312.5Q13,250,47.5,189Q82,128,134.5,91.5Q187,55,243.5,75Q300,95,368,105Q436,115,464,182.5Q492,250,461.5,316Z;
                          ">
                        </animate>
                      </path>
                    </svg>
                  </div> */}
                  {/* <div className="blob">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" width="100%" id="blobSvg">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: 'rgb(65, 196, 241)' }}></stop>
                          <stop offset="100%" style={{ stopColor: 'rgb(74, 85, 104)' }}></stop>
                          <stop offset="100%" style={{ stopColor: 'rgb(40, 146, 187)' }}></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#gradient)">
                        <animate attributeName="d"
                          dur="10000ms"
                          repeatCount="indefinite"
                          values="
                          M461.5,316Q431,382,364.5,390.5Q298,399,236,442Q174,485,125.5,430Q77,375,45,312.5Q13,250,47.5,189Q82,128,134.5,91.5Q187,55,243.5,75Q300,95,368,105Q436,115,464,182.5Q492,250,461.5,316Z;
                          M405.5,302Q394,354,347.5,381Q301,408,239.5,440Q178,472,130.5,421.5Q83,371,95,310.5Q107,250,113.5,202.5Q120,155,158,119Q196,83,252,76.5Q308,70,342,114.5Q376,159,396.5,204.5Q417,250,405.5,302Z;
                          M457,311Q419,372,364.5,403Q310,434,249.5,435Q189,436,160.5,386Q132,336,76.5,293Q21,250,74.5,206Q128,162,166,136Q204,110,248,115.5Q292,121,360.5,120.5Q429,120,462,185Q495,250,457,311Z;
                          M389.5,294.5Q372,339,336.5,373Q301,407,240,437Q179,467,156,401Q133,335,114.5,292.5Q96,250,74,178Q52,106,117,72.5Q182,39,251,37.5Q320,36,337,105Q354,174,380.5,212Q407,250,389.5,294.5Z;
                          M461.5,316Q431,382,364.5,390.5Q298,399,236,442Q174,485,125.5,430Q77,375,45,312.5Q13,250,47.5,189Q82,128,134.5,91.5Q187,55,243.5,75Q300,95,368,105Q436,115,464,182.5Q492,250,461.5,316Z;
                          ">
                        </animate>
                      </path>
                    </svg>
                  </div> */}
                </div>


              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}
