import React from "react";
import { Search, Bell } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  const navContent = {
    logo: "/devlogo.png",
    companionIcon: "/Comapnion.png",
    streakIcon: "/streak.png",
    pointsIcon: "/points.png",
    streakCount: 36,
    pointsCount: 10,
    userName: "M",
  };

  return (
    <div className="text-white border-b border-[#444343] flex justify-between items-center px-6 py-2">
      <button className="flex items-center space-x-2">
        <Image src={navContent.logo} alt="Logo" width={130} height={35} />
      </button>

      <div className="lg:flex items-center justify-between w-[35%] h-12 bg-[#1C1F26] px-3 py-1 rounded-xl hidden md:block">
        <div className="lg:flex hidden md:block">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-300 pl-2"
          />
        </div>

        <div className="flex items-center space-x-1 ml-2">
          <span className="border border-[#373C46] text-sm px-2 rounded-md">
            Ctrl
          </span>
          <span className="text-sm rounded-md">+</span>

          <span className="border border-[#373C46] text-sm px-2 rounded-md">
            K
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4 ">
        <button className="bg-white text-black px-4 py-2 hidden md:block rounded-xl font-[600]">
          New post
        </button>
        <button className="bg-slate-800 p-2 rounded-xl hidden md:block">
          <Image
            src={navContent.companionIcon}
            alt="Companion Logo"
            width={23}
            height={20}
          />
        </button>
        <button className="bg-slate-800 p-2 rounded-xl hidden md:block">
          <Bell className="" />
        </button>

        <div className="flex gap-4 lg:bg-slate-800 py-1 px-[10px] rounded-xl items-center justify-center">
          <button className="flex gap-2 text-[15px] ">
            <Image
              src={navContent.streakIcon}
              alt="Streak Logo"
              width={20}
              height={20}
            />
            <span className="text-[#FC538D] font-[600] divide-x ">
              {navContent.streakCount}
            </span>
          </button>

          <button className="lg:flex items-center gap-1 hidden md:block">
            <Image
              src={navContent.pointsIcon}
              alt="Points Logo"
              width={15}
              height={20}
            />
            <span className="font-[700] text-sm">{navContent.pointsCount}</span>
          </button>

          <button className="md:flex items-center gap-1 lg:hidden ">
            <Image
              src="/Setting.png"
              alt="Points Logo"
              width={20}
              height={22}
            />
          </button>

          <button className="bg-[#C2185B] w-8 h-8 rounded-xl flex items-center justify-center">
            <span className="text-white font-semibold">
              {navContent.userName}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
