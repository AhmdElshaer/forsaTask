import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function FilterProducts() {
  let [searchParams] = useSearchParams();

  useEffect(()=>{
    let filters = searchParams.getAll();
    console.log(filters);
  },[searchParams])
  return (
    <div>FilterProducts</div>
  )
}

export default FilterProducts;