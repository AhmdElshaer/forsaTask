import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product-slice';
import arrow from '../../assets/images/arrow.svg';
import HomeType from '../filters/HomeType';
import PriceRange from '../filters/PriceRange';
import Bedrooms from '../filters/Bedrooms';
import Area from '../filters/Area';
import Furnishings from '../filters/Furnishings';


function FilterModal() {

  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(productActions.toggle(false));
  };

  return (
    <div className='block md:hidden p-[16px] w-full h-full bg-white z-50'>
      <button onClick={toggle} className='h-[32px]'>
        <img src={arrow} alt='arrow' className='object-fit'/>
      </button>
      <div className="border rounded-md pb-[80px] py-[19px] px-[23px] flex flex-col gap-[32px]">
        <p className="text-[24px] font-bold pb-[14px] border-b">Filter by:</p>
        <HomeType />
        <PriceRange />
        <Bedrooms />
        <Area />
        <Furnishings />
        <button onClick={toggle} className='w-full py-2 text-center bg-[#E3256C] text-white border rounded-3xl'>Apply</button>
      </div>
    </div>
  )
};

export default FilterModal;