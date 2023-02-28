import React from "react";
import meter1 from "../assets/img/gaming.png";
import meter2 from "../assets/img/movies.png";
import meter3 from "../assets/img/music.png";
import meter4 from "../assets/img/chakra.png";
import meter5 from "../assets/img/sports1.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";


export const Client_carousel = () => {
  const responsive = {
    
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  

  return (
    <section className="client_carousel" id="hobbies">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="client_carousel-bx wow zoomIn">
                        <h2>Hobbies</h2>
                        <Carousel 
                        // style={{
                        //   loop:true,
                        //   autoPlay:true,
                        //   nav:true,
                        //   rewindNav:false,
                        //   responsive:{
                        //     0:{
                        //         items:1
                        //     },
                        //     600:{
                        //         items:3
                        //     },
                        //     1000:{
                        //         items:4
                        //     }
                        // }
                        // }}
                          responsive={responsive} style={{ margin: 'auto' , aspectRatio:'3/2',objectFit:'contain'}} showDots autoPlay autoPlaySpeed={4500} className="owl-carousel owl-theme client_carousel-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" style={{width:150,height:200,objectFit:'contain'}} /> 
                                <h4>Gaming</h4>
                            </div>
                            <div className="item" >
                                <img src={meter2} alt="Image" style={{width:150,height:200,objectFit:'contain'}}/>
                                <h4>Movies</h4>
                            </div>
                            <div className="item" >
                                <img src={meter3} alt="Image" style={{width:150,height:200,objectFit:'contain'}}/>
                                <h4>Music</h4>
                                
                            </div>
                            <div className="item" >
                                <img src={meter4} alt="Image" style={{width:150,height:200,objectFit:'contain'}}/>
                                <h4>Meditation</h4>
                            </div>
                            <div className="item" >
                                <img src={meter5} alt="Image" style={{width:150,height:200,objectFit:'contain'}}/>
                                <h4>Sports</h4>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
