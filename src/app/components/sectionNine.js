"use client"
import Image from "next/image"
import Link from "next/link";
import BtnArrow from "../image/btnarrow.svg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function SectionNine() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {


        gsap.from(".secNineHead",{
            x:-300,
            opacity:0,
            scrollTrigger: {
                trigger: ".secNineHead",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".secNineH4",{
            x:300,
            opacity:0,
            scrollTrigger: {
                trigger: ".secNineHead",
                scroller: "body",
            
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".nineEvenAnim",{
            y:300,
            opacity:0,
            scrollTrigger: {
                trigger: ".secNineHead",
                scroller: "body",
             
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })


       
        })



    return (
        <>
            <section className="SectionNine px-36 pt-32 pb-5">
                <div>

                    <div className="NineSecHeadMain flex justify-between flex-wrap  items-end pb-20">
                        <div className="secNineHead ">
                            <h3>PHOTO GALLERY</h3>
                            <h2>Ideal Kids Special Events</h2>
                        </div>
                        <h4 className="secNineH4 text-center">View All Events</h4>
                    </div>

                    <div className="nineEvenAnim flex justify-between flex-wrap gap-y-10">

                      <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white">
                            <div className="eventFeatureImg8 eFImg8">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>

                        <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white">
                            <div className="eventFeatureImg8 eFImg7">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>

                        <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white">
                            <div className="eventFeatureImg8 eFImg6">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>

                        <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white">
                            <div className="eventFeatureImg8 eFImg5">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>

                        <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white">
                            <div className="eventFeatureImg8 eFImg4">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>

                        <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white ">
                            <div className="eventFeatureImg8 eFImg3">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>

                        <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white">
                            <div className="eventFeatureImg8 eFImg2">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>

                        <Link href="/even/evenSingal">
                        <div className="evenBox flex flex-wrap bg-white">
                            <div className="eventFeatureImg8 eFImg1">
                            
                            </div>
                            <div className="evenBoxContent ">
                                <div className="evenBoxbadge ">
                                    <h5>11 Feb</h5>
                                </div>
                                <h2>Teacher vs. Student Day</h2>
                                <h3>Feb 11 @ 6:00 am - Feb 13 @ 8:00 pm</h3>
                                <h3>Community Service Event, Australia</h3>
                                <button className="evenbtn flex items-center gap-2">View Events<Image className="evenbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>
                        </Link>


                    </div>


                </div>
            </section>
        </>
    )
}
