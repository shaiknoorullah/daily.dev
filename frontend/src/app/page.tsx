"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./components/layouts/asideBar";
import Feed from "./components/layouts/feed";
import NavBar from "./components/layouts/navbar";
import { getUser } from "./utils/auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const user = getUser();
    if (!user) {
      router.push("/Login");
    }
  }, [router]);

  return (
    <div className="">
      <NavBar />
      <div className="w-full h-screen grid grid-cols-6 overflow-y-clip">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
