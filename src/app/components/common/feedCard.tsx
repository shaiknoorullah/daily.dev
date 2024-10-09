import React, { useState } from "react";
import Image from "next/image";
import ThumbsUpIcon from "../../svgs/ThumbsUpIcon";
import ThumbsDownIcon from "../../svgs/ThumbsDownIcon";
import CommentIcon from "../../svgs/CommentIcon";
import BookmarkIcon from "../../svgs/BookmarkIcon";
import LinkIcon from "../../svgs/LinkIcon";
import { FeedCardProps } from "@/app/interfaces/feedInterface";

const FeedCard = ({ title, hashtags, readTime, image }: FeedCardProps) => {
  const [arrowUC, setarrowUC] = useState(0);
  const [arrowDC, setarrowDC] = useState(0);

  const [activeThumb, setActiveThumb] = useState<"up" | "down" | null>(null);

  const handleThumbsUp = () => {
    if (activeThumb === "up") {
      setarrowUC((prevCount) => prevCount - 1);
      setActiveThumb(null);
    } else {
      setarrowUC((prevCount) => prevCount + 1);
      if (activeThumb === "down") {
        setarrowDC((prevCount) => prevCount - 1);
      }
      setActiveThumb("up");
    }
  };

  const handleThumbsDown = () => {
    if (activeThumb === "down") {
      setarrowDC((prevCount) => prevCount - 1);
      setActiveThumb(null);
    } else {
      setarrowDC((prevCount) => prevCount + 1);
      if (activeThumb === "up") {
        setarrowUC((prevCount) => prevCount - 1);
      }
      setActiveThumb("down");
    }
  };

  return (
    <div className="bg-[#1C1F26] border hover:border-[#696969] border-[#444343] rounded-xl overflow-hidden w-80 cursor-pointer">
      <div className="p-4">
        <div className="flex flex-col mb-2">
          <h2 className="text-white font-semibold text-lg">{title}</h2>
        </div>
        <div className="flex flex-wrap mb-2">
          {hashtags.map((tag, index) => (
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
          <div className="flex rounded-xl bg-[#272B34]">
            <button
              onClick={handleThumbsUp}
              className={`flex items-center rounded-l-xl px-2 py-1 ${
                activeThumb === "up"
                  ? "bg-[#255643] text-[#39e58c]"
                  : "hover:bg-[#255643] hover:text-[#39e58c]"
              }`}
            >
              <ThumbsUpIcon fill={activeThumb === "up" ? "#39e58c" : "none"} />
              {arrowUC > 0 && <span className="ml-1">{arrowUC}</span>}
            </button>
            <div className="w-[1px] h-6 bg-[#313641]"></div>
            <button
              onClick={handleThumbsDown}
              className={`flex items-center rounded-r-xl px-2 py-1 ${
                activeThumb === "down"
                  ? "bg-[#512b30] text-[#d14136]"
                  : "hover:bg-[#512b30] hover:text-[#d14136]"
              }`}
            >
              <ThumbsDownIcon
                fill={activeThumb === "down" ? "#d14136" : "none"}
              />
              {arrowDC > 0 && <span className="ml-1">{arrowDC}</span>}
            </button>
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
