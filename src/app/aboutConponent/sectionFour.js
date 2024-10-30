import Image from "next/image";
import OurprogramSection1 from "../image/ourprogramSection1.png"
import OurprogramSection2 from "../image/ourprogramSection2.png"
import OurprogramSection3 from "../image/ourprogramSection3.png"
import OurprogramSection4 from "../image/ourprogramSection4.png"
import AboutArrow1 from "../image/aboutArrow1.svg"
import AboutMask from "../image/aboutMask.png"


export default function SectionFourAbout() {
    return (
        <>
            <section className="SecFourabout ">
               
               <div className="SecfourtxtDiv pt-28 flex items-center flex-col text-center">
                <h3>KIDS EDUCATION</h3>
                <h2>Unique Place Where The Magic Of Learning Starts.</h2>
               </div>

               <div className="OurprogramMainSection flex flex-wrap justify-center gap-8 pt-40 pb-20">

                <div className="OurprogramSection flex flex-col items-center text-center ">
                    <Image src={OurprogramSection4} alt="OurprogramSection1" className="OurprogramSection1" />
                    <h2>Montessori</h2>
                    <p>Sit amet venenatis urna cursus. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Viverra nibh cras pulvinar mattis...</p>
                    <button className="OurprogramSectionbtn"><Image src={AboutArrow1} alt="AboutArrow1" className="AboutArrow1" /></button>
                </div>

                <div className="OurprogramSection flex flex-col items-center text-center ">
                    <Image src={OurprogramSection3} alt="OurprogramSection1" className="OurprogramSection1" />
                    <h2>Waldorf</h2>
                    <p>Sit amet venenatis urna cursus. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Viverra nibh cras pulvinar mattis...</p>
                    <button className="OurprogramSectionbtn"><Image src={AboutArrow1} alt="AboutArrow1" className="AboutArrow1" /></button>
                </div>

                <div className="OurprogramSection flex flex-col items-center text-center ">
                    <Image src={OurprogramSection2} alt="OurprogramSection1" className="OurprogramSection1" />
                    <h2>Reggio Emilia</h2>
                    <p>Sit amet venenatis urna cursus. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Viverra nibh cras pulvinar mattis...</p>
                    <button className="OurprogramSectionbtn"><Image src={AboutArrow1} alt="AboutArrow1" className="AboutArrow1" /></button>
                </div>

                <div className="OurprogramSection flex flex-col items-center text-center ">
                    <Image src={OurprogramSection1} alt="OurprogramSection1" className="OurprogramSection1" />
                    <h2>Bank Street</h2>
                    <p>Sit amet venenatis urna cursus. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Viverra nibh cras pulvinar mattis...</p>
                    <button className="OurprogramSectionbtn"><Image src={AboutArrow1} alt="AboutArrow1" className="AboutArrow1" /></button>
                </div>

               </div>

               <div>
                <Image src={AboutMask} alt="aboutMask" className="aboutMask" />
               </div>
                
            </section>
        </>
    );
}