"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import SvgArrowR from "../image/svg-arrow-r.png"
import SvgArrowL from "../image/svg-arrow-l.png"
import Glr01 from "../image/glr-01.jpg"
import Glr02 from "../image/glr-02.jpg"
import Glr03 from "../image/glr-03.jpg"
import Glr04 from "../image/glr-04.jpg"
import Glr05 from "../image/glr-05.jpg"
import Glr06 from "../image/glr-06.jpg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function SectionTen() {

  gsap.registerPlugin(ScrollTrigger)


    useGSAP(() => {


        gsap.from(".secTenHead",{
            x:-300,
            opacity:0,
            scrollTrigger: {
                trigger: ".secTenHead",
                scroller: "body",
                
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".SvgArrowDiv2",{
            x:300,
            opacity:0,
            scrollTrigger: {
                trigger: ".secTenHead",
                scroller: "body",
             
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".SecTenAnime",{
            y:300,
            opacity:0,
            scrollTrigger: {
                trigger: ".secTenHead",
                scroller: "body",
            
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

    })

    const quotes = [
        {
          image: Glr01
        },
        {
          image: Glr02
        },
        {
          image: Glr03
        },
        {
          image: Glr04
        },
        {
          image: Glr05
        },
        {
          image: Glr06
        }
      ];

     

      const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              arrow: true,
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              cssEase: "linear",
            }
          }
        ]
        
      };


    return (
        <>
            <section className="SectionTen pt-32 pb-5">

                <div className="tenSevFirstDiv flex flex-wrap justify-between px-36 items-end pb-20">
                    <div className="secTenHead ">
                        <h3>EDUCATION SOLUTION</h3>
                        <h2>Learn & Enjoy Together</h2>
                    </div>

                    <div className="SvgArrowDiv2 flex gap-2">
                        <Image src={SvgArrowL} alt="Svg Arrow L" className="SvgArrowLR " />
                        <Image src={SvgArrowR} alt="Svg Arrow r" className="SvgArrowLR arrowNext" />
                    </div>
                </div>

                {/* <div className="SecTenAnime flex gap-10 overflow-x-hidden">
                    <Image src={Glr01} alt="Glr01" className="Glr01" />
                    <Image src={Glr02} alt="Glr01" className="Glr01" />
                    <Image src={Glr03} alt="Glr01" className="Glr01" />
                    <Image src={Glr04} alt="Glr01" className="Glr01" />
                    <Image src={Glr05} alt="Glr01" className="Glr01" />
                    <Image src={Glr06} alt="Glr01" className="Glr01" />
                </div> */}


                <div className="slider-container  mx-2">
      <Slider {...settings}>
      {quotes.map((q, index) => (
        <div className="SecTenAnime flex gap-10 "  key={index}>
       <Image src={q.image} alt={index} className="Glr01" />

        </div>
          
      ))}
      </Slider>
    </div>

            </section>
        </>
    )
}