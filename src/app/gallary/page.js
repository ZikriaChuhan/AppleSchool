import "./gallaryStyle.css"
import "../style.css";
import "../aboutus/aboutStyle.css";


import Image from "next/image";
import CloudImg from "../image/cloudimg.png"
import FooterCloudImg from "../image/Footer-cloud-img.png"

import Header from "../components/header";
import Footer from "../components/footer";
import BannerSectionGallary from "../gallaryComponent/gallaryBannerSection";
import SectionTwoGallary from "../gallaryComponent/sectionTwo";




export default function Blog() {
    return (
        <>

            <Header />

            <section>
                <Image src={CloudImg} className="cloudImgabout" alt="Cloud Img" />
            </section>

            <BannerSectionGallary />

            <SectionTwoGallary />

           

            <div className="FooterCloudImgDiv">
                <Image src={FooterCloudImg} alt="FooterCloudImg" className="FooterCloudImg" />
            </div>

            <Footer />


        </>
    );
}
