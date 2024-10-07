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

const Sidebar = () => {
  return (
    <div className="h-full overflow-y-scroll col-span-1 no-scrollbar">
      <div className="lg:flex hidden md:block ">
        <aside className="relative w-64 border-r border-[#444343] text-gray-300 pl-2 ">
          <div className="mt-8">
            <div className="mb-6">
              {/* <p className="text-xs uppercase font-semibold mb-2">My Feed</p> */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <div className="bg-red-500 w-4  rounded-[3px] justify-center flex items-center">
                    <span className="text-white text-[10px]">M</span>
                  </div>
                  <span className="text-sm">My Feed</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Plus size={18} />
                  <span className="text-sm">Custom feed</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase font-semibold mb-2">Squads</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Image
                    src="/quantum.png"
                    alt="Public Squads"
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="text-sm">Public Squads</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Image
                    src="/odnoklassniki.png"
                    alt="controversy.dev"
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="text-sm">controversy.dev</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Image
                    src="/groupme.png"
                    alt="daily.dev changelog"
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="text-sm">daily.dev changelog</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Image
                    src="/favicon.png"
                    alt="NexUS"
                    width={20}
                    height={20}
                    className="rounded"
                  />
                  <span className="text-sm">NexUS</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Plus size={18} />
                  <span className="text-sm">New Squad</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase font-semibold mb-2">Discover</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Flame size={18} />
                  <span className="text-sm">Explore</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <MessageSquare size={18} />
                  <span className="text-sm">Discussions</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Hash size={18} />
                  <span className="text-sm">Tags</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Globe size={18} />
                  <span className="text-sm">Sources</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Award size={18} />
                  <span className="text-sm">Leaderboard</span>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xs uppercase font-semibold mb-2">Activity</p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Link size={18} />
                  <span className="text-sm">Submit a link</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Bookmark size={18} />
                  <span className="text-sm">Bookmarks</span>
                </div>
                <div className="flex items-center space-x-2 hover:bg-gray-800 rounded py-1 px-2 cursor-pointer">
                  <Clock size={18} />
                  <span className="text-sm">History</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
