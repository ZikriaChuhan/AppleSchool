"use client"
import "../../style.css";
import "../../aboutus/aboutStyle.css";
import "../../LMScourses/LMScourses.css"
import "./courseSingal.css"
import "../../contactus/contactusStyle.css"


import Header from "@/app/components/header";
import Image from "next/image";
import CloudImg from "../../image/cloudimg.png"
import BlogSingalboximg1 from "../../image/blogSingalboximg1.svg"
import BlogSingalboximg2 from "../../image/blogSingalboximg2.svg"
import EventDetail1 from "../../image/eventDetail1.webp"
import EventDetail2 from "../../image/eventDetail2.webp"
import ContImg1 from "../../image/contImg1.webp"
import FooterCloudImg from "../../image/Footer-cloud-img.png"
import Blog1 from "../../image/blogImage1.jpg"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import 'react-tabs/style/react-tabs.css';
import Footer from "@/app/components/footer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";



export default function CourseSingalPage() {


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

      <Header />

      <section>
        <Image src={CloudImg} className="cloudImgabout" alt="Cloud Img" />
      </section>

      <section className="aboutfirstbanner flex flex-col items-center justify-center ">
        <h2 className=" text-center">Even Detail</h2>
        <div className="flex items-center justify-center gap-3">
          <h4>Home</h4>
          <span>/</span>
          <h3>Even Detail</h3>
        </div>
      </section>


      <section className="SectionSixLMS flex flex-wrap flex-col gap-28 px-32 pt-32 pb-24 ">

        <div className=" flex max-lg:flex-wrap gap-12 relative justify-between ">

          <div className="blogSingaltab flex flex-col gap-3">

            <Image src={Blog1} alt="Blog1" className="blogSingalImg1" />
            <h2 className="blogSingalHeading">Game Day Event</h2>

            <p>Aenean dapibus massa sed urna dictum, in ornare magna vestibulum. In sit amet iaculis ligula. Phasellus eu felis euismod, suscipit sapien eu, consectetur orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Aenean volutpat neque blandit efficitur pellentesque. Proin non dolor justo. Nulla dictum, quam non pellentesque fringilla, tellus nulla tempor lorem, sed vulputate massa turpis quis justo. Phasellus vel dui leo. Nunc at ipsum imperdiet, congue purus eu, placerat nulla. Nam cursus nibh ipsum, ac porttitor felis feugiat vitae.
            </p>

            <div className="blogContentBox  text-left items-center gap-4 ">
              <h3>Senectus Et Netus Et Malesuada</h3>
              <p>Sonean dapibus massa sed urna dictum, in ornare magna vestibulum. In sit amet iaculis ligula. Phasellus eu felis euismod, suscipit sapien eu, consectetur orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.</p>
            </div>

            <div className="aboutContentBox1 flex justify-start   flex-wrap gap-4">

              <div className="aboutContentBox flex text-left  items-center gap-4 ">
                <Image src={BlogSingalboximg1} alt="AboutSvg2" className="aboutsvg2" />
                <h4>Amet Consectetur</h4>
              </div>
              <div className="aboutContentBox flex text-left  items-center gap-4 ">
                <Image src={BlogSingalboximg2} alt="AboutSvg2" className="aboutsvg2" />
                <h4>Pellentesque Sitera</h4>
              </div>
            </div>
            <p>Dapibus massa sed urna dictum, in ornare magna vestibulum. In sit amet iaculis ligula. Phasellus eu felis euismod, suscipit sapien eu, consectetur orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.</p>



            <div className=" flex w-full gap-5 ">
                  <Image src={EventDetail1} alt="EventDetail1" className="EventDetail1 w-2/5" />
                  <Image src={EventDetail2} alt="EventDetail2" className="EventDetail1 w-3/5" />
            </div>

            <div className="blogContentBox  text-left items-center gap-4 ">
              <h3>Senectus Et Netus Et Malesuada</h3>
              <p>Sonean dapibus massa sed urna dictum, in ornare magna vestibulum. In sit amet iaculis ligula. Phasellus eu felis euismod, suscipit sapien eu, consectetur orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.</p>
            </div>


          </div>

         

        </div>

      </section>

    


      <div className="FooterCloudImgDiv">
        <Image src={FooterCloudImg} alt="FooterCloudImg" className="FooterCloudImg" />
      </div>

      <Footer />




    </>
  )
}
