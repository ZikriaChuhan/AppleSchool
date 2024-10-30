'use client'
import Link from "next/link";
import Image from "next/image";
import PenImg from "../image/pen-image.png"
import FlowerSvg from "../image/flowerSvg.svg"
import CourseImg1 from "../image/course-img1.jpg"
import BtnArrow from "../image/btnarrow.svg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function SectionSix() {

gsap.registerPlugin(ScrollTrigger)



    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sixSectxtDiv",
                scroller: "body",
                start: "top 80%",
                end: "top 60%",
                scrub: 1,
            }
        })

        tl.from(".sixSectxtDiv h2", {
            y: 300,
            opacity: 0,
        })

        tl.from(".sixSectxtDiv h1", {
            y: 300,
            opacity: 0,
        })

        tl.from(".penimg", {
            x: -300,
            opacity: 0,
        })

        tl.from(".flowerSvg", {
            x: -300,
            opacity: 0,
        })
        tl.from(".flowerSvg1", {
            x: 500,
            opacity: 0,
        })

        tl.from(".coureAnimeDiv",{
            y: 500,
            opacity: 0,
        })

        tl.from(".coursebtn2",{
            y: 500,
            opacity: 0,
            scrollTrigger: {
                trigger: ".coureAnimeDiv",
                scroller: "body",
                start: "top 90%",
                end: "top 80%",
                scrub: 1,
            }
        })

        gsap.from(".penimg", {
            y:-10,
            repeat: -1,
            duration: 2,
            yoyo: 1,
           
        })




    })





    return (
        <>
            <section className="SectionSix pt-32 pb-32">


                <div className="flex justify-evenly">
                    <div className="flowerPenDiv flex justify-between relative ">
                        <Image src={PenImg} alt="Pen Img" className="penimg" />
                        <Image src={FlowerSvg} alt="Flower Svg" className="flowerSvg" />
                    </div>
                    <div className="sixSectxtDiv ">
                        <h2>TAILORED CLASSES</h2>
                        <h1>Unique Approaches To Teaching Combined Technology & Learning.</h1>
                    </div>
                    <div className="flowerPenDiv ">
                        <Image src={FlowerSvg} alt="Flower Svg" className="flowerSvg1" />
                    </div>
                </div>


                <div className="coureAnimeDiv flex flex-wrap gap-6 justify-center pt-20 pb-20 ">
                    <div className="courseDiv">
                        <div className="courseImg1div overflow-hidden">
                        <Image src={CourseImg1} alt="CourseImg1" className="courseImg1" />
                        </div>
                        <h2 className="mt-6">Math League</h2>
                        <p className="mt-3">Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.</p>
                        <div className="flex justify-between items-center pt-8">
                            <h3><span>$69</span> $69 </h3>
                            <button className="coursebtn flex items-center gap-2">JOIN CLASS<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                        </div>
                    </div>

                    <div className="courseDiv">
                    <div className="courseImg1div overflow-hidden">
                        <Image src={CourseImg1} alt="CourseImg1" className="courseImg1" />
                        </div>
                        <h2 className="mt-6">Math League</h2>
                        <p className="mt-3">Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.</p>
                        <div className="flex justify-between items-center pt-8">
                            <h3><span>$69</span> $69 </h3>
                            <button className="coursebtn flex items-center gap-2">JOIN CLASS<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                        </div>
                    </div>

                    <div className="courseDiv">
                    <div className="courseImg1div overflow-hidden">
                        <Image src={CourseImg1} alt="CourseImg1" className="courseImg1" />
                        </div>
                        <h2 className="mt-6">Math League</h2>
                        <p className="mt-3">Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.</p>
                        <div className="flex justify-between items-center pt-8">
                            <h3><span>$69</span> $69 </h3>
                            <button className="coursebtn flex items-center gap-2">JOIN CLASS<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                        </div>
                    </div>

                    <div className="courseDiv">
                    <div className="courseImg1div overflow-hidden">
                        <Image src={CourseImg1} alt="CourseImg1" className="courseImg1" />
                        </div>
                        <h2 className="mt-6">Math League</h2>
                        <p className="mt-3">Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.</p>
                        <div className="flex justify-between items-center pt-8">
                            <h3><span>$69</span> $69 </h3>
                            <button className="coursebtn flex items-center gap-2">JOIN CLASS<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                        </div>
                    </div>

                    <div className="courseDiv">
                    <div className="courseImg1div overflow-hidden">
                        <Image src={CourseImg1} alt="CourseImg1" className="courseImg1" />
                        </div>
                        <h2 className="mt-6">Math League</h2>
                        <p className="mt-3">Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.</p>
                        <div className="flex justify-between items-center pt-8">
                            <h3><span>$69</span> $69 </h3>
                            <button className="coursebtn flex items-center gap-2">JOIN CLASS<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                        </div>
                    </div>

                    <div className="courseDiv">
                    <div className="courseImg1div overflow-hidden">
                        <Image src={CourseImg1} alt="CourseImg1" className="courseImg1" />
                        </div>
                        <h2 className="mt-6">Math League</h2>
                        <p className="mt-3">Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.</p>
                        <div className="flex justify-between items-center pt-8">
                            <h3><span>$69</span> $69 </h3>
                            <button className="coursebtn flex items-center gap-2">JOIN CLASS<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                        </div>
                    </div>

                </div>

                <div className=" flex justify-center">
                <Link href="/LMScourses">   <button className="coursebtn2   flex items-center gap-2">VIEW ALL COURSES<Image className="btnArrow" src={BtnArrow} alt="Btn Arrow" /> </button></Link> 

                </div>

            </section>
        </>

    );
}