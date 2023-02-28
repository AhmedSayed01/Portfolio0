import React, { useState, useCallback, useEffect } from "react";
import people from "./data";
import colorSharp from "../assets/img/color-sharp.png"

// import Carousel from 'react-multi-carousel';


export const Reviews = () => {

    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const checkNumber = (number) => {
        if (number > people.length - 1) {
            return 0;
        }
        if (number < 0) {
            return people.length - 1;
        }
        return number;
    };
    // function for next and prev button
    // const prevPerson = () => {
    //     setIndex((index) => {
    //         let newIndex = index - 1;
    //         return checkNumber(newIndex);
    //     });
    // };
    // const nextPerson = () => {
    //     setIndex((index) => {
    //         let newIndex = index + 1;
    //         return checkNumber(newIndex);
    //     });
    // };
    const randomPerson = useCallback(() => {
        let rng = Math.floor(Math.random() * people.length);
        if (rng === index) {
            rng = index + 1;
        }
        setIndex(checkNumber(rng));
    }, []);
    useEffect(() => {
        const intervalID = setInterval(randomPerson, 6000);
        return () => clearInterval(intervalID);
    }, [randomPerson])
    return (
        <section className="Card">
            <h2>Reviews</h2>
            <div className="img-container" style={{ width: 150 }}>
                <img src={image} alt="" />
                <div className="quote">
                    <i className="fas fa-quote-right"></i>
                </div>
                <div class="circle"></div>
            </div>
            <p className="name">{name}</p>
            <p className="position">{job}</p>
            <p className="text">{text}</p>
            <div className="button-container">
                {/* <div>
                    <i onClick={prevPerson} className="fas fa-chevron-left"></i>

                    <i onClick={nextPerson} className="fas fa-chevron-right"></i>
                </div> */}
                {/* <button onClick={randomPerson}>Random Person</button> */}
            </div>
            {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
        </section>
    );
};
