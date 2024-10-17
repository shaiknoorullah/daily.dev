import React from "react";
import {
  Plus,
  Flame,
  MessageSquare,
  Hash,
  Globe,
  Award,
  Link,
  Bookmark,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { SidebarSection } from "@/app/interfaces/sidebarInterfaces";

const generateSidebarData = (): SidebarSection[] => {
  return [
    {
      title: "My Feed",
      items: [
        {
          intial: "M",
          label: "My Feed",
          customIcon: true,
          bgColor: "bg-red-500",
        },
        { icon: Plus, label: "Custom feed" },
      ],
    },
    {
      title: "Squads",
      items: [
        { imageSrc: "/quantum.png", label: "Public Squads" },
        { imageSrc: "/odnoklassniki.png", label: "controversy.dev" },
        { imageSrc: "/groupme.png", label: "daily.dev changelog" },
        { imageSrc: "/favicon.png", label: "NexUS" },
        { icon: Plus, label: "New Squad" },
      ],
    },
    {
      title: "Discover",
      items: [
        { icon: Flame, label: "Explore" },
        { icon: MessageSquare, label: "Discussions" },
        { icon: Hash, label: "Tags" },
        { icon: Globe, label: "Sources" },
        { icon: Award, label: "Leaderboard" },
      ],
    },
    {
      title: "Activity",
      items: [
        { icon: Link, label: "Submit a link" },
        { icon: Bookmark, label: "Bookmarks" },
        { icon: Clock, label: "History" },
      ],
    },
  ];
};

const Sidebar: React.FC = () => {
  const sidebarData = generateSidebarData();

  return (
    <div className="lg:h-full lg:overflow-y-scroll lg:col-span-1 lg:no-scrollbar">
      <div className="lg:flex hidden md:block">
        <aside className="lg:relative w-64 border-r border-[#444343] text-gray-300 lg:pl-2">
          <div className="mt-8">
            {sidebarData.map((section, sectionIdx) => (
              <div key={sectionIdx} className="mb-6">
                <p className="text-xs uppercase font-semibold mb-2">
                  {section.title}
                </p>
                <div className="space-y-2">
                  {section.items.map((item, itemId) => (
                    <div
                      key={itemId}
                      className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer"
                    >
                      {item.customIcon ? (
                        <div
                          className={`${item.bgColor} w-4  rounded-[3px] justify-center flex items-center`}
                        >
                          <span className="text-white text-[10px]">
                            {item.intial}
                          </span>
                        </div>
                      ) : item.imageSrc ? (
                        <Image
                          src={item.imageSrc}
                          alt={item.label}
                          width={20}
                          height={20}
                          className="rounded"
                        />
                      ) : item.icon ? (
                        <item.icon size={18} />
                      ) : null}
                      <span className="text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
