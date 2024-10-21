"use client";
import React, { useEffect, useState } from "react";
import FilterButtons from "../common/fiterButton";
import FeedCard from "../common/feedCard";
import { FeedItem } from "@/app/interfaces/feedInterface";

function Feed() {
  const [feedData, setFeedData] = useState<FeedItem[]>([]);

  useEffect(() => {
    // Update the URL to point to your backend API
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetched from backend:", data);

        const formattedData = data.map((item: any) => ({
          _id: item._id,
          title: item.title,
          hashtags: item.hashtags,
          readTime: item.readTime,
          image: item.image || "/default.jpg",
        }));

        setFeedData(formattedData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="lg:p-11 col-span-5 lg:flex lg:flex-col flex flex-col p-4 h-full overflow-y-auto no-scrollbar">
      <FilterButtons />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 bg-[#0E1217] lg:p-8">
        {feedData.map((data) => (
          <FeedCard
            key={data._id} // Use MongoDB _id as the unique key
            title={data.title}
            hashtags={data.hashtags} // Pass hashtags as an array
            readTime={data.readTime}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Feed;
