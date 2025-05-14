'use client'

import Image from "next/image";
import StarSvg1 from "../image/starsvg1.png"
import StarSvg2 from "../image/starsvg2.png"
import ThirdSecSvg1 from "../image/thirdSecSvg1.svg"
import ThirdSecSvg2 from "../image/thirdSecSvg2.svg"
import ThirdSecSvg3 from "../image/ThirdSecSvg3.svg"
import ThirdSecSvg4 from "../image/ThirdSecSvg4.svg"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function SectionmyThree() {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {

let tl = gsap.timeline({
  scrollTrigger:{
    trigger:".secthreeTxt",
    scroller:"body",
    start:"top 80%",
    end:"top 70%",
    scrub: 1,
}
})

tl.from(".secthreeTxt",{
  y:100,
  opacity:0,
 duration:2,
})

tl.from(".starSvg1",{
  x:-100,
  opacity:0,
  
})

tl.from(".starSvg2",{
  x:100,
  opacity:0,
  
})

tl.from(".thirdSecAnime",{
  y:100,
  opacity:0,
})

const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (window.innerWidth / 2 - clientX) / 20;
            const y = (window.innerHeight / 2 - clientY) / 20;
      
            gsap.to(".starSvg1", {
              x: x,
              y: y,
              duration: 0.5,
              ease: "power2.out",
            });

             gsap.to(".starSvg2", {
              x: -x,
              y: -y,
              duration: 0.5,
              ease: "power2.out",
            });
      
          };
      
          window.addEventListener("mousemove", handleMouseMove);
      
          return () => {
            window.removeEventListener("mousemove", handleMouseMove);
          };

 
    })



    return (
        <>
        
        <section className="thirdsection">
            <div className=" flex justify-center  items-center">
                <div className="starSvg1Div  ">
                    <Image src={StarSvg1} alt="StarSvg1" className="starSvg1" />
                </div>

                <div className="secthreeTxt flex flex-col items-center text-center">
                    <h2>Dedicated To Perfection</h2>
                   <h1>Building Good Foundation Of Knowledge</h1>
                </div>

                <div className="starSvg2Div ">
                    <Image src={StarSvg2} alt="StarSvg2" className="starSvg2" />
                </div>
            </div>

<section className="thirdSecAnime  ">
    <div className="thirdSecSecond flex  px-36 py-20">
        <div className="thirdSecInnerDiv flex flex-col items-center text-center">
          <Image src={ThirdSecSvg1} width={900} alt="Third Sec Svg" className="thirdSecSvg1" />
          <h2>Enhance Reading And Reasoning Skills.</h2>
          <p>Nulla facilisi. Aliquam maximus, ipsum convallis pellentesque, ante sem pulvinar eros, a iaculis augue odio.</p>
        </div>

        <div className="thirdSecInnerDiv flex flex-col items-center text-center">
          <Image src={ThirdSecSvg2} alt="Third Sec Svg" className="thirdSecSvg1" />
          <h2>High Standards For Security And Safety.</h2>
          <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras quis eleifend.</p>
        </div>

        <div className="thirdSecInnerDiv flex flex-col items-center text-center">
          <Image src={ThirdSecSvg3} alt="Third Sec Svg" className="thirdSecSvg1" />
          <h2>Clear And Genuine Communication With Parents.</h2>
          <p>Proin rutrum tristique arcu. Pellentesque turpis urna, sodales sit amet odio eu, ultricies tincidunt tellusneque.</p>
        </div>

        <div className="thirdSecInnerDiv thirdSecInnerDivlast flex flex-col items-center text-center">
          <Image src={ThirdSecSvg4} alt="Third Sec Svg" className="thirdSecSvg1" />
          <h2>Kids Are Free To Use Their Imaginations.</h2>
          <p>Vivamus ut malesuada mi. Sed ultricies, dolor non iaculis lacinia, metus lorem posuere purus, sit amet efficitur.</p>
        </div>
    </div>
</section>



        </section>
        
        </>
 
 
);
}