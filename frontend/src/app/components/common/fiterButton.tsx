import React from "react";
import { Settings, Plus } from "lucide-react";
import Filterarrows from "../../svgs/Filterarrows";

const FilterButtons = () => {
  return (
    <div className="lg:flex space-x-4 px-8 hidden md:block">
      <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
        <Settings className="w-5 h-5" />
        <span>Feed settings</span>
      </button>

      <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
        <Plus className="w-5 h-5" />
        <span>Shortcuts</span>
      </button>

      <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
        <Filterarrows />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default FilterButtons;
