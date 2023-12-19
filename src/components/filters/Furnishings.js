import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../store/product-slice';

function Furnishings() {
  const [value, setValue] = useState('any');
  const dispatch = useDispatch();

  const onSelectHandler = (e) => {
    setValue(e.target.value);
  }

  useEffect(()=>{
    dispatch(productActions.addFurnishedFilter(value))
  },[dispatch, value]);

  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[18px] font-bold">Furnishings</p>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="any"
          name="radio-buttons-group"
          onChange={onSelectHandler}
        >
          <FormControlLabel value="any" control={<Radio />} label="Any" />
          <FormControlLabel value="true" control={<Radio />} label="Furnished" />
          <FormControlLabel value="false" control={<Radio />} label="Unfurnished" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default Furnishings