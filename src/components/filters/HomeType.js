import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function HomeType() {
  const [filters, setFilters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = new URLSearchParams();
  console.log(searchParams.get('homeType'));

  const onSelectHandler = (e) => {
    let val = e.target.value;
    let newFilters = [...filters];
    if(e.target.checked == true){
      newFilters.push(val);
    }else{
      newFilters = filters.filter(function(item) {
        return item !== val
    })
  }
  setFilters(newFilters);
}
  useEffect(()=>{
    setSearchParams(()=>{
      return new URLSearchParams({'homeType': filters})
    })
    if(filters.length == 0){
      setSearchParams(()=>{ return params.delete('homeType')})
    }
  },[filters, setSearchParams])
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[18px] font-bold">Type of home</p>
      <div className="flex flex-col gap-[12px] text-[#6D7888]">

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="apartment"
            id="apartment"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="apartment">
            Apartment
          </label>
        </div>

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="twinhouse"
            id="twinhouse"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="twinhouse">
            Twinhouse
          </label>
        </div>

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="duplex"
            id="duplex"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="duplex">
            Duplex
          </label>
        </div>

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="villa"
            id="villa"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="villa">
            Villa
          </label>
        </div>

      </div>
    </div>
  )
}

export default HomeType