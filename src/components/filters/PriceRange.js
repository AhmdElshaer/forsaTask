import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { productActions } from "../../store/product-slice";

function PriceRange() {

  const [value, setValue] = useState([10000, 4000000]);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    dispatch(productActions.addPriceRangeFilter(value));
  },[dispatch, value]);
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-[18px] font-bold">PriceRange</div>
      <Box>
        <Slider
          min={10000}
          max={4000000}
          sx={{
            color: '#E3256C'
          }}
          getAriaLabel={() => 'area range'}
          valueLabelDisplay="auto"
          value={value}
          onChangeCommitted={handleChange}
        />
      </Box>
    </div>
  )
}

export default PriceRange