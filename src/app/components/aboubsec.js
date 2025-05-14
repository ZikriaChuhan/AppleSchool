'use client'

import Link from "next/link";
import Image from "next/image";
import AboutSvg1 from "../image/aboutsvg1.png"
import AboutSvg2 from "../image/aboutsvg2.png"
import AboutSvg3 from "../image/aboutsvg3.png"
import AboutSvg4 from "../image/aboutsvg4.png"
import AboutImg1 from "../image/aboutimg1.jpg"
import AboutImg2 from "../image/aboutimg2.jpg"
import BtnArrow from "../image/btnarrow.svg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';




export default function Aboutsec() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {


        gsap.from(".aboutAnime1",{
            x:-800,
            opacity:0,
            scrollTrigger:{
                trigger:".aboutAnime1",
                scroller:"body",
                start:"top 80%",
                end:"top 70%",
                scrub: 1,
            },
        })

        gsap.from(".aboutAnime2",{
            x:800,
            opacity:0,
            scrollTrigger:{
                trigger:".aboutAnime2",
                scroller:"body",
                start:"top 80%",
                end:"top 70%",
                scrub: 1,
            },
        })




     })




    return (
        <>

            <section className="aboutSection flex px-32 py-36 flex-wrap">
                <div className="aboutAnime1 w-1/2 pl-4 pt-2">
                    <div className="aboutContentDiv ">
                        <h2 className="">ABOUT US</h2>
                        <h1>Globally Recognized Interactive Preschool Education</h1>
                        <p>Gravida rutrum quisque non tellus orci ac auctor.. Aenean imperdiet sodales felis, ultricies ultricies metus faucibus non. Integer consequat ex lacus, in mattis nulla posuere in. Nam posuere feugiat lacus. Morbi suscipit erat felis, ac aliquam nibh.</p>
                    </div>
                    <div className="aboutSvgContent max-w-2xl mt-12 flex flex-col gap-14">

                        <div className="aboutContentBox1 flex justify-between flex-wrap gap-4">
                        <div  className="aboutContentBox flex text-left items-center gap-4 ">
                            <Image src={AboutSvg1} alt="AboutSvg1" className="aboutsvg1" />
                            <h3>Child Friendly Environment</h3>
                        </div>

                        <div  className="aboutContentBox flex text-left  items-center gap-4 ">
                            <Image src={AboutSvg2} alt="AboutSvg2" className="aboutsvg2" />
                            <h3>Real-Time Education</h3>
                        </div>
                        </div>
                        <div className="aboutContentBox1 flex justify-between   flex-wrap gap-4">
                        <div  className="aboutContentBox flex text-left items-center gap-4 ">
                            <Image src={AboutSvg3} alt="AboutSvg3" className="aboutsvg3" />
                            <h3>Well-Built Infrastructure</h3>
                        </div>

                        <div  className="aboutContentBox flex text-left  items-center gap-4 ">
                            <Image src={AboutSvg4} alt="AboutSvg4" className="aboutsvg4" />
                            <h3>Professional Staff Members</h3>
                        </div>
                        </div>

                        <div className="aboutContentBox1 flex justify-between   flex-wrap gap-4">
                        <div  className="aboutContentBox flex text-left items-center gap-4 ">
                            <Image src={AboutSvg4} alt="AboutSvg4" className="aboutsvg5" />
                            <h3>Professional Staff Members</h3>
                        </div>

                        <div  className="aboutContentBox flex text-left  items-center gap-4 ">
                            <Image src={AboutSvg4} alt="AboutSvg4" className="aboutsvg6" />
                            <h3>Professional Staff Members</h3>
                        </div>
                        </div>
                    </div>

                    <div className="aboutusbtvDiv flex items-center flex-wrap justify-center mt-14 mb-10 gap-5">
                    <Link href="/aboutus"> <button className="aboutbtn flex items-center gap-2">MORE ABOUT US<Image className="aboutbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button></Link>
                        <h4 className="aboutusbtvDivh4 underline">or $100/year with 14-days money-back guarantee</h4>
                    </div>

                </div>

                <div className="aboutAnime2 w-1/2 pr-3">
                    <div className="aboutFirstImgDiv flex justify-end gap-3" >
                        <Image src={AboutImg2}  alt="About Img1" className="aboutImg2" />
                        <video className="aboutvideo1" src="/image/aboutvideo1.mp4" muted autoPlay loop />
                    </div>
                    <div className="aboutFirstImgDiv mt-6 flex justify-end gap-3">
                        <video  className="aboutvideo1" src="/image/aboutvideo2.mp4" muted autoPlay loop />
                        <Image src={AboutImg1} alt="About Img1" className="aboutImg1" />
                    </div>
                </div>
            </section>


        </>
    );
}