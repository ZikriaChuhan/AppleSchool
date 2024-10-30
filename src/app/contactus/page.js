import "../style.css";
import "../aboutus/aboutStyle.css";
import "./contactusStyle.css"

import Image from "next/image";
import CloudImg from "../image/cloudimg.png"
import FooterCloudImg from "../image/Footer-cloud-img.png"
import Header from "../components/header";
import Footer from "../components/footer";
import BannerSectionContact from "../contactConpontent/contactBannerSection";
import SectionTwoContact from "../contactConpontent/sectiontwo";



export default function ContactUS() {
    return (
        <>

            <Header />

            <section>
                <Image src={CloudImg} className="cloudImgabout" alt="Cloud Img" />
            </section>

            <BannerSectionContact />

            <SectionTwoContact />

            <div className="">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99370.15308112693!2d-77.09697639461747!3d38.89385915484789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC%2C%20USA!5e0!3m2!1sen!2s!4v1730154621343!5m2!1sen!2s" height="600" loading="lazy" className=" w-full max-lg:h-52"></iframe>
            </div>
          

            <div className="FooterCloudImgDiv -mt-24 max-lg:-m-4">
                <Image src={FooterCloudImg} alt="FooterCloudImg" className="contactfootercloud" />
            </div>

            <Footer />


        </>
    );
}



