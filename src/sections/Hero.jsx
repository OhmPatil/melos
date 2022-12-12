import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/hero.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import songs from "../utils/dummySongs";
import PlayerControls from "./PlayerControls";

// const images = [img1, img2, img3, img4, img5];

function Hero() {

  const slider = useRef(Slider)

  const [slideIndex, setSlideIndex] = useState(0)

  const settings = {
    centerMode: true,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    console.log(slideIndex);
  }, [slideIndex])

  return (
    <>
    <div className="w-[100vw] flex justify-center items-center">
    <div className="container">
      <div className="slider">
        <Slider ref={slider}{...settings}>
          {songs.map((song, index) => (
            <div className={index === slideIndex ? "slide slide-active": 'slide'} key={song.title}>
              <img src={song.image} alt="" />
              <div className="text-center text-white text-3xl font-semibold mt-6">{song.title}</div>
              <div className="text-center text-white text-opacity-80 text-xl">{song.artist}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </div>
  <PlayerControls song={songs[slideIndex]} nextClick={slider.current.slickNext} prevClick={slider.current.slickPrev}/>
  </>
  );
}

export default Hero;
