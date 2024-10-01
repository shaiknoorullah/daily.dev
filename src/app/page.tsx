import Sidebar from "./components/layouts/asideBar";
import Feed from "./components/layouts/feed";
import NavBar from "./components/layouts/navbar";

export default function Home() {
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
