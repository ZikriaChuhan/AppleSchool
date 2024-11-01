'use client'
import Image from "next/image";
import Logo from "../image/logo.svg"
import HeartIcon from "../image/hearticon.svg"
import ProfileIcon from "../image/profile-icon.png"
import { IoLocationSharp } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { IoMail, IoSearchOutline } from "react-icons/io5";
import { CiShoppingBasket, CiHeart } from "react-icons/ci";
import { RiMenuFill } from "react-icons/ri";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import React, { useRef } from 'react';





export default function Header() {


  let tl = useRef(null);

  useGSAP(() => {

    tl.current =gsap.timeline()

    tl.current.to(".moblieMenuDiv",{
      right:0,
      duration:0.5
    })
    tl.current.from(".moblieMenuDiv h2",{
      x:130,
      duration:0.5,
      stagger:0.3
    })

  tl.current.pause();


})



    return (
      <>
        <header className="headertopSec flex justify-between items-center  ">
          <div className="locationDiv flex justify-between items-center gap-3 pl-20 py-2.5">
            <IoLocationSharp />
            <h2>Manzana María Elena Leiva s/n., Vitoria, Can 58948</h2>
          </div>
          <div className=" flex justify-between items-center pr-20">
            <div className="headernum flex justify-between items-center gap-3 ">
              <MdPhone />
              <Link href="tel:+00123456789"> <h2>+00 12 345 6789</h2></Link>
            </div>
            <div className="headeremail flex justify-between items-center gap-3">
              <IoMail />
              <Link href="mailto:support@example.com"><h2>support@example.com</h2></Link>
            </div>
          </div>
        </header>
  

        <section className="menuSec relative flex justify-between items-center">
          <div><Link href="/"> <Image src={Logo} alt="logo" className="logomain" /></Link></div>
          <div className="menuH2 flex justify-center items-center gap-2">
          <Link href="/"> <h2 className=" flex justify-center items-center gap-2"> Home<Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
          <Link href="/aboutus"><h2 className=" flex justify-center items-center gap-2">About Us <Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
          <Link href="/LMScourses"><h2 className=" flex justify-center items-center gap-2">LMS <Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
          <Link href="/gallary"><h2 className=" flex justify-center items-center gap-2">Galllary <Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
          <Link href="/blog"><h2 className=" flex justify-center items-center gap-2">Blog <Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
            <Link href="/contactus"><h2 className=" flex justify-center items-center ">Contact US</h2></Link>
          </div>
          <div className=" flex justify-center items-center gap-3 ">
            <IoSearchOutline className="menuIcon" />
            <Image src={ProfileIcon} className="profileIcon" alt="Profile Icon" />
            <CiShoppingBasket className="menuIcon" />
            <CiHeart className="menuIcon" />
          </div>

            <div  className="humberger">
            <RiMenuFill className="humbergerIcon " onClick={() => tl.current.play()} />

            <div className="moblieMenuDiv flex  items-center justify-end ">
            <div className=" flex flex-col justify-center items-end gap-2">
              <h5 className="closeMenu" onClick={() => tl.current.reverse()}>X</h5>
          <Link href="/"> <h2 className=" flex justify-center items-center gap-2"> Home<Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
          <Link href="/aboutus"><h2 className=" flex justify-center items-center gap-2">About Us <Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
          <Link href="/LMScourses"><h2 className=" flex justify-center items-center gap-2">LMS <Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
          <Link href="/blog"><h2 className=" flex justify-center items-center gap-2">Blog <Image src={HeartIcon} className="heartIcon" alt="Heart Icon" /></h2></Link>
            <Link href="/contactus"><h2 className=" flex justify-center items-center ">Contact US</h2></Link>
          </div>
            </div>
            </div>

        </section>
        

        </>
  );
}
  
