import Image from "next/image";
import NewsletterStarSvg from "../image/newsletterStarSvg.svg"
import TeamImg from "../image/team-01.webp"
import TeamImg2 from "../image/team-02.webp"
import TeamImg3 from "../image/team-03.webp"
import TeamImg4 from "../image/team-04.webp"
 

export default function SectionFiveAbout() {
    return (
        <>
            <section className="SecFiveAbout py-10">
                <div className="fivetxtDiv flex flex-wrap justify-center gap-40 py-20">
                    <div className=" flex">
                        <h2>Incredible People Behind Incredible Students.</h2>
                        <Image src={NewsletterStarSvg} alt="NewsletterStarSvg" className="NewsletterStarSvg" />
                    </div>
                    <div>
                        <h4>
                        Sollicitudin ac orci phasellus sagittis aliquam malesuada bibendum arcu. posuere diam id ultrices cursus. Integer ipsum arcu, rutrum ac quam quis, vulputate efficitur sem. Duis eget condimentum odio. Nulla vel fermentum tellus.
                        </h4>
                    </div>
                </div>

                <div className=" flex justify-center flex-wrap items-center gap-6">
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

                    <div className="instructorDiv flex flex-col items-center justify-center text-center">
                        <Image src={TeamImg4} alt="TeamImg" className="TeamImg" />
                        <h3>AURORA JACKSON</h3>
                        <p>English</p>
                    </div>

                </div>
            </section>
        </>
    );
}