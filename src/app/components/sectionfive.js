'use client'
import Image from "next/image";
import BtnArrow from "../image/btnarrow.svg"
import CloudImg from "../image/cloudimg2.png"
import Thunder from "../image/Thunder.png"
import StudyCap from "../image/study-cap.png"
import DrawStar from "../image/draw-star.png"
import Star3d from "../image/3d-star.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function SectionmyFive() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {

        let tlfiv = gsap.timeline({
            scrollTrigger: {
                trigger: ".thunder",
                scroller: "body",
                start: "top 90%",
                end: "top 80%",
                scrub: 1,
            }
        })

        tlfiv.from(".thunder", {
            y: 300,
            opacity: 0,

        })

        tlfiv.from(".star3d", {
            y: 300,
            opacity: 0,

        })

        tlfiv.from(".drawStar", {
            y: 300,
            opacity: 0,

        })

        tlfiv.from(".star3d2", {
            y: 300,
            opacity: 0,

        })

        tlfiv.from(".star3d3", {
            y: 300,
            opacity: 0,

        })

        tlfiv.from(".studyCap", {
            y: 300,
            opacity: 0,

        })

        gsap.from(".studyCap", {
            rotate: 20,
            duration: 2,
            repeat: -1,
            yoyo: 1,

        })

        gsap.from(".drawStar", {
            rotate: 20,
            duration: 2,
            repeat: -1,
            yoyo: 1,

        })

        let tlfiv2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".fifthSectxtDiv",
                scroller: "body",
                start: "top 70%",
                end: "top 60%",
                scrub: 1,
            }
        })


        tlfiv2.from(".fifthSectxtDiv h2", {
            y: 100,
            opacity: 0
        })
        tlfiv2.from(".fifthSectxtDiv h1", {
            y: 100,
            opacity: 0
        })
        tlfiv2.from(".fifthSectxtDiv p", {
            y: 90,
            opacity: 0
        })
        tlfiv2.from(".fiveSecbtv", {
            y: 90,
            opacity: 0
        })




    })


    return (
        <>
            <section className="FifthSection">

                <Image src={Thunder} alt="Thunder" className="thunder" />
                <Image src={StudyCap} alt="Study Cap" className="studyCap" />
                <Image src={DrawStar} alt="Draw Star" className="drawStar" />
                <Image src={Star3d} alt="Star 3d" className="star3d" />
                <Image src={Star3d} alt="Star 3d" className="star3d2" />
                <Image src={Star3d} alt="Star 3d" className="star3d3" />

                <div className="fifthSecDiv ">
                    <div className="fifthSectxtDiv py-10 pl-20">
                        <h2>Play & Learn </h2>
                        <h1>Committed To Fun Filled Education.</h1>
                        <p>Diam quam nulla porttitor massa id neque aliquam vestibulum. Purus gravida quis blandit turpis cursus in hac habitasse platea. Senectus et netus et malesuada. Eget nullam non nisi est.</p>
                        <button className="fiveSecbtv flex items-center gap-2">GET STARTED<Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>

                    </div>
                </div>



                <div className="pt-24">
                    <Image src={CloudImg} className="cloudImg2" alt="Cloud Img" />
                </div>



            </section>
        </>

    );
}