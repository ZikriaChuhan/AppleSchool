import "../style.css";
import "./aboutStyle.css";

import Image from "next/image";
import CloudImg from "../image/cloudimg.png"
import FooterCloudImg from "../image/Footer-cloud-img.png"



import Header from "../components/header";
import BannerSectionAbout from "../aboutConponent/bannerSection";
import Aboutsec from "../components/aboubsec";
import SectionTowAbout from "../aboutConponent/sectionTwo";
import SectionSeven from "../components/sectionseven";
import SectionThreeAbout from "../aboutConponent/sectionThree";
import SectionFourAbout from "../aboutConponent/sectionFour";
import SectionFiveAbout from "../aboutConponent/sectionFive";
import SectionEleven from "../components/sectionEleven";
import SectionSixAbout from "../aboutConponent/sectionSix";
import Footer from "../components/footer";




export default function About() {
  return (
    <>
      <Header />

      <section>
        <Image src={CloudImg} className="cloudImgabout" alt="Cloud Img" />
      </section>

      <BannerSectionAbout />

      <Aboutsec/>

      <SectionTowAbout />

      <SectionSeven />

      <SectionThreeAbout />

      <SectionFourAbout />

      <SectionFiveAbout />

      <SectionEleven />

      <SectionSixAbout />

      <div className="FooterCloudImgDiv">
        <Image src={FooterCloudImg} alt="FooterCloudImg" className="FooterCloudImg" />
      </div>

      <Footer />


    </>
  );
}
