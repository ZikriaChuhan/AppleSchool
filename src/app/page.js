
import "./style.css";

import Image from "next/image";
import CloudImg from "./image/cloudimg.png"
import FooterCloudImg from "./image/Footer-cloud-img.png"
import Header from "./components/header";
import Firstbanner from "./components/firstbanner";
import Aboutsec from "./components/aboubsec";
import SectionmyThree from "./components/sectionmythree";
import SectionmyFour from "./components/sectionfour";
import SectionmyFive from "./components/sectionfive";
import SectionSix from "./components/sectionsix";
import SectionSeven from "./components/sectionseven";
import SectionEight from "./components/sectionEight";
import SectionNine from "./components/sectionNine";
import SectionTen from "./components/sectionten";
import SectionEleven from "./components/sectionEleven";
import Footer from "./components/footer";


export default function Home() {
  return (
    <>
      
      <Header />

      {/* i am back */}

      <section >
        <Image src={CloudImg} className="cloudImgHome" alt="Cloud Img" />
      </section>
      
      <Firstbanner />

      <Aboutsec />

      <SectionmyThree />

      <SectionmyFour />

      <SectionmyFive />

      <SectionSix />

      <SectionSeven />

      <SectionEight />

      <SectionNine />

      <SectionTen />

      <SectionEleven />

      <div className="FooterCloudImgDiv">
        <Image src={FooterCloudImg} alt="FooterCloudImg" className="FooterCloudImg" />
      </div>
      
      <Footer /> 

    </>
  );
}
