import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product-slice';
import filter from '../../assets/images/filter.svg';

function FilterButton() {

  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(productActions.toggle(true));
  };

  return (
    <button onClick={toggle} className='w-[48px] h-[48px] fixed bottom-[50px] right-[48px] block md:hidden'>
      <img src={filter} alt='filtericon' className='object-fit' />
    </button>
  )
}

export default FilterButton