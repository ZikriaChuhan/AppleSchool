'use client'
import Image from "next/image";
import BtnArrow from "../image/btnarrow.svg"
import Blog1 from "../image/blogImage1.jpg"
import Blog2 from "../image/blogImage2.jpg"
import Blog3 from "../image/blogImage3.jpg"
import Blog4 from "../image/blogImage4.jpg"
import Blog5 from "../image/blogImage5.jpg"
import Blog6 from "../image/blogImage6.jpg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export default function SectionTwoBlog() {
    
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {


        gsap.from(".sixSectxtDiv h2", {
            y: 300,
            opacity: 0,
            
        })
        gsap.from(".sixSectxtDiv h1", {
            y: 300,
            opacity: 0,
            
        })
      

        let tl = gsap.timeline()

        tl.from(".blogAnimeDiv .blogdiv",{
            y: 300,
            opacity: 0,
            scrollTrigger: {
                trigger: ".blogAnimeDiv",
                scroller: "body",
                start: "top 80%",
                end: "top 70%",
                scrub: 1,
            }
        })
       

    })




    return (
        <>

            <section className="SectionTwoBlog py-32 px-32 flex flex-col gap-20">

                    <div className="sixSectxtDiv ">
                        <h2>TAILORED CLASSES</h2>
                        <h1>Unique Approaches To Teaching Combined Technology & Learning.</h1>
                    </div>


                    <div className="blogAnimeDiv  grid grid-cols-3 max-lg:grid-cols-1 gap-12 justify-center items-center">


                        <div className="blogdiv flex flex-col gap-3 flex-wrap ">
                            <div className=" overflow-hidden rounded-2xl">
                            <Image src={Blog1} alt="Blog1" className="Blog1" />
                            </div>
                            <h3>Nursery<span> WDtadmin</span></h3>
                            <h2>The Ultimate Guide to Creating a Positive Classroom Environment.</h2>
                            <p>
                            Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.
                            </p>
                            <div>
                            <button className="coursebtn flex items-center gap-2">Read More<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                            
                        </div>

                        <div className="blogdiv flex flex-col gap-3 flex-wrap ">
                        <div className=" overflow-hidden rounded-2xl">
                            <Image src={Blog2} alt="Blog1" className="Blog1" />
                            </div>
                            <h3>Nursery<span> WDtadmin</span></h3>
                            <h2>The Ultimate Guide to Creating a Positive Classroom Environment.</h2>
                            <p>
                            Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.
                            </p>
                            <div>
                            <button className="coursebtn flex items-center gap-2">Read More<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>

                        <div className="blogdiv flex flex-col gap-3 flex-wrap ">
                        <div className=" overflow-hidden rounded-2xl">
                            <Image src={Blog3} alt="Blog1" className="Blog1" />
                            </div>
                            <h3>Nursery<span> WDtadmin</span></h3>
                            <h2>The Ultimate Guide to Creating a Positive Classroom Environment.</h2>
                            <p>
                            Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.
                            </p>
                            <div>
                            <button className="coursebtn flex items-center gap-2">Read More<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>

                        <div className="blogdiv flex flex-col gap-3 flex-wrap ">
                        <div className=" overflow-hidden rounded-2xl">
                            <Image src={Blog4} alt="Blog1" className="Blog1" />
                            </div>
                            <h3>Nursery<span> WDtadmin</span></h3>
                            <h2>The Ultimate Guide to Creating a Positive Classroom Environment.</h2>
                            <p>
                            Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.
                            </p>
                            <div>
                            <button className="coursebtn flex items-center gap-2">Read More<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                            
                        </div>

                        <div className="blogdiv flex flex-col gap-3 flex-wrap ">
                        <div className=" overflow-hidden rounded-2xl">
                            <Image src={Blog5} alt="Blog1" className="Blog1" />
                            </div>
                            <h3>Nursery<span> WDtadmin</span></h3>
                            <h2>The Ultimate Guide to Creating a Positive Classroom Environment.</h2>
                            <p>
                            Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.
                            </p>
                            <div>
                            <button className="coursebtn flex items-center gap-2">Read More<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>

                        <div className="blogdiv flex flex-col gap-3 flex-wrap ">
                        <div className=" overflow-hidden rounded-2xl">
                            <Image src={Blog6} alt="Blog1" className="Blog1" />
                            </div>
                            <h3>Nursery<span> WDtadmin</span></h3>
                            <h2>The Ultimate Guide to Creating a Positive Classroom Environment.</h2>
                            <p>
                            Maecenas sed ornare lacus, in placerat ante. In hac habitasse platea dictumst. Donec vel euismod metus.
                            </p>
                            <div>
                            <button className="coursebtn flex items-center gap-2">Read More<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                            </div>
                        </div>



                    </div>

                

            </section>

        </>
    );
}