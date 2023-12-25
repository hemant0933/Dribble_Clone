import React from "react";
import Marquee from "react-fast-marquee";

const HeroSection = () => {
  return (
    <div
      className="w-full h-auto flex items-center
       justify-start flex-col text-center pt-20 Roboto text-[#0d0c22]"
    >
      <div
        className="w-[333px] h-[40px] px-4 py-3
        text-[16px] flex items-center justify-center font-medium bg-purple-200 rounded-full tracking-wide"
      >
        Over 3 million ready-to-work creatives!
      </div>

      <h1
        className="SourceSans font-medium leading-tight mt-[40px] mb-[24px] 
      mx-auto text-[72px] tracking-wider"
      >
        Work with the world’s top <br /> creative talent.
      </h1>
      <p className="Roboto font-normal text-[20px]">
        Connect with millions of top-rated designers & agencies around the
        world.
      </p>

      <button className="w-[164px] h-[56px] my-[24px] rounded-full text-sm
       bg-[#0d0c22] text-[#fff] font-medium hover:bg-gray-700">
        Start hiring today
      </button>

      <div
        className="w-full
        py-[72px] text-[#fff]"
      >
       <Marquee direction="left" speed={50}>
        <div className="w-[273px] h-[340px] mr-[32px] px-[20px] py-[16px] rounded-3xl bg-slate-900"></div>
        <div className="w-[273px] h-[340px] mr-[32px] px-[20px] py-[16px] rounded-3xl bg-slate-800"></div>
        <div className="w-[273px] h-[340px] mr-[32px] px-[20px] py-[16px] rounded-3xl bg-slate-700"></div>
        <div className="w-[273px] h-[340px] mr-[32px] px-[20px] py-[16px] rounded-3xl bg-slate-600"></div>
        <div className="w-[273px] h-[340px] mr-[32px] px-[20px] py-[16px] rounded-3xl bg-slate-500"></div>
      </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;
