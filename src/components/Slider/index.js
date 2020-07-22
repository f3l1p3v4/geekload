import React from "react";
import Slideshow from "./Slideshow";

import './custom.css';

import slide1 from '../../assets/featured/slide1.jpg';
import slide2 from '../../assets/featured/slide2.jpg';

const slides = [slide1, slide2];

const s = {
    container: "screenW screenH dGray col",
    header: "flex1 fCenter fSize2",
    main: "flex8 white",
    footer: "flex1 fCenter"
};


function Slider() {
        return (
            <div className={s.container}>
                {/* <div className={s.header}>Automatic Slideshow Carousel</div> */}
                <div className={s.main}>
                    <Slideshow slides={slides} />
                </div>
                {/* <div className={s.footer}>Built in React - by Ashwanth A R</div> */}
            </div>
        )
    }

export default Slider;