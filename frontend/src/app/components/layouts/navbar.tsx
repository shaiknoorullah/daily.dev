"use client";

import React, { useState, useEffect } from "react";
import { Search, Bell } from "lucide-react";
import Image from "next/image";
import ProfileDropdown from "../common/profileDropDown";
import { Todo } from "@/app/interfaces/todoInterface";

const NavBar = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const data: Todo[] = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, []);

  useEffect(() => {
    if (searchInput.trim() === "") {
      setFilteredTodos([]);
    } else {
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredTodos(filtered);
    }
  }, [searchInput, todos]);

  useEffect(() => {
    const searchInputElement = document.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement | null;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        if (searchInputElement) {
          searchInputElement.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="text-white border-b border-[#444343] sticky top-0 flex justify-between items-center px-6 py-2 bg-[#0E1217] z-10">
      <button className="flex items-center space-x-2">
        <Image src="/devlogo.png" alt="Logo" width={130} height={35} />
      </button>

      <div className="lg:flex items-center justify-between w-[35%] h-12 bg-[#1C1F26] px-3 py-1 rounded-xl hidden md:block">
        <div className="lg:flex hidden md:block">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-300 pl-2"
            value={searchInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchInput(e.target.value)
            }
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

      <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-4 py-2 hidden md:block rounded-xl font-[600]">
          New post
        </button>
        <button className="bg-slate-800 p-2 rounded-xl hidden md:block">
          <Image
            src="/Comapnion.png"
            alt="Companion Logo"
            width={23}
            height={20}
          />
        </button>
        <button className="bg-slate-800 p-2 rounded-xl hidden md:block">
          <Bell />
        </button>

        <div className="flex gap-4 lg:bg-slate-800 py-1 px-[10px] rounded-xl items-center justify-center">
          <button className="flex gap-2 text-[15px] ">
            <Image src="/streak.png" alt="Streak Logo" width={20} height={20} />
            <span className="text-[#FC538D] font-[600] divide-x ">47</span>
          </button>

          <button className="lg:flex items-center gap-1 hidden md:block">
            <Image src="/points.png" alt="Points Logo" width={15} height={20} />
            <span className="font-[700] text-sm">10</span>
          </button>

          <button className="md:flex items-center gap-1 lg:hidden ">
            <Image
              src="/Setting.png"
              alt="Settings Logo"
              width={20}
              height={22}
            />
          </button>

          <button
            className="bg-[#C2185B] w-8 h-8 rounded-xl flex items-center justify-center"
            onClick={toggleProfileDropdown}
          >
            <span className="text-white font-semibold">A</span>
          </button>
        </div>
      </div>

      {searchInput && filteredTodos.length > 0 && (
        <div className="absolute top-12 left-[41.4%] transform -translate-x-1/2 bg-[#1C1F26] text-white p-4 shadow-lg w-[33.8%] z-20">
          <ul>
            {filteredTodos.map((todo) => (
              <li key={todo.id} className="py-2 border-b border-gray-700">
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {isProfileDropdownOpen && (
        <ProfileDropdown username="ayman" joinDate="May 2024" />
      )}
    </div>
  );
};

export default NavBar;
