'use client'
import Image from "next/image";
import TopMask from "../image/top-mask.svg"
import BottomMask from "../image/bottom-mask.svg"
import OfferImgH2 from "../image/offer-img-h2.webp"
import BtnArrow from "../image/btnarrow.svg"
import CloudImg from "../image/cloudimg2.png"
import Thunder from "../image/Thunder.png"
import StudyCap from "../image/study-cap.png"
import DrawStar from "../image/draw-star.png"
import Star3d from "../image/3d-star.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function SectionThreeAbout() {
    
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



    })



    return (
        <>
            <section className="SecThreeabout">
                <Image src={TopMask} alt="TopMask" className="TopMask" />

                <Image src={Thunder} alt="Thunder" className="thunder" />
                <Image src={StudyCap} alt="Study Cap" className="studyCap" />
                <Image src={DrawStar} alt="Draw Star" className="drawStar" />
                <Image src={Star3d} alt="Star 3d" className="star3d" />
                <Image src={Star3d} alt="Star 3d" className="star3d2" />
                <Image src={Star3d} alt="Star 3d" className="star3d3" />

                <div className="mainOfferSecDiv flex justify-start py-24 px-28">
                    <div className="offerSecDiv text-center flex flex-col justify-center items-center flex-wrap p-4">
                        <Image src={OfferImgH2} alt="OfferImgH2" className="OfferImgH2" />
                        <h3>Welcome To School</h3>
                        <h2>BIG OFFER</h2>

                        <div className="maintimmerdiv flex flex-wrap justify-center items-center gap-4">

                            <div className="offerTimerDiv">
                                <h4>00</h4>
                                <h5>Days</h5>
                            </div>
                            <span className="offerTimmerSpan">:</span>
                            <div className="offerTimerDiv">
                                <h4>00</h4>
                                <h5>Hrs</h5>
                            </div>
                            <span className="offerTimmerSpan">:</span>
                            <div className="offerTimerDiv">
                                <h4>00</h4>
                                <h5>Mins</h5>
                            </div>
                            <span className="offerTimmerSpan">:</span>
                            <div className="offerTimerDiv">
                                <h4>00</h4>
                                <h5>Secs</h5>
                            </div>

                        </div>
                        <button className="aboutofferbtn flex items-center gap-2">JOIN WITH US<Image className="aboutofferbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>

                    </div>
                </div>
                <Image src={BottomMask} alt="BottomMask" className="BottomMask" />

            </section>
        </>
    );
}