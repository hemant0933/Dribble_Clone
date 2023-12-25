import React from 'react';
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import Marquee from "react-fast-marquee";

import Typography from "../assets/Typography.png";
import product_design from "../assets/product_design.png";
import Mobile from "../assets/Mobile.png";
import Print from "../assets/Print.png";
import Illustration from "../assets/Illustrations.png";
import Animation from "../assets/Animation.png";
import WebDesign from "../assets/Web_design.png";
import Branding from "../assets/Branding.png";


const cards = [
    {title: "Typography",src:Typography},
    {title: "Branding",src:Branding},
    {title: "Product Design",src:product_design},
    {title: "Animation",src:Animation},
    {title: "Mobile",src:Mobile},
    {title: "Illustration",src:Illustration},
    {title: "Print",src:Print},
    {title: "Web Design",src:WebDesign},
   
]

const Carousel = () => {
  return (
    <div className='w-full h-auto overflow-hidden mb-[10px] flex items-center flex-col Roboto bg-color'>
      <div className='w-full h-[200px] pt-[60px] mb-[40px] flex items-center gap-[24px]'>
        <Marquee loop={0} pauseOnHover={true} direction="left" speed={50}>
            {
                cards.map((card,i) => (
                    <div className='w-[200px] h-[193px] mr-8' key={i}>
                        <img src={card.src} className='w-[200px] h-[150px] rounded-xl object-center' alt={card.src}/>
                        <p className='w-full mt-[12px] text-[14px] text-left'>{card.title}</p>
                    </div>
                ))
            }
        </Marquee>
      </div>
      <div className='w-[1200px] mx-[146px] mt-[72px] mb-[44px] 
      px-[32px] flex justify-between items-center'>
        <p className='italic font-semibold text-[16px] -rotate-6'>Dribble</p>
        <div className='w-[820px] flex items-center justify-center 
            gap-[40px] text-[14px] font-semibold'>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>For designers</span>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>Hire talent</span>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>Inspiration</span>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>Advertising</span>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>Blog</span>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>About</span>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>Career</span>
            <span className='cursor-pointer hover:text-[#0d0c22]/70'>Support</span>
        </div>
        <div className='flex items-center gap-[12px] text-[20px]'>
         <FaTwitter className='cursor-pointer hover:text-[#0d0c22]/70' />
         <RiFacebookBoxFill className='cursor-pointer hover:text-[#0d0c22]/70' />
         <FaInstagram className='cursor-pointer hover:text-[#0d0c22]/70' />
         <FaPinterest className='cursor-pointer hover:text-[#0d0c22]/70' />
        </div>
      </div>
      <footer className='w-[1200px] px-[32px] py-[44px] flex items-center justify-between'>
        <div className='flex items-center text-[12px] text-[#6e6d7a] gap-[10px]'>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>© 2023 Dribble</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Terms</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Privacy</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Cookies</span>
        </div>
        <div className='flex items-center text-[12px] text-[#6e6d7a] gap-[10px]'>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Jobs</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Designers</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Freelancers</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Tags</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Places</span>
          <span className='cursor-pointer hover:text-[#6e6d7a]/70'>Resources</span>
        </div>
      </footer>
    </div>
  );
}

export default Carousel;
