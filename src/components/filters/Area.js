import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Area() {
  const [value, setValue] = useState([20, 70]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[18px] font-bold">Area (sqm)</p>
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

export default Area