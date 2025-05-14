"use client"
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import SliderImg2 from "../image/home-slider-img-02.png"
import SliderImg1 from "../image/home-slider-img-01.png"
import Sliderblob from "../image/hslider-blob.png"
import BtnArrow from "../image/btnarrow.svg"
import Scissorsimg from "../image/Scissors.png"
import SvgArrowR from "../image/svg-arrow-r.png"
import SvgArrowL from "../image/svg-arrow-l.png"
import ABCScale from "../image/ABC-Scale.png"
import BackPack from "../image/Back-Pack.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";



export default function Firstbanner() {
  let sliderRef = useRef(null);
  let tl = gsap.timeline()

  useGSAP(() => {

    tl.from(".sliderImg1", {
      y: 550,
      opacity: 0,
      ease: "elastic.out(0.5,0.5)",
      duration: 1.5,
      stagger: 0.5,
    })
    tl.from(".sliderblob", {
      ease: "elastic",
      scale: 1,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    }, "-=1")
    tl.from(".sliderImg2", {
      top: -500,
      opacity: 0,
      ease: "elastic.out(0.5,0.5)",
      duration: 1.5,
      stagger: 0.5,
    }, "-=1")
    tl.from(".BackPack", {
      x: 100,
      y: -50,
      opacity: 0,
      ease: "elastic.out(0.5,0.5)",
      duration: 1.5,
      stagger: 0.5,
    }, "-=1")

    let tl2 = gsap.timeline()

    tl2.from(".arrowRLamine", {
      x: 600,
      opacity: 0
    })
    tl2.from(".firstbannertxtContent h2", {
      y: 100,
      opacity: 0
    })
    tl2.from(".firstbannertxtContent h1", {
      y: 100,
      opacity: 0
    })
    tl2.from(".firstbannertxtContent p", {
      y: 90,
      opacity: 0
    })
    tl2.from(".firstbannerbtn", {
      y: 80,
      opacity: 0
    })


    gsap.from(".sliderblob", {
      scale: 1.1,
      duration: 1.5,
      delay: 1,
      repeat: -1,
      yoyo: 1
    })

    gsap.from(".sliderImg2", {
      y: -10,
      duration: 1,
      repeat: -1,
      yoyo: 1
    })

    gsap.to(".abcSale", {
      rotate: 20,
      repeat: -1,
      duration: 2,
      yoyo: 1
    })


  })


  const quotes = [
    {
      head2: "Greater Learning",
      head1: "Discover, Engage, Develop, and Enjoy!",
      para: "Vitae elementum curabitur vitae nunc sed. Dictum varius duis at consectetur lorem donec. Nunc eget lorem dolor sed viverra ipsum nunc. Ac tortor vitae purus faucibus ornare.",
    },
    {
      head2: "Personal Attention",
      head1: "Child Focused Experiential Learning",
      para: "Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Semper risus in hendrerit gravida rutrum quisque non. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
    },
    {
      head2: "High Standard",
      head1: "Play-Based Young Learning System",
      para: "Cras adipiscing enim eu turpis egestas pretium. Fringilla ut morbi tincidunt augue interdum velit euismod in. Scelerisque eleifend donec pretium vulputate.",
    }
  ];

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };


  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",

  };


  return (
    <>
      <section className="firstbanner px-20 overflow-hidden">
        <div className="firstbannerinnerSec flex justify-between ">

          <div className="firstbannerimg ">


            <div className="firstbannerimg2">
              <Image className="sliderImg2" src={SliderImg2} alt="Slider Img2" />
            </div>

            <div className="firstbannerimg1">
              <Image className="sliderImg1" src={SliderImg1} alt="Slider Img1" />
            </div>

            <div className="firstbannerimg3">
              <Image src={Sliderblob} className="sliderblob" alt="Slider blob" />
            </div>

            <Image src={BackPack} alt="BackPack" className="BackPack" />

          </div>


          <div className="firstbannertxtSec pt-4 " id="firstbannertxtSec">


            <div className="scissorsDiv flex justify-between items-center">
              <Image src={Scissorsimg} className="scissorsimg" alt="Scissors img" />

              <svg className="starSvg" x="0px" y="0px" viewBox="0 0 212 210" >	<path d="M162.3,190.5c-11.1-25.6-22.1-51.2-33.2-76.8c18.6,8.7,37.2,17.4,55.8,26.1c10.2,4.8,18.3-10.5,8.1-15.3 c-16.5-7.7-33-15.4-49.4-23.1c18.1-4.9,36.1-9.9,54.2-14.8c10.9-3,5.3-19.3-5.6-16.3c-21.3,5.8-42.7,11.7-64,17.5 c9.8-16.2,20-32.1,30.7-47.8c6.3-9.2-9.4-17-15.7-7.9c-10.3,15-20.1,30.3-29.5,45.8C104.4,56.7,95.2,35.3,86,14 c-4.4-10.1-21.1-4.8-16.7,5.5C77.9,39.2,86.4,59,94.9,78.8C73.7,68.9,52.6,59,31.4,49.1c-10.2-4.8-18.3,10.5-8.1,15.3 c23.5,11,46.9,21.9,70.4,32.9c-26.5,7.2-53,14.5-79.5,21.7c-10.9,3-5.3,19.3,5.6,16.3c24.1-6.6,48.1-13.2,72.2-19.7 C82,134,72.5,152.8,63.6,171.8c-4.7,10.1,11,17.9,15.7,7.9c9.9-21.3,20.6-42.3,32.1-62.9c11.4,26.4,22.8,52.8,34.2,79.2 C149.9,206.1,166.7,200.8,162.3,190.5L162.3,190.5z"></path></svg>
            </div>


            {/* <div className="firstbannertxtContent py-2 pb-3">

              <h2>GREATER LEARNING</h2>
              <h1>Discover, Engage, Develop, and Enjoy!</h1>
              <p>Vitae elementum curabitur vitae nunc sed. Dictum varius duis at consectetur lorem donec. Nunc eget lorem dolor sed viverra ipsum nunc. Ac tortor vitae purus faucibus ornare.</p>
              <button className="firstbannerbtn flex items-center gap-2">GET STARTED<Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
            </div> */}


            <div className="slider-container  ">
              <Slider {...settings} ref={slider => (sliderRef = slider)}>
                {quotes.map((q, index) => (


                  <div className="firstbannertxtContent py-2 pb-3" key={index}>

                    <h2>{q.head2}</h2>
                    <h1>{q.head1}</h1>
                    <p>{q.para}</p>
                    <button className="firstbannerbtn flex items-center gap-2">GET STARTED<Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                  </div>

                ))}
              </Slider>
            </div>




            <div className="SvgArrowDiv flex gap-2">
              <Image src={SvgArrowL} alt="Svg Arrow L" className="arrowRLamine cursor-pointer" onClick={previous} />
              <Image src={SvgArrowR} alt="Svg Arrow r" className="arrowRLamine cursor-pointer" onClick={next} />
              <Image src={ABCScale} className="abcSale" alt="abc Scale img" />

            </div>


          </div>
        </div>
      </section>

    </>
  );
}