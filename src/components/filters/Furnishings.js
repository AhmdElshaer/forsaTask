
function Furnishings() {

  const onSelectHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  }
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[18px] font-bold">Furnishings</p>
      <div className='flex flex-col'>
        <p>
          <input type="radio" value='any' onChange={onSelectHandler} name='any' id='any' checked={true}/>
          <label htmlFor='any'>Any</label>
        </p>
        <p>
          <input type='radio' value='furnished' onChange={onSelectHandler} name='furnished' id='furnished'/>
          <label htmlFor='furnished'>Furnished</label>
        </p>
        <p>
          <input type='radio' value='unfurnished' onChange={onSelectHandler} name='unfurnished' id='unfurnished'/>
          <label htmlFor='unfurnished'>Unfurnished</label>
        </p>

      </div>
    </div>
  )
}

export default Furnishings