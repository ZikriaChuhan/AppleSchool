'use client'
import Image from "next/image";
import Contact24hr from "../image/contact24hr.svg"
import ContImg1 from "../image/contImg1.webp"
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function SectionTwoContact() {
    gsap.registerPlugin(ScrollTrigger)
    
    useGSAP(() => {


        gsap.from(".SectionTwoContact .contact24hrDiv", {
            x: -300,
            opacity: 0,  
        })
        gsap.from(".SectionTwoContact .contactparaDiv", {
            x: 300,
            opacity: 0,  
        })

        gsap.from(".contfromAmin .contactFromDiv", {
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".contfromAmin",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".contfromAmin .sayHolleDiv", {
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".contfromAmin",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".contlocAmin .contactlocationDiv1", {
            x: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".contlocAmin",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".contlocAmin .contactlocationDiv2", {
            scale: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: ".contlocAmin",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".contlocAmin .contactlocationDiv3", {
            x: -300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".contlocAmin",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
       

    })



    return (
        <>

            <section className="SectionTwoContact flex flex-col gap-10 px-32 py-32">

                <div className=" flex flex-wrap justify-between items-center">
                    <div className="contact24hrDiv flex gap-3 justify-center items-center">
                        <Image src={Contact24hr} alt="contact24hr" className="contact24hr" />
                        <h2>We&apos;re Here To Provide 24X7 Support</h2>
                    </div>

                    <div className="contactparaDiv">
                        <p>Aenean et tortor at risus. Rutrum tellus pellentesque eu tincidunt. urna, tempus ac lectus egravida bibendum nisi. Nulla consequat turpis vitae purus ultricies luctus. Phasellus leo tortor, blandit nec consequat eget, rhoncus ac nisl. Fusce dignissim metus sit amet felis auctor consectetur.</p>
                    </div>
                </div>


                <div className="contfromAmin flex flex-wrap justify-between gap-5">

                    <div className="contactFromDiv flex flex-col justify-evenly  gap-5">
                        <div className="inputDvi2 flex ">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="inputDvi2 flex">
                            <input type="email" placeholder="Email Id" />
                        </div>
                        <div className="inputDvi2 flex ">
                            <input type="text" placeholder="Phone Number" />
                        </div>
                        <div className="inputDvi2 flex ">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div>
                            <button className="LMScontactbtn">SUBMIT</button>
                        </div>
                    </div>


                    <div className="sayHolleDiv flex flex-col justify-center ">
                        <h2>Sat Hello!</h2>
                        <p>Tincidunt augue interdum velit euismod in. Aliquam lectus urna, tempus ac lectus et, gravida bibendum</p>
                        <Image src={ContImg1} alt="contImg1" className="contImg1" />
                        <h3>Enquries</h3>
                        <h4>info@example.com, contact@example.com</h4>
                        <div className=" flex justify-start items-center">
                            <FaLinkedinIn className="contactsocialIcon" />
                            <FaFacebookF className="contactsocialIcon" />
                            <CiInstagram className="contactsocialIcon" />
                        </div>
                    </div>

                </div>

                <div className="contlocAmin grid max-lg:gap-3 gap-16 max-lg:grid-cols-1 grid-cols-3">

                    <div className="contactlocationDiv contactlocationDiv1  flex flex-col gap-4 items-start">
                        <h3>USA</h3>
                        <div className="contactlocationInnerDiv">
                            <FaLocationDot className="contlocIcon" />
                            <p>No: 58 A, East Madison Street, MD, USA 4508</p>
                        </div>
                        <div className="contactlocationInnerDiv">
                            <FaPhone className="contlocIcon" />
                            <p>+00-123456789</p>
                        </div>
                        <div className="contactlocationInnerDiv">
                            <IoMdMail className="contlocIcon" />
                            <p>info@example.com</p>
                        </div>
                    </div>

                    <div className="contactlocationDiv contactlocationDiv2 flex flex-col gap-4 items-start">
                        <h3>Australia</h3>
                        <div className="contactlocationInnerDiv">
                            <FaLocationDot className="contlocIcon" />
                            <p>936 Kiehn Route, West Ned,Tennessee,Australia 11230</p>
                        </div>
                        <div className="contactlocationInnerDiv">
                            <FaPhone className="contlocIcon" />
                            <p>+000-123-456789</p>
                        </div>
                        <div className="contactlocationInnerDiv">
                            <IoMdMail className="contlocIcon" />
                            <p>contact@example.com</p>
                        </div>
                    </div>

                    <div className="contactlocationDiv contactlocationDiv3 flex flex-col gap-4 items-start">
                        <h3>Canada</h3>
                        <div className="contactlocationInnerDiv">
                            <FaLocationDot className="contlocIcon" />
                            <p>4059 Carling Avenue, Ottawa,Ontario,Canada,K1Z 7B5</p>
                        </div>
                        <div className="contactlocationInnerDiv">
                            <FaPhone className="contlocIcon" />
                            <p>+00123456789</p>
                        </div>
                        <div className="contactlocationInnerDiv">
                            <IoMdMail className="contlocIcon" />
                            <p>support@example.com</p>
                        </div>
                    </div>

                </div>


            </section>

        </>
    );
}