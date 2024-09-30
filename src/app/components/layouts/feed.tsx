import React from "react";
import FilterButtons from "../common/fiterButton";
import FeedCard from "../common/feedCard";

function Feed() {
  const feedData = [
    {
      title: "Meta's Ray-Bans will now 'remember' things for you",
      hashtags: ["#tech-news", "#ai", "#wearable"],
      readTime: "Today • 3m read time",
      image: "/Meta.jpg",
    },
    {
      title: "Tesla's Cybertruck enters production phase",
      hashtags: ["#tech-news", "#electric-vehicles", "#tesla"],
      readTime: "Yesterday • 5m read time",
      image: "/Tesla.jpg",
    },
    {
      title: "New AI breakthrough promises faster medical diagnosis",
      hashtags: ["#ai", "#healthcare", "#tech-news"],
      readTime: "2 days ago • 4m read time",
      image: "/NewAi.jpg",
    },
    {
      title: "The future of electric vehicles: What to expect",
      hashtags: ["#electric-vehicles", "#future", "#innovation"],
      readTime: "Last week • 6m read time",
      image: "/download.jpg",
    },
    {
      title: "AI and its impact on modern healthcare",
      hashtags: ["#ai", "#healthcare", "#technology"],
      readTime: "A month ago • 5m read time",
      image: "/modernhealthcare.jpg",
    },
    {
      title: "Exploring the latest trends in wearable tech",
      hashtags: ["#tech-news", "#wearable", "#gadgets"],
      readTime: "Last month • 7m read time",
      image: "/wearabletech.jpg",
    },
  ];
  return (
    <div className="lg:p-11 lg:flex lg:flex-col flex flex-col p-4 ">
      <FilterButtons />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 bg-[#0E1217] lg:p-8">
        {feedData.map((data, index) => (
          <FeedCard
            key={index}
            title={data.title}
            hashtags={data.hashtags}
            readTime={data.readTime}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
