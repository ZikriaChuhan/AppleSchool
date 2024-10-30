import "../style.css";
import "../aboutus/aboutStyle.css";
import "./LMScourses.css"

import Image from "next/image";
import CloudImg from "../image/cloudimg.png"
import FooterCloudImg from "../image/Footer-cloud-img.png"


import Header from "../components/header";
import BannerSectionLMScourses from "../LMScoursesComponent/lmsBannerSection";
import Footer from "../components/footer";
import SectionTwoLMS from "../LMScoursesComponent/lmsSectiontwo";
import SectionThreeLMS from "../LMScoursesComponent/lmsSectionThree";


export default function LMScourses() {
    return (
        <>

            <Header />

            <section>
                <Image src={CloudImg} className="cloudImgabout" alt="Cloud Img" />
            </section>

            <BannerSectionLMScourses />

            <SectionTwoLMS />

            <SectionThreeLMS />

            <div className="FooterCloudImgDiv">
                <Image src={FooterCloudImg} alt="FooterCloudImg" className="lmscloud" />
            </div>

            <Footer />


        </>
    );
}
