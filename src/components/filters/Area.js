import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { productActions } from "../../store/product-slice";

function Area() {
  const [value, setValue] = useState([85, 250]);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(()=>{
    dispatch(productActions.addAreaRangeFilter(value));
  },[dispatch, value]);

  return (
    <div className="flex flex-col gap-[30px] pb-[14px] border-b">
      <p className="text-[18px] font-bold">Area (sqm)</p>
      <Box>
        <Slider
          sx={{
            color: '#E3256C'
          }}
          min={85}
          max={250}
          getAriaLabel={() => 'area range'}
          getAriaValueText={(val)=>`${val}sqm`}
          valueLabelDisplay="auto"
          value={value}
          onChangeCommitted={handleChange}
        />
      </Box>
    </div>
  )
}

export default Area