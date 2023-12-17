import React, { useState } from "react";

function PriceRange() {
  const [minValue, setMinValue] = useState(2000);
const [maxValue, setMaxValue] = useState(20000);
const handleInput = (e) => {
	setMinValue(e.minValue);
	setMaxValue(e.maxValue);
};
  return (
    <div className="flex flex-col gap-[30px]">
      <div className="text-[18px] font-bold">PriceRange</div>
    </div>
  )
}

export default PriceRange