import React from "react";
import microheart from "../assets/microheart.svg";
import eyes from "../assets/eye.svg";
import user from "../assets/user.svg";
import heart from "../assets/outlineHeart.svg";
import bookmark from "../assets/bookmark.svg";

const ProfileCard = ({card }) => {
  return (
    <div className="w-[326px] h-[280px] relative flex flex-col items-center">
      <div className="relative">
        <img
            src={card.image}
            className="w-[326px] relative h-[244px] cursor-pointer
            object-cover overflow-hidden rounded-xl"
            alt="sample"
        />
        <div className="absolute cursor-pointer bottom-0 rounded-b-xl w-full px-4 h-14 z-20 flex items-center justify-between
           text-white bg-transparent/15 opacity-0 shadow-black hover:opacity-100 hover:transition-opacity
            ">
                <p className="bg-transparent/5">Bad Cosmos</p>
                <div className="flex bg-transparent/5 gap-4">
                <img src={bookmark} className="w-9 h-9 rounded-full hover:bg-gray-200 p-2" alt="bookmark"/>
                <img src={heart} className="w-9 h-9 rounded-full hover:bg-gray-200 p-2" alt="heart"/>
                </div>
        </div>
      </div>

      <div className="w-full h-[36px] mt-2 flex justify-between">
        <span className="flex items-center gap-2 text-[14px] font-medium">
          <img src={user} className="w-4 h-4" alt="heart" />
          {card.name}
        </span>
        <div className="flex text-[12px] text-gray-500 items-center gap-2">
          <span className="flex gap-1">
            <img src={microheart} className="w-4 h-4" alt="heart" />{" "}
            {card.likes}
          </span>
          <span className="flex gap-1">
            <img src={eyes} className="w-4 h-4" alt="eyes" /> {card.views}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
