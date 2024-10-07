import React from "react";
import Image from "next/image";
import ThumbsUpIcon from "../../../../public/ThumbsUpIcon";
import ThumbsDownIcon from "../../../../public/ThumbsDownIcon";
import CommentIcon from "../../../../public/CommentIcon";
import BookmarkIcon from "../../../../public/BookmarkIcon";
import LinkIcon from "../../../../public/LinkIcon";

const FeedCard = ({ title, hashtags, readTime, image }: any) => {
  return (
    <div className="bg-[#1C1F26] border hover:border-[#696969] border-[#444343] rounded-xl overflow-hidden w-80 cursor-pointer">
      <div className="p-4">
        <div className="flex flex-col mb-2">
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
        <div className="flex justify-between items-center text-gray-400">
          <div className="flex rounded-xl  bg-[#272B34]">
            <ThumbsUpIcon />
            <div className="w-[1px] h-6 bg-[#313641]"></div>
            <ThumbsDownIcon />
          </div>
          <CommentIcon />
          <BookmarkIcon />
          <LinkIcon />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
