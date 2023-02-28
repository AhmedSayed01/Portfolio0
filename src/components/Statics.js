import React, { useState, useEffect/*,Component*/ } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/banner-bg.png";
import Carousel from 'react-multi-carousel';
// import { Transition } from "@headlessui/react";
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import Javascript from "../assets/img/javascript.png";
import Reactjs from "../assets/img/React.png";
import TrackVisibility from 'react-on-screen';
// import innerText from 'react-innertext';
// interface Props{
//     show?: boolean;
//     children: React.ReactNode;
// }
export const Statics = () => {

    // const [scrolled, setScrolled] = useState(false);
    // useEffect(() => {
    //     var number = document.getElementById("number");
    //     console.log(number);
    //     let counter = 0;
    //     const interval = setInterval(() => {
    //     if (counter==65){
    //             clearInterval();
    //         }
    //         else {
    //             counter += 1;
    //             innerText(
    //                 <p>{counter}%</p> 
    //               )
    //         }
    //     }, 30);
    //     fetch(URL).then(inter => interval);
    //     return () => clearInterval(interval);
    // const onScroll = () => {
    //     if (window.scrollY > 70) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // }

    // window.addEventListener("scroll", onScroll);

    // return () => window.removeEventListener("scroll", onScroll);
    // }, []);
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
    // const { show, children} =props;
    return (
        <section className="skill" id="skills" >
            <div className="container" responsive={responsive}>
                <div className="row">
                    <div className="col-12" >
                        <div className="skill-bx wow zoomIn" >
                            <h2>Skills</h2>
                            <br /><br />
                            {/* ////////// ITEM 1 ////////// */}
                            {/* <div className="item">
                                    <div className="skill1">
                                        <div className="outer">
                                            <div className="inner">
                                                <b>
                                                    65%
                                                </b>
                                                    <TrackVisibility>
                                                        {({ isVisible }) =>
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                    <defs>
                                                        <linearGradient id="GradientColor">
                                                            <stop offset="0%" stop-color="#3facd7" />
                                                            <stop offset="100%" stop-color="#00304b" />
                                                        </linearGradient>
                                                    </defs>
                                                            <circle className={isVisible ? "circle1" : ""} cx="80" cy="80" r="70" stroke-linecap="round" />
                                                </svg>
                                                        }
                                                    </TrackVisibility>

                                            </div>
                                        </div>
                                    </div>
                                </div> */}

                            <div style={{ display: 'flex', flexWrap: 'wrap' , margin: '0 auto', justifyContent: 'space-around' }}>
                                {/* ////////// ITEM 2 ////////// */}
                                <div className="item">
                                    <div >
                                        <div className="skill1">
                                            <div className="outer">
                                                <div className="inner">
                                                    <b>
                                                        {/* // ref={this.myRef}  */}
                                                        {/* {useEffect.inter} */}
                                                        95%
                                                    </b>
                                                    <TrackVisibility>
                                                        {({ isVisible }) =>
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                                <defs>
                                                                    <linearGradient id="GradientColor">
                                                                        <stop offset="0%" stop-color="#3facd7" />
                                                                        <stop offset="100%" stop-color="#00304b" />
                                                                    </linearGradient>
                                                                </defs>
                                                                <circle className={isVisible ? "circle2" : ""} cx="80" cy="80" r="70" stroke-linecap="round" />
                                                            </svg>
                                                        }
                                                    </TrackVisibility>

                                                </div>
                                            </div>
                                <img style={{width:'80%',marginTop:'35px'}} src={html} alt="" />
                                <br /><br />
                                            <h4>HTML</h4>
                                        </div>
                                    </div>

                                </div>

                                {/* ////////// ITEM 3 ////////// */}

                                <div className="item">

                                    <div >
                                        <div className="skill1">
                                            <div className="outer">
                                                <div className='inner'>
                                                    <b>
                                                        {/* // ref={this.myRef}  */}
                                                        {/* {useEffect.inter} */}
                                                        95%
                                                    </b>
                                                    <TrackVisibility>
                                                        {({ isVisible }) =>
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                                <defs>
                                                                    <linearGradient id="GradientColor">
                                                                        <stop offset="0%" stop-color="#3facd7" />
                                                                        <stop offset="100%" stop-color="#00304b" />
                                                                    </linearGradient>
                                                                </defs>
                                                                <circle className={isVisible ? "circle3" : ""} cx="80" cy="80" r="70" stroke-linecap="round" />
                                                            </svg>
                                                        }
                                                    </TrackVisibility>
                                                </div>
                                            </div>
                                <img style={{width:'80%',marginTop:'35px'}} src={css} alt="" />
                                <br /><br />
                                            <h4>CSS</h4>
                                        </div>
                                    </div>
                                </div>

                                {/* ////////// ITEM 4 ////////// */}
                                <div className="item">
                                    <div >
                                        <div className="skill1">
                                            <div className="outer">
                                                <div className="inner">
                                                    <b>
                                                        {/* // ref={this.myRef}  */}
                                                        {/* {useEffect.inter} */}
                                                        80%
                                                    </b>
                                                    <TrackVisibility>
                                                        {({ isVisible }) =>
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                                <defs>
                                                                    <linearGradient id="GradientColor">
                                                                        <stop offset="0%" stop-color="#3facd7" />
                                                                        <stop offset="100%" stop-color="#00304b" />
                                                                    </linearGradient>
                                                                </defs>
                                                                <circle className={isVisible ? "circle4" : ""} cx="80" cy="80" r="70" stroke-linecap="round" />
                                                            </svg>
                                                        }
                                                    </TrackVisibility>
                                                </div>
                                            </div>
                                    <img style={{marginTop:'35px',width:'80%'}} src={Javascript} alt="" />
                                    <br /><br />
                                            <h4>JavaScript</h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="item">
                                    <div >
                                        <div className="skill1">
                                            <div className="outer">
                                                <div className="inner">
                                                    <b>
                                                        {/* // ref={this.myRef}  */}
                                                        {/* {useEffect.inter} */}
                                                        65%
                                                    </b>
                                                    <TrackVisibility>
                                                        {({ isVisible }) =>
                                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                                <defs>
                                                                    <linearGradient id="GradientColor">
                                                                        <stop offset="0%" stop-color="#3facd7" />
                                                                        <stop offset="100%" stop-color="#00304b" />
                                                                    </linearGradient>
                                                                </defs>
                                                                <circle className={isVisible ? "circle1" : ""} cx="80" cy="80" r="70" stroke-linecap="round" />
                                                            </svg>
                                                        }
                                                    </TrackVisibility>
                                                </div>
                                            </div>
                                <img style={{marginTop:'35px',width:'80%'}} src={Reactjs} alt="" />
                                           <br /><br />
                                            <h4>React JS</h4>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    );
}
