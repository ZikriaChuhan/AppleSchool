import Image from "next/image"
import BtnArrow from "../image/btnarrow.svg"

import NewsletterStarSvg from "../image/newsletterStarSvg.svg"
import Logo from "../image/logo.svg"
import { CiInstagram } from "react-icons/ci";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import PaymentIcon1 from "../image/payment-icon-1.png"
import PaymentIcon2 from "../image/payment-icon-2.png"
import PaymentIcon3 from "../image/payment-icon-3.png"
import PaymentIcon4 from "../image/payment-icon-4.png"
import PaymentIcon5 from "../image/payment-icon-5.png"
import PaymentIcon6 from "../image/payment-icon-6.png"
import PaymentIcon7 from "../image/payment-icon-7.png"
import Sunflower from "../image/sunflower.png"
import DotsImg from "../image/dots.png"
import Musroom from "../image/musroom.png"


export default function Footer() {
    return (
        <>
            <section className="FooterSection">

                

                <div className="footerBgColor flex justify-center">

                    <div className="ourNewsLetter flex flex-col gap-3 items-center text-center">
                        <h3>OUR NEWSLETTER</h3>
                        <h2>Sign Up Now To Receive 25% Off On Order.</h2>
                        <p>Sollicitudin tempor id eu nisl nunc. Non curabitur gravida arcu ac tortor dignissim convallis. Suspendisse sed nisi lacus sed viverra tellus habitasse.</p>
                        <div className="flex justify-center flex-wrap gap-5 items-center mt-5">
                            <input type="text" className="newsLetterInput" placeholder="Enter Your Email ID" />
                            <button className="footerbtn flex items-center gap-2">SUBSCRIBE<Image className="footerbtnArrow" src={BtnArrow} alt="Btn Arrow" /> </button>
                        </div>

                        <Image src={NewsletterStarSvg} alt="newsletterStarSvg" className="newsletterStarSvg" />
                    </div>

                </div>


                <div className="footerBgColor pb-10">

                    <div className=" flex flex-wrap justify-center py-14 max-lg:py-0">


                        <div className="footerLogoDiv flex flex-col ">
                            <Image src={Logo} alt="logo" className="footerlogo" />
                            <p>Konec sit amet nibh vestibulum ipsum cursus rhoncus. Duis ac tortor gravida ligula eleifend finibus sed vel tellus.</p>
                            <h2>Social Media</h2>
                            <div className="flex gap-3 pt-5 max-lg:pt-1 ">
                                <CiInstagram className="socialIcon" />
                                <FaFacebookF className="socialIcon" />
                                <FaYoutube className="socialIcon" />
                                <BsTwitterX className="socialIcon" />
                            </div>

                            <Image src={Sunflower} alt="Sunflower" className="Sunflower" />
                        </div>


                        <div className="footergetTouch">
                            <h2>Get In Touch</h2>
                            <p>Manzana María Elena Leiva s/n., Vitoria, Can 58948</p>
                            <ul className="mt-6 max-lg:mt-1">
                                <li>Call Us : <span>+00 (0) 123 456 789</span></li>
                                <li>E-Mail : <span>admin@example.com</span></li>
                            </ul>
                        </div>


                        <div className="footerUesFull" >
                            <h2>Useful Links</h2>
                            <ul>
                                <li>Contact us</li>
                                <li>History</li>
                                <li>Shipping & Returns</li>
                                <li>Refund Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                            <Image src={DotsImg} alt="DotsImg" className="DotsImg"/>
                        </div>


                        <div className="footerCustServ" >
                            <h2>Customer Services</h2>
                            <ul>
                                <li>Communication App</li>
                                <li>Tour a School</li>
                                <li>Health & Sefety</li>
                                <li>Our Curriculum</li>
                                <li>Our Educators</li>
                            </ul>
                            <Image src={Musroom} alt="Musroom" className="Musroom" />
                        </div>

                    </div>

                </div>

                <div className="footerEndDiv flex flex-wrap justify-between">
                    <h3>© 2023 Wedesigntech. All Rights Reserved.</h3>
                    <div className="flex justify-center items-center gap-2">
                        <Image src={PaymentIcon1} alt="PaymentIcon1" className="PaymentIcon1" />
                        <Image src={PaymentIcon2} alt="PaymentIcon1" className="PaymentIcon1" />
                        <Image src={PaymentIcon3} alt="PaymentIcon1" className="PaymentIcon1" />
                        <Image src={PaymentIcon4} alt="PaymentIcon1" className="PaymentIcon1" />
                        <Image src={PaymentIcon5} alt="PaymentIcon1" className="PaymentIcon1" />
                        <Image src={PaymentIcon6} alt="PaymentIcon1" className="PaymentIcon1" />
                        <Image src={PaymentIcon7} alt="PaymentIcon1" className="PaymentIcon1" />
                    </div>
                </div>

            </section>
        </>
    )
}