import React from "react";
import ProfileCard from "./ProfileCard";

import image1 from "../assets/homelander.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image6.jpeg";
import image5 from "../assets/image7.jpeg";
import image6 from "../assets/enisourous.png";

const cards = [
  { name: "Enisaurus", image: image1, likes: 477, views: "145k" },
  { name: "Dinosaurus", image: image2, likes: 500, views: "150k" },
  { name: "Octosaurus", image: image3, likes: 600, views: "160k" },
  { name: "Allosaurus", image: image4, likes: 600, views: "360k" },
  { name: "Spinosaurus", image: image5, likes: 600, views: "106k" },
  { name: "Diplodocus", image: image6, likes: 600, views: "160k" },
  { name: "Diplodocus", image: image3, likes: 600, views: "160k" },
  { name: "Diplodocus", image: image5, likes: 600, views: "160k" },
];

const ExploreSection = () => {
  return (
    <div
      className="w-full h-auto flex items-center 
    justify-start mt-[43px] mb-[150px] flex-col text-center"
    >
      <h1 className="px-[32px] mb-[48px] Roboto font-normal text-[48px] ">
        Explore inspiring designs
      </h1>
      <div
        className="w-full flex flex-wrap
       items-center justify-between gap-[28px]
       px-[32px]"
      >
        {cards.map((card, index) => (
          <ProfileCard key={index} card={card} />
        ))}
      </div>
      <button
        className="w-[210px] h-[56px] mt-[48px] px-[24px]
       bg-[#ffff] border-black text-sm border-[1px] font-medium Roboto 
       rounded-full hover:border-gray-500 hover:text-gray-500
       "
      >
        Browse more inspiration
      </button>
    </div>
  );
};

export default ExploreSection;
