'use client'
import Image from "next/image";
import ContactFormImg1 from "../image/contactFormImg1.jpg"
import ContactFormImg2 from "../image/contactFormImg2.jpg"
import DesignDots from "../image/design-dots.png"
import DesignRotate from "../image/design-rotate.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function SectionThreeLMS() {
    
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {


        gsap.from(".SectionthreeLMS .LMScontactSec1", {
            x: -300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SectionthreeLMS",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".SectionthreeLMS .LMScontactSec2", {
            x: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SectionthreeLMS",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
       

    })




    return (
        <>

            <section className="SectionthreeLMS flex justify-center flex-wrap items-center gap-6 px-32 pt-32 pb-36 ">
                <div className="LMScontactSec1 flex flex-col gap-8 w-2/5 ">
                    <div className="LMScontactImgDiv1 px-8">
                        <Image src={DesignRotate} alt="DesignRotate" className="designRotate" />
                        <Image src={ContactFormImg1} alt="ContactFormImg1" className="ContactFormImg1" />
                    </div>

                    <div className="LMScontactImgDiv2 px-8 flex justify-end">
                        <Image src={DesignDots} alt="DesignDots" className="designDots" />
                        <Image src={ContactFormImg2} alt="ContactFormImg1" className="ContactFormImg1" />
                    </div>
                </div>

                <div className="LMScontactSec2 w-1/2  flex flex-col gap-8  px-8">

                    <div className="fromtextDiv ">
                        <h3>CONTACT US</h3>
                        <h2>Our Education Sponcers</h2>
                        <p>Vestibulum mattis ullamcorper velit sed ullamcorper morbi volutpat. Proin consequat rhoncus dui, ut tincidunt nulla.</p>
                    </div>

                    <div className=" flex flex-col gap-5">
                        <div className="inputDvi1 flex gap-5">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="input-Dvi2 flex ">
                            <input type="text" placeholder="Phone Number" />
                        </div>

                        <div className="input-Dvi2 flex ">
                            <textarea placeholder="Message"></textarea>
                        </div>

                        <div>
                        <button className="LMScontactbtn">SUBMIT</button>
                        </div>

                    </div>
                </div>

            </section>


        </>
    );
}
