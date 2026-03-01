import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import FormOverlay from "./components/FormOverlay";
import { useTask } from "./hooks/useTask";

export default function AppLayout() {

  const { openFormOverlay } = useTask()

  return (
    <div className="flex h-screen relative">
      {openFormOverlay && <div className="fixed inset-0 z-50">
        <FormOverlay />
      </div>}
      <Sidebar />
      <main className="flex-1 overflow-auto relative">
        <nav className="sticky top-0 left-0 right-0 z-10"><Navbar /></nav>
        <div className="p-4">
          <Outlet />
        </div>
      </main>
      <HamburgerMenu />
    </div>
  );
}