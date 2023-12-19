import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product-slice';
import arrow from '../../assets/images/arrow.svg';

function FilterModal() {

  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(productActions.toggle(false));
  };

  return (
    <div className='w-screen h-full fixed bg-white z-50'>
      <button onClick={toggle} className='h-[32px]'>
        <img src={arrow} alt='arrow' className='object-fit'/>
      </button>
        FilterPage
      </div>
  )
};

export default FilterModal;