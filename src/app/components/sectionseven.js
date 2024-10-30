"use client"
import Image from "next/image"
import HomeIcon3 from "../image/home-icon-3.png"
import HomeIcon2 from "../image/home-icon-2.png"
import HomeIcon1 from "../image/home-icon-1.png"
import TextImage1 from "../image/textimage1.png"
import TextImage2 from "../image/textimage2.png"
import TextImage3 from "../image/textimage3.png"
import SvgStarIcon from "../image/svgStaricon.svg"
import SpringArrowSvg from "../image/springArrowSvg.svg"
import BtnArrow from "../image/btnarrow.svg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function SectionSeven() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {

        gsap.from(".sevenSecfirstdiv h2",{
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".sevenSecfirstdiv",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
        gsap.from(".sevenSecfirstdiv h1",{
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".sevenSecfirstdiv",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".SevenDivBox",{
            x: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SevenDivBox",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".SevenDivBox .TextImage1",{
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SevenDivBox",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".SevenDivBox1",{
            x: -300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SevenDivBox1",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".SevenDivBox1 .TextImage2",{
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SevenDivBox1",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".SevenDivBox2",{
            x: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SevenDivBox2",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })

        gsap.from(".SevenDivBox2 .TextImage3",{
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".SevenDivBox2",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })


        gsap.from(".svgStarIcon", {
            y:-10,
            repeat: -1,
            duration: 2,
            yoyo: 1,
           
        })



    })


    return (
        <>
        <section className="SevenSection pt-20 px-32">

            <Image src={SpringArrowSvg} alt="Spring Arrow Svg" className="springArrowSvg SevenExtraAnmie" />
            <Image src={SvgStarIcon} alt="SvgStarIcon" className="svgStarIcon SevenExtraAnmie" />
            <svg className="starSvg12 SevenExtraAnmie" x="0px" y="0px" viewBox="0 0 212 210" >	<path d="M162.3,190.5c-11.1-25.6-22.1-51.2-33.2-76.8c18.6,8.7,37.2,17.4,55.8,26.1c10.2,4.8,18.3-10.5,8.1-15.3 c-16.5-7.7-33-15.4-49.4-23.1c18.1-4.9,36.1-9.9,54.2-14.8c10.9-3,5.3-19.3-5.6-16.3c-21.3,5.8-42.7,11.7-64,17.5 c9.8-16.2,20-32.1,30.7-47.8c6.3-9.2-9.4-17-15.7-7.9c-10.3,15-20.1,30.3-29.5,45.8C104.4,56.7,95.2,35.3,86,14 c-4.4-10.1-21.1-4.8-16.7,5.5C77.9,39.2,86.4,59,94.9,78.8C73.7,68.9,52.6,59,31.4,49.1c-10.2-4.8-18.3,10.5-8.1,15.3 c23.5,11,46.9,21.9,70.4,32.9c-26.5,7.2-53,14.5-79.5,21.7c-10.9,3-5.3,19.3,5.6,16.3c24.1-6.6,48.1-13.2,72.2-19.7 C82,134,72.5,152.8,63.6,171.8c-4.7,10.1,11,17.9,15.7,7.9c9.9-21.3,20.6-42.3,32.1-62.9c11.4,26.4,22.8,52.8,34.2,79.2 C149.9,206.1,166.7,200.8,162.3,190.5L162.3,190.5z"></path></svg>


            <div className="sevenSecfirstdiv text-center ">
                <h2>HOW WE WORKS</h2>
                <h1>What Makes Our Teaching Unique</h1>
            </div>

            <div className="SevenOurMissionMainDivs flex flex-col px-32 gap-16 py-32">

                <div className="SevenDivBox flex ml-40 justify-between">
                    <div>
                    <div className="sevenDivHeading flex">
                    <h2>Our Mission</h2>
                    <Image src={HomeIcon3} alt="Home Icon 3" className="homeIcon3" />
                    </div>
                    <div className="sevenDivpara flex flex-wrap pt-6">
                        <p>
                        Pellentesque habitant morbi tristique senectus et Cras quis eleifend quam. Proin rutrum tristique arcu. Pellentesque turpis urna, sodales sit amet odio eu, ultricies tincidunt tellus. Phasellus risus neque, luctus at ligula sit amet, sagittis congue orci. Vivamus ut malesuada mi.
                        </p>
                        <ul>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />Vulputate dignissim suspendisse</li>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />Nibh sed pulvinar proin gravida</li>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />A scelerisque purus semper eget</li>
                        </ul>
                    </div>
                    </div>
                    <div className="sevenDivImg">
                        <Image src={TextImage3} alt="Text Image 1" className="TextImage1"/>
                    </div>
                </div>

                
                <div className="SevenDivBox1 flex mr-40 justify-between">
                <div className="sevenDivImg">
                        <Image src={TextImage1} alt="Text Image 1" className="TextImage2"/>
                    </div>
                    <div>
                    <div className="sevenDivHeading flex">
                    <h2>Our Values</h2>
                    <Image src={HomeIcon2} alt="Home Icon 3" className="homeIcon3" />
                    </div>
                    <div className="sevenDivpara flex flex-wrap pt-6">
                        <p>
                        Pellentesque habitant morbi tristique senectus et Cras quis eleifend quam. Proin rutrum tristique arcu. Pellentesque turpis urna, sodales sit amet odio eu, ultricies tincidunt tellus. Phasellus risus neque, luctus at ligula sit amet, sagittis congue orci. Vivamus ut malesuada mi.
                        </p>
                        <ul>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />Vulputate dignissim suspendisse</li>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />Nibh sed pulvinar proin gravida</li>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />A scelerisque purus semper eget</li>
                        </ul>
                    </div>
                    </div>
                    
                </div>


                <div className="SevenDivBox2 flex ml-40 justify-between">
                    <div>
                    <div className="sevenDivHeading flex">
                    <h2>Our Vision</h2>
                    <Image src={HomeIcon1} alt="Home Icon 3" className="homeIcon3" />
                    </div>
                    <div className="sevenDivpara flex flex-wrap pt-6">
                        <p>
                        Pellentesque habitant morbi tristique senectus et Cras quis eleifend quam. Proin rutrum tristique arcu. Pellentesque turpis urna, sodales sit amet odio eu, ultricies tincidunt tellus. Phasellus risus neque, luctus at ligula sit amet, sagittis congue orci. Vivamus ut malesuada mi.
                        </p>
                        <ul>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />Vulputate dignissim suspendisse</li>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />Nibh sed pulvinar proin gravida</li>
                            <li><Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" />A scelerisque purus semper eget</li>
                        </ul>
                    </div>
                    </div>
                    <div className="sevenDivImg">
                        <Image src={TextImage2} alt="Text Image 1" className="TextImage3"/>
                    </div>
                </div>



            </div>
        </section>
        </>
    )}