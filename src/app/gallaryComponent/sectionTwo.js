'use client'
import Link from "next/link";
import Image from "next/image";
import PenImg from "../image/pen-image.png"
import FlowerSvg from "../image/flowerSvg.svg"
import GalleryImg1 from "../image/galleryImg1.webp"
import GalleryImg2 from "../image/galleryImg2.webp"
import GalleryImg3 from "../image/galleryImg3.webp"
import GalleryImg4 from "../image/galleryImg4.webp"
import GalleryImg5 from "../image/galleryImg5.webp"
import GalleryImg6 from "../image/galleryImg6.webp"
import GalleryImg7 from "../image/galleryImg7.webp"
import GalleryImg8 from "../image/galleryImg8.webp"
import GalleryImg9 from "../image/galleryImg9.webp"
import GalleryImg10 from "../image/galleryImg10.webp"
import GalleryImg11 from "../image/galleryImg11.webp"
import GalleryImg12 from "../image/galleryImg12.webp"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function SectionTwoGallary() {

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

        tl.from(".coureAnimeDiv", {
            y: 500,
            opacity: 0,
        })

        tl.from(".coursebtn2", {
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
            y: -10,
            repeat: -1,
            duration: 2,
            yoyo: 1,

        })




    })





    return (
        <>

            <section className="secttwoGallary pt-32 pb-32 max-lg:px-5 max-lg:py-3">


                <div className="flex justify-evenly">
                    <div className="flowerPenDiv flex justify-between relative ">
                        <Image src={PenImg} alt="Pen Img" className="penimg" />
                        <Image src={FlowerSvg} alt="Flower Svg" className="flowerSvg" />
                    </div>
                    <div className="twogSectxtDiv ">
                        <h1>Explore Our Gallery</h1>
                        <h2>Sem integer vitae justo eget magna fermentum. Sed vulputate odio ut enim blandit volutpat maecenas volutpat.</h2>
                    </div>
                    <div className="flowerPenDiv ">
                        <Image src={FlowerSvg} alt="Flower Svg" className="flowerSvg1" />
                    </div>
                </div>


                <div className=" px-32 pt-28  max-lg:px-5 max-lg:pt-3">
                    <div className="grid grid-cols-4 max-lg:grid-cols-1 gap-4 ">

                        <div className="grid  gap-4 " >
                            <Image src={GalleryImg1} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                            <Image src={GalleryImg2} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                            <Image src={GalleryImg3} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        </div>
                        <div className="grid  gap-4 " >
                        <Image src={GalleryImg4} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        <Image src={GalleryImg10} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        <Image src={GalleryImg5} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        </div>
                        <div className="grid  gap-4 " >
                        <Image src={GalleryImg6} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        <Image src={GalleryImg7} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        <Image src={GalleryImg8} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        </div>
                        <div className="grid  gap-4 " >
                        <Image src={GalleryImg9} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        <Image src={GalleryImg3} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        <Image src={GalleryImg12} alt="GalleryImg" className="h-auto max-w-full rounded-lg" />
                        </div>


                    </div>
                </div>
            </section>
        </>

    );
}