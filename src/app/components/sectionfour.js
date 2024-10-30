'use client'
import Image from "next/image";
import Sponcer1 from "../image/sponcer-1.png"
import Sponcer2 from "../image/sponcer-2.png"
import Sponcer3 from "../image/sponcer-3.png"
import Sponcer4 from "../image/sponcer-4.png"
import Sponcer5 from "../image/sponcer-5.png"
import Sponcer6 from "../image/sponcer-6.png"
import Sponcer7 from "../image/sponcer-7.png"
import Sponcer8 from "../image/sponcer-8.png"
import Sponcer9 from "../image/sponcer-9.png"
import Sponcer10 from "../image/sponcer-10.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function SectionmyFour() {

    gsap.registerPlugin(ScrollTrigger)


    useGSAP(() => {

        gsap.from(".fouthSectxtDiv", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "elastic",
            scrollTrigger: {
                trigger: ".fouthSectxtDiv",
                scroller: "body",
                start: "top 80%",
                end: "top 65%",
                scrub: 3,
            },
        })

        gsap.from(".fourSecAnime", {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "elastic",
            scrollTrigger: {
                trigger: ".fourSecAnime",
                scroller: "body",
                start: "top 80%",
                end: "top 65%",
                scrub: 3,
            },
        })




    })
   


    return (
        <>
            <section className="FourthSection">
                <div className="fouthSectxtDiv flex flex-col items-center text-center">
                    <h2>A FATURE-RICH LMS</h2>
                    <h1>We've breen helping customers deliver eLearning in more than 10 countries</h1>
                </div>
                <div className="fourSecAnime px-36 pt-20 pb-36 gap-8 flex justify-center flex-wrap">
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer1} className="sponcer1" alt="Sponcer 1" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer2} className="sponcer2" alt="Sponcer 2" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer3} className="sponcer3" alt="Sponcer 3" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer4} className="sponcer4" alt="Sponcer 4" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer5} className="sponcer5" alt="Sponcer 5" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer6} className="sponcer6" alt="Sponcer 6" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer7} className="sponcer7" alt="Sponcer 7" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer8} className="sponcer8" alt="Sponcer 8" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer9} className="sponcer9" alt="Sponcer 9" /></div>
                    <div className="SponcerImgDiv bg-white "><Image src={Sponcer10} className="sponcer10" alt="Sponcer 10" /></div>
                </div>
            </section>
        </>

    );
}