"use client"

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { FaStar } from "react-icons/fa";
import SvgTestimonCloud1 from "../image/svgTestimonCloud1.svg"
import SvgTestimonCloud2 from "../image/svgTestimonCloud2.svg"
import SvgTestimonCloud3 from "../image/svgTestimonCloud3.svg"
import TestimonialImg1 from "../image/testimonial-style.jpg"
import TestimonialImg2 from "../image/testimonial-style-02.jpg"
import TestimonialImg3 from "../image/testimonial-style-03.jpg"
import TestimonialImg4 from "../image/testimonial-style-04.jpg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function SectionEleven() {

    gsap.registerPlugin(ScrollTrigger)


    useGSAP(() => {


        gsap.from(".testimonialDiv h3", {
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".testimonialDiv",
                scroller: "body",

                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".testimonialDiv h2", {
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".testimonialDiv",
                scroller: "body",

                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".testimonBoxAnime", {
            y: 300,
            opacity: 0,
            delay: 2,
            scrollTrigger: {
                trigger: ".testimonialDiv",
                scroller: "body",

                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

    })


    const quotes = [
        {
            quote: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.",
            author: "Renzo Eikes Mom",
            image: TestimonialImg1,
            image1: SvgTestimonCloud1
        },
        {
            quote: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.",
            author: "Renzo Eikes Mom",
            image: TestimonialImg2,
            image1: SvgTestimonCloud2
        },
        {
            quote: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.",
            author: "Renzo Eikes Mom",
            image: TestimonialImg3,
            image1: SvgTestimonCloud3
        },
        {
            quote: "Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.",
            author: "Renzo Eikes Mom",
            image: TestimonialImg4,
            image1: SvgTestimonCloud2
        }
    ];


    const settings = {
        dots: true,
        arrow: true,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: true,
                arrow: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                cssEase: "linear",
              }
            }
          ]
    };




    return (
        <>
            <section className="SectionEleven pt-32 pb-24">

                <div className="testimonialDiv pb-20 text-center">
                    <h3>TESTIMONIAL</h3>
                    <h2>What Parents Say</h2>
                </div>

               

                <div className="slider-container  ">
                    <Slider {...settings}>
                        {quotes.map((q, index) => (
                            <div className="testimonBoxAnime flex px-4 gap-6" key={index}>

                            <div className="testimonBox" >
                                <div className="testimonBoxInnerDiv" >
                                    <Image src={q.image1} alt="SvgTestimonCloud1" className="SvgTestimonCloud1" />
                                    <div className="testimonBoxInnerDivContent flex flex-col items-center text-center ">
                                        <div className=" flex  justify-center gap-3 mb-3">
                                            <FaStar className="starTestimon" /><FaStar className="starTestimon" /><FaStar className="starTestimon" /><FaStar className="starTestimon" /><FaStar className="starTestimon" />
                                        </div>
                                        <p> {q.quote}</p>
                                    </div>
                                </div>

                                <div className="testiauthor flex items-center gap-5 pl-16 mt-4">
                                    <Image src={q.image} alt="TestimonialImg1" className="TestimonialImg1" />
                                    <h2 className="testimonNameH2">{q.author}</h2>
                                </div>
                            </div>
                            </div>
                        ))}
                    </Slider>
                </div>





              

            </section>
        </>
    )
}