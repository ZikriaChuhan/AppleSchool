'use client'
import Image from "next/image"
import BoyImg1 from "../image/icbox-filler-img-01.png"
import BgImg2 from "../image/icbox-filler-img-02.png"
import AnimeImg from "../image/anim-img-01.png"
import SvgTeleScop from "../image/svgtelescop.svg"
import SvgScolarIcon from "../image/svgScolarIcon.svg"
import SvgBinaryIcon from "../image/svgbinaryIcon.svg"
import SvgScolarCap from "../image/svgScolarCapIcon.svg"
import DashedArrow from "../image/dashedArrow.png"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";




export default function SectionEight() {

    gsap.registerPlugin(ScrollTrigger)


    useGSAP(() => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".secEightDiv1",
                scroller: "body",
                start: "top 60%",
                end: "top 50%",
                scrub: 1,
            }
        })

        tl.from(".boyImg1",{
            x:-300,
            opacity:0,
            ease: "elastic.out(0.5,0.5)",
        })
        tl.from(".BgImg2",{
            y:300,
            opacity:0,
            ease: "elastic.out(0.5,0.5)",
        })
        tl.from(".AnimeImg",{
            top:300,
            opacity:0,
            ease: "elastic.out(0.5,0.5)",
            stagger: 0.5,
        })

        gsap.from(".AnimeImg", {
            y:-10,
            repeat: -1,
            duration: 2,
            yoyo: 1,
           
        })

    })


    return (
        <>
        <section className="SectionEight flex   px-10 ">
            <div className="secEightInnerDiv flex pt-32  ">
                <div className="secEightDiv1 flex  items-end ">
                    <Image src={BgImg2} alt="BgImg2" className="BgImg2" />
                    <Image src={BoyImg1} alt="BoyImg1" className="boyImg1" />
                </div>
            </div>

            <div className="secEightInnerDiv2 pb-24">
                <div className="secEightDiv2 pb-24">
                    
                    <h3>LOVED BY KIDS</h3>
                    <h2>Join Today & Become Confident Learner</h2>
                    <Image src={AnimeImg} alt="AnimeImg" className="AnimeImg" />
                </div>

                <div className="eigthwebDiv flex flex-wrap justify-center gap-4">
                    <div className="secEigthDivBox flex flex-col gap-3 items-center text-center">
                    <Image src={DashedArrow} alt="DashedArrow" className="dashedArrow" />
                        <Image src={SvgTeleScop} alt="SvgTeleSco " className="SvgTeleSco"  />
                        <h2>1.Visit Our Website</h2>
                        <p>Bibendum enim facilisis gravida neque convallis a.</p>
                    </div>

                    <div className="secEigthDivBox pt-32 gap-3  flex flex-col items-center text-center">
                    <Image src={DashedArrow} alt="DashedArrow" className="dashedArrow1" />
                        <Image src={SvgScolarIcon} alt="SvgTeleSco" className="SvgTeleSco SvgScolarIcon " />
                        <h2>2.Choose Course</h2>
                        <p>Bibendum enim facilisis gravida neque convallis a.</p>
                    </div>

                    <div className="secEigthDivBox flex gap-3  flex-col items-center text-center">
                    <Image src={DashedArrow} alt="DashedArrow" className="dashedArrow" />
                        <Image src={SvgBinaryIcon} alt="SvgTeleSco" className="SvgTeleSco" />
                        <h2>3.Select Classes</h2>
                        <p>Bibendum enim facilisis gravida neque convallis a.</p>
                    </div>

                    <div className="secEigthDivBox flex gap-3  flex-col pt-32 items-center text-center">
                        <Image src={SvgScolarCap} alt="SvgTeleSco" className="SvgTeleSco SvgScolarIcon" />
                        <h2>4.Join Our School</h2>
                        <p>Bibendum enim facilisis gravida neque convallis a.</p>
                    </div>


                    
                </div>
            </div>
        </section>
        
        </>
    )}