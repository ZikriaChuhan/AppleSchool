"use client"
import "../../style.css";
import "../../aboutus/aboutStyle.css";
import "../LMScourses.css"
import "./courseSingal.css"
import "../../contactus/contactusStyle.css"


import Header from "@/app/components/header";
import Image from "next/image";
import CloudImg from "../../image/cloudimg.png"
import ProfileIcon from "../../image/profileIcon.jpg"
import AboutSvg1 from "../../image/aboutsvg1.png"
import AboutSvg2 from "../../image/aboutsvg2.png"
import AboutSvg3 from "../../image/aboutsvg3.png"
import AboutSvg4 from "../../image/aboutsvg4.png"
import TeamImg from "../../image/team-01.webp"
import TeamImg2 from "../../image/team-02.webp"
import TeamImg3 from "../../image/team-03.webp"
import ContImg1 from "../../image/contImg1.webp"
import StudentprofileIcon1 from "../../image/StudentprofileIcon1.jpg"
import TestimonialStyle from "../../image/testimonial-style.jpg"
import FooterCloudImg from "../../image/Footer-cloud-img.png"
import CourseImg1 from "../../image/course-img1.jpg"
import BtnArrow from "../../image/btnarrow.svg"
import { FaBook, FaPhoneAlt, FaGlobe, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
        <h2 className=" text-center">Math League</h2>
        <div className="flex items-center justify-center gap-3">
          <h4>Home</h4>
          <span>/</span>
          <h3>Math League</h3>
        </div>
      </section>


      <section className="SectionSixLMS flex flex-wrap flex-col gap-28 px-32 pt-32 ">
        <div className=" flex max-lg:flex-wrap gap-6">
          <div className="courseSingaImg1div overflow-hidden">
            <Image src={CourseImg1} alt="CourseImg1" className="courseSingalImg1" />
          </div>
          <div className="courseSingalDiv flex flex-col justify-center ">
            <div className=" flex flex-col gap-3  ">
              <h2 className="">Math League</h2>
              <p className="">Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.</p>
              <div className=" flex  gap-4">
                <div className=" flex gap-1">
                  <Image src={ProfileIcon} alt="ProfileIcon" className="ProfileIcon" />
                  <h4>Elspeth</h4>
                </div>
                <div className=" flex gap-1">
                  <FaBook className=" w-5 h-5" />
                  <h5>5 Curriculumn</h5>
                </div>
              </div>
            </div>
            <div className="flex items-center max-lg:pt-2 gap-3 pt-8">
              <h3><span>$69</span> $69 </h3>
              <button className="coursebtn flex items-center gap-2">JOIN CLASS<Image className="coubtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
            </div>
          </div>
        </div>

        <div className=" flex max-lg:flex-wrap gap-12 justify-between ">


          <Tabs>
            <TabList className=" mb-5">
              <Tab>About</Tab>
              <Tab>Curriculum</Tab>
              <Tab>Members</Tab>
              <Tab>Instructors</Tab>
            </TabList>

            <TabPanel>
              <div className="aboutSingaltab flex flex-col gap-3">
                <h2>Consequat Semper Viverranam</h2>
                <p>Suspendisse dignissim, velit sed mattis ultricies, urna sem auctor velit, convallis facilisis libero elit pellentesque metus. Curabitur porta dui sit amet ligula ullamcorper posuere. Pellentesque rutrum nulla vel tempus ullamcorper. Pellentesque lectus augue.</p>
                <p>Morbi condimentum nisi elit, mattis euismod nulla condimentum sed. Morbi ultrices vehicula dapibus. Proin imperdiet venenatis libero. Pellentesque sit amet aliquam nisl. Vestibulum at augue nec ligula cursus pharetra et id erat. Aenean nec nibh vel tellus commodo suscipit. Phasellus quis mi lobortis risus placerat sagittis. Morbi eu ligula vulputate, dignissim leo sed, laoreet lorem. Curabitur condimentum mattis lacus porta maximus. Donec lobortis, justo quis semper tristique, nibh leo tincidunt nisl, nec condimentum libero tellus vitae ex. Curabitur eget magna at lectus dapibus placerat. Sed ultrices augue eu mi scelerisque, nec luctus tortor tincidunt. Nullam vel malesuada nisi. Aenean auctor lectus nec mattis ullamcorper. Mauris lacinia cursus lectus, sit amet sagittis lectus porttitor at.</p>

                <div className="aboutSvgContent mt-8 flex flex-col gap-14">

                  <div className="aboutContentBox1 flex justify-start   flex-wrap gap-4">
                    <div className="aboutContentBox flex text-left items-center gap-4 ">
                      <Image src={AboutSvg1} alt="AboutSvg1" className="aboutsvg1" />
                      <h3>Child Friendly Environment</h3>
                    </div>

                    <div className="aboutContentBox flex text-left  items-center gap-4 ">
                      <Image src={AboutSvg2} alt="AboutSvg2" className="aboutsvg2" />
                      <h3>Real-Time Education</h3>
                    </div>
                  </div>
                  <div className="aboutContentBox1 flex justify-start   flex-wrap gap-4">
                    <div className="aboutContentBox flex text-left items-center gap-4 ">
                      <Image src={AboutSvg3} alt="AboutSvg3" className="aboutsvg3" />
                      <h3>Well-Built Infrastructure</h3>
                    </div>

                    <div className="aboutContentBox flex text-left  items-center gap-4 ">
                      <Image src={AboutSvg4} alt="AboutSvg4" className="aboutsvg4" />
                      <h3>Professional Staff Members</h3>
                    </div>
                  </div>

                  <div className="aboutContentBox1 flex justify-start   flex-wrap gap-4">
                    <div className="aboutContentBox flex text-left items-center gap-4 ">
                      <Image src={AboutSvg4} alt="AboutSvg4" className="aboutsvg5" />
                      <h3>Professional Staff Members</h3>
                    </div>

                    <div className="aboutContentBox flex text-left  items-center gap-4 ">
                      <Image src={AboutSvg4} alt="AboutSvg4" className="aboutsvg6" />
                      <h3>Professional Staff Members</h3>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col gap-5">

                <div className="curriculumtapContent gap-14 flex justify-between">
                  <div className=" flex  items-center gap-3">
                    <FaBook className=" w-5 h-5" />
                    <h5>Questions With Multiple Correct Answers</h5>
                  </div>
                  <div className=" flex items-center gap-2 ">
                    <h4>Preview</h4>
                    <IoMdTime className=" w-5 h-5" />
                    <h5>Duration : 45 mins</h5>
                  </div>
                </div>

                <div className="curriculumtapContent flex justify-between">
                  <div className=" flex items-center gap-3">
                    <FaBook className=" w-5 h-5" />
                    <h5>Placerat odio eu</h5>
                  </div>
                  <div className=" flex items-center gap-2 ">
                    <h4>Preview</h4>
                    <IoMdTime className=" w-5 h-5" />
                    <h5>Duration : 2 hrs</h5>
                  </div>
                </div>

                <div className="curriculumtapContent flex justify-between">
                  <div className=" flex items-center gap-3">
                    <FaBook className=" w-5 h-5" />
                    <h5>Augue sed facilisis rutrum</h5>
                  </div>
                  <div className=" flex items-center gap-2 ">
                    <h4>Preview</h4>
                    <IoMdTime className=" w-5 h-5" />
                    <h5>Duration : 1 d</h5>
                  </div>
                </div>

                <div className="curriculumtapContent flex justify-between">
                  <div className=" flex items-center gap-3">
                    <FaBook className=" w-5 h-5" />
                    <h5>Class aptent taciti</h5>
                  </div>
                  <div className=" flex items-center gap-2 ">
                    <h4>Preview</h4>
                    <IoMdTime className=" w-5 h-5" />
                    <h5>Duration : 2 d</h5>
                  </div>
                </div>

                <div className="curriculumtapContent flex justify-between">
                  <div className=" flex items-center gap-3">
                    <FaBook className=" w-5 h-5" />
                    <h5>Aliquet bibendum justo aliquet</h5>
                  </div>
                  <div className=" flex items-center gap-2 ">
                    <h4>Preview</h4>
                    <IoMdTime className=" w-5 h-5" />
                    <h5>Duration : 14 d</h5>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="Singalpagemembertab flex flex-col gap-5 ">
                <h3>Total number of Students in this course : 2</h3>
                <div className="SingalpagemembertabinnerDiv flex items-center gap-3 ">
                  <Image src={StudentprofileIcon1} alt="StudentprofileIcon1" className="StudentprofileIcon1" />
                  <h4>Wdtadmin</h4>
                </div>
                <div className="SingalpagemembertabinnerDiv flex items-center gap-3 ">
                  <Image src={TestimonialStyle} alt="StudentprofileIcon1" className="StudentprofileIcon1" />
                  <h4>JohanPakr</h4>
                </div>
                <div>

                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="">

                <div className=" flex justify-start flex-wrap items-center gap-6">
                  <div className="instructorDiv flex flex-col items-center justify-center text-center">
                    <Image src={TeamImg} alt="TeamImg" className="TeamImg" />
                    <h3>AURORA JACKSON</h3>
                    <p>English</p>
                  </div>

                  <div className="instructorDiv flex flex-col items-center justify-center text-center">
                    <Image src={TeamImg2} alt="TeamImg" className="TeamImg" />
                    <h3>AURORA JACKSON</h3>
                    <p>English</p>
                  </div>

                  <div className="instructorDiv flex flex-col items-center justify-center text-center">
                    <Image src={TeamImg3} alt="TeamImg" className="TeamImg" />
                    <h3>AURORA JACKSON</h3>
                    <p>English</p>
                  </div>


                </div>

              </div>
            </TabPanel>
          </Tabs>


          <div className="singaltabsideMainDiv flex flex-col gap-6">

            <h2>Course Info</h2>

            <div className="singaltabside flex flex-col flex-nowrap whitespace-nowrap">
              <div className="singaltabsideInnerDiv flex gap-3">
                <h3>Categories : </h3>
                <p> Language</p>
              </div>
              <div className="singaltabsideInnerDiv flex gap-3 ">
                <h3>Lessons : </h3>
                <p> 4</p>
              </div>
              <div className="singaltabsideInnerDiv flex gap-3">
                <h3>Quizzes : </h3>
                <p> 1</p>
              </div>
              <div className="singaltabsideInnerDiv flex gap-3">
                <h3>Duration : </h3>
                <p> 17 d 2 h 45 m</p>
              </div>
              <div className="singaltabsideInnerDiv flex gap-3">
                <h3>Capacity :</h3>
                <p> 50</p>
              </div>
            </div>

            <div className=" singaltabside2 flex flex-col flex-nowrap whitespace-nowrap">
              <h2>Contactus</h2>
              <div className="singaltabsideInnerDiv flex gap-3">
                <MdLocationPin />
                <p> 31489 Hudson Light, Port Jere, OR 47118</p>
              </div>
              <div className="singaltabsideInnerDiv flex gap-3 ">
                <MdEmail />
                <p>support@example.com</p>
              </div>
              <div className="singaltabsideInnerDiv flex gap-3">
              <FaPhoneAlt />
                <p>+00 123 456789</p>
              </div>
              <div className="singaltabsideInnerDiv flex gap-3">
              <FaGlobe />
                <p>www.appleexample.com</p>
              </div>
             
            </div>


          </div>

        </div>

      </section>

      <div className="confroncolor  px-32 pt-14 pb-32">
<div className="contfromAmin flex flex-wrap justify-between gap-5">

<div className="contactFromDiv flex flex-col justify-evenly gap-5 ">
    <div className="inputDvi2 flex ">
        <input type="text" placeholder="Name" />
    </div>
    <div className="inputDvi2 flex">
        <input type="email" placeholder="Email Id" />
    </div>
    <div className="inputDvi2 flex ">
        <input type="text" placeholder="Phone Number" />
    </div>
    <div className="inputDvi2 flex ">
        <textarea placeholder="Message"></textarea>
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
