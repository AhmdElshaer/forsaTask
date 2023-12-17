import Area from "../filters/Area";
import Bedrooms from "../filters/Bedrooms";
import Furnishings from "../filters/Furnishings";
import HomeType from "../filters/HomeType";
import PriceRange from "../filters/PriceRange";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block flex flex-col gap-[47px] w-[300px]">
      <div className="border rounded-md py-[19px] px-[23px] flex flex-col gap-[32px]">
        <p className="text-[24px] font-bold">Filter by:</p>
        <HomeType />
        <PriceRange />
        <Bedrooms />
        <Area />
        <Furnishings />
      </div>
    </aside>
  )
}