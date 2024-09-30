import Sidebar from "./components/layouts/asideBar";
import Feed from "./components/layouts/feed";
import NavBar from "./components/layouts/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}
