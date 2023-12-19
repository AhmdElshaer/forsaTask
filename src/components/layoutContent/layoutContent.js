import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Sidebar from "../ui/Sidebar";
import FilterButton from "../ui/FilterButton";
import FilterModal from "../ui/FilterModal";


export default function Layout() {
  const toggle = useSelector((state) => state.products.filterToggle);
  return(
    <>
      <div className="relative">
        <Header />
        {toggle ? <FilterModal /> :
          <>
            <main className="p-6 md:p-8 py-[40px] py-[120px] flex flex-col gap-[47px]">
              <div className="text-[32px]">Explore properties</div>
              <div className="flex flex-row gap-[35px]">
              <Sidebar />
              <Outlet />
              </div>
            </main>
            <FilterButton />
          </>
        }
      </div>
      <Footer />
    </>
  )
}