import React from "react";
import {
  UserCircle,
  Settings,
  Award,
  CreditCard,
  Users,
  PauseCircle,
  Sliders,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Profile } from "@/app/interfaces/profileInterface";

const ProfileDropdown = ({ username, joinDate }: Profile) => {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/Login");
  };
  return (
    <div className="absolute top-16 right-4 w-64 bg-[#1C1F26] text-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-4 bg-[#252A36]">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-[#C2185B] rounded-lg flex items-center justify-center text-2xl font-bold">
            {username.charAt(0).toUpperCase()}
          </div>
          <div>
            <h3 className="font-semibold">{username}</h3>
            <p className="text-sm text-gray-400">
              @{username} • Joined {joinDate}
            </p>
          </div>
        </div>
      </div>

      <div className="py-2">
        {[
          { icon: UserCircle, label: "Profile" },
          { icon: Settings, label: "Account details" },
          { icon: Award, label: "Reputation" },
          { icon: CreditCard, label: "Devcard" },
          { icon: Users, label: "Invite friends" },
          { icon: PauseCircle, label: "Pause new tab" },
          { icon: Sliders, label: "Customize" },
        ].map((item, index) => (
          <button
            key={index}
            className="w-full px-4 py-2 flex items-center justify-between hover:bg-[#252A36] transition-colors"
          >
            <div className="flex items-center space-x-3">
              <item.icon size={18} />
              <span>{item.label}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full px-4 py-3 text-left text-red-500 hover:bg-[#252A36] transition-colors"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
