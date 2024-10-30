"use client"
import Image from "next/image";
import InstaImga1 from "../image/instaImg1.png"
import InstaImga2 from "../image/instaImg2.png"
import InstaImga3 from "../image/instaImg3.png"
import InstaImga4 from "../image/instaImg4.png"
import InstaImga5 from "../image/instaImg5.png"
import InstaImga6 from "../image/instaImg6.png"




export default function SectionSixAbout() {
    return (
      <>
       
       <section className="SectionSixabout  py-14">

        <div className="Sixdiv flex justify-center items-center text-center">
            <h2>Follow Instagram<span> @ourinsta</span></h2>
        </div>

        <div className="instaImgDiv flex py-14 justify-start overflow-hidden">
            <Image src={InstaImga1} alt="InstaImga1" className="InstaImga1"  />
            <Image src={InstaImga2} alt="InstaImga1" className="InstaImga2"  />
            <Image src={InstaImga3} alt="InstaImga1" className="InstaImga1"  />
            <Image src={InstaImga4} alt="InstaImga1" className="InstaImga2"  />
            <Image src={InstaImga5} alt="InstaImga1" className="InstaImga1"  />
            <Image src={InstaImga6} alt="InstaImga1" className="InstaImga2"  />
        </div>

       </section>
  
      </>
    );
  }
  