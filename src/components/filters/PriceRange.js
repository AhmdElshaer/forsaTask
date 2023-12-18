import React, { useState } from "react";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function PriceRange() {
  const [value, setValue] = useState([0, 100]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-[18px] font-bold">PriceRange</div>
      <Box>
        <Slider
          getAriaLabel={() => 'area range'}
          valueLabelDisplay="auto"
          value={value}
          onChange={handleChange}
        />
      </Box>
    </div>
  )
}

export default PriceRange