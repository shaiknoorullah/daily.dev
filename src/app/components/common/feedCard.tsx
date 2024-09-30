import React from "react";
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Bookmark,
  Link,
} from "lucide-react";
import Image from "next/image";

const FeedCard = ({ title, hashtags, readTime, image }: any) => {
  return (
    <div className="bg-[#1C1F26] border hover:border-[#696969] border-[#444343] rounded-xl overflow-hidden w-80 cursor-pointer">
      <div className="p-4">
        <div className="flex flex-col mb-2">
          {/* <button className="bg-[#C2185B] w-8 h-8 rounded-xl flex items-center justify-center">
            <span className="text-white font-semibold">M</span>
          </button> */}
          <h2 className="text-white font-semibold text-lg">{title}</h2>
        </div>
        <div className="flex flex-wrap mb-2">
          {hashtags.map((tag: any, index: any) => (
            <span
              key={index}
              className="text-xs border border-[#444343] text-gray-300 rounded-full px-2 py-1 mr-1 mb-1"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-gray-400 text-sm mb-2">{readTime}</p>
        <Image
          src={image}
          alt={title}
          width={320}
          height={160}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex justify-between text-gray-400">
          <ArrowUp className="w-5 h-5" />
          <ArrowDown className="w-5 h-5" />
          <MessageSquare className="w-5 h-5" />
          <Bookmark className="w-5 h-5" />
          <Link className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
