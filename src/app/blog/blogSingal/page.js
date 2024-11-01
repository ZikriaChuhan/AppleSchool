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
import BlogSingalboximg2 from "../../image/BlogSingalboximg2.svg"

import ContImg1 from "../../image/contImg1.webp"
import FooterCloudImg from "../../image/Footer-cloud-img.png"
import Blog1 from "../../image/blogImage1.jpg"
import { FaPhoneAlt, FaGlobe, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdLocationPin, MdEmail } from "react-icons/md";
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
        <h2 className=" text-center">Blog</h2>
        <div className="flex items-center justify-center gap-3">
          <h4>Home</h4>
          <span>/</span>
          <h3>Blog</h3>
        </div>
      </section>


      <section className="SectionSixLMS flex flex-wrap flex-col gap-28 px-32 pt-32 max-lg:px-5 max-lg:py-5">

        <div className=" flex max-lg:flex-wrap gap-12 relative justify-between ">

          <div className="blogSingaltab flex flex-col gap-3">

            <Image src={Blog1} alt="Blog1" className="blogSingalImg1" />
            <h2 className="blogSingalHeading">The Ultimate Guide to Creating a Positive Classroom Environment.</h2>

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
          </div>

          <div className="blogsingaltabsideMainDiv relative  flex flex-col gap-6">

            <div className="singaltabside flex flex-col  flex-nowrap whitespace-nowrap">
              <h2>Recent Categories:</h2>

              <div className=" flex flex-col gap-2 ">
                <h3 className=" py-2">Kindergarten </h3>
                <h3 className=" py-2">Nursery </h3>
                <h3 className=" py-2">Pre School </h3>
              </div>

              <h2>Recent Posts:</h2>
              <div className="recectpostdiv flex flex-wrap gap-2  whitespace-normal">
                <div className="recentblogSingalImgdiv  overflow-hidden">
                  <Image src={Blog1} alt="Blog1" className="recentblogSingalImg1" />
                </div>
                <div>
                  <h4>08 Mar</h4>
                  <h5 >The Ultimate Guide.</h5>
                </div>
              </div>
              <div className="recectpostdiv flex flex-wrap gap-2  whitespace-normal">
                <div className="recentblogSingalImgdiv  overflow-hidden">
                  <Image src={Blog1} alt="Blog1" className="recentblogSingalImg1" />
                </div>
                <div>
                  <h4>08 Mar</h4>
                  <h5 >The Ultimate Guide.</h5>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <div className="confroncolor  px-32 pt-14 pb-32 max-lg:px-5 max-lg:py-5 ">
        <div className="contfromAmin flex flex-wrap justify-between gap-5">

          <div className="contactFromDiv flex flex-col justify-evenly gap-5 ">
          <div className="inputDvi2 flex ">
              <textarea placeholder="Comment"></textarea>
            </div>
            <div className="inputDvi2 flex ">
              <input type="text" placeholder="Name" />
            </div>
            <div className="inputDvi2 flex">
              <input type="email" placeholder="Email Id" />
            </div>
            <div className="inputDvi2 flex ">
              <input type="text" placeholder="Phone Number" />
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
      </div>


      <div className="FooterCloudImgDiv">
        <Image src={FooterCloudImg} alt="FooterCloudImg" className="FooterCloudImg" />
      </div>

      <Footer />




    </>
  )
}
