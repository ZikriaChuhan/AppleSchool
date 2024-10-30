import "../style.css";
import "../aboutus/aboutStyle.css";
import "./blogStyle.css"

import Image from "next/image";
import CloudImg from "../image/cloudimg.png"
import FooterCloudImg from "../image/Footer-cloud-img.png"
import BannerSectionBlog from "../blogComponent/blogBannerSection";
import Header from "../components/header";
import Footer from "../components/footer";
import SectionTwoBlog from "../blogComponent/sectiontwo";



export default function Blog() {
    return (
        <>

            <Header />

            <section>
                <Image src={CloudImg} className="cloudImgabout" alt="Cloud Img" />
            </section>

            <BannerSectionBlog />

            <SectionTwoBlog />

            <div className="FooterCloudImgDiv">
                <Image src={FooterCloudImg} alt="FooterCloudImg" className="FooterCloudImg" />
            </div>

            <Footer />


        </>
    );
}
