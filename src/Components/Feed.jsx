import React from "react";

const Feed = () => {
  return (
    <div
      className="w-full h-auto mt-[48px]
    flex items-center flex-col gap-[24px] text-center py-[120px] bg-[#ffda79]"
    >
      <h1
        className="w-full SourceSans font-medium
      tracking-wide leading-tight select-none
       text-center text-[64px] bg-inherit"
      >
        Find your next <br /> designer today
      </h1>
      <p className="w-[600px] bg-inherit text-[20px]
       text-[#0d0c22] font-normal tracking-wide leading-relaxed">
        The world’s leading brands use Dribbble to 
        hire creative talent. Browse millions of top-rated 
        portfolios to find your perfect <br/> creative match.
      </p>
      <div className="flex items-center pt-[16px] pb-[24px] gap-[16px] bg-inherit">
        <button className="px-[24px] h-[56px] rounded-full text-[14px] font-semibold bg-[#0d0c22] hover:bg-[#0d0c22]/70 text-white">Get started now</button>
        <button className="px-[24px] h-[56px] rounded-full text-[14px] font-semibold text-[#0d0c22] hover:text-[#0d0c22]/70 bg-white">Learn about hiring</button>
      </div>
      <p className="bg-inherit text-[20px]">Are you a designer? <span className="cursor-pointer underline bg-inherit">Join Dribble</span></p>
    </div>
  );
};

export default Feed;
