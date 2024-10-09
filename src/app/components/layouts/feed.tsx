"use client";
import React, { useEffect, useState } from "react";
import FilterButtons from "../common/fiterButton";
import FeedCard from "../common/feedCard";
import { FeedItem } from "@/app/interfaces/feedInterface";

function Feed() {
  const [feedData, setFeedData] = useState<FeedItem[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.slice(0, 6).map((item: any) => ({
          title: item.title,
          hashtags: ["#todo", "#jsonplaceholder"],
          readTime: `${item.completed ? "Completed" : "Not Completed"}`,
          image: "/default.jpg",
        }));
        setFeedData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="lg:p-11 col-span-5 lg:flex lg:flex-col flex flex-col p-4 h-full overflow-y-auto  no-scrollbar">
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
