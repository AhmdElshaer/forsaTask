import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";


export default function Layout() {
  return(
    <>
      <div>
      <Header />
      <main className="p-6 md:p-8 py-[40px] py-[120px] flex flex-col gap-[47px]">
        <div className="text-[32px]">Explore properties</div>
        <div className="flex flex-row gap-[35px]">
        <Sidebar />
        <Outlet />
        </div>
      </main>
      </div>
      <Footer />
    </>
  )
}