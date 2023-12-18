import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/product-slice";

function Bedrooms() {

  const dispatch = useDispatch();
  const onSelectHandler = (e) => {
    if(e.target.checked == true){
      dispatch(productActions.addBedroomsFilter(e.target.value));
    }else{
      dispatch(productActions.deleteBedroomsFilter(e.target.value));
    }
  }
  const filters = useSelector((state)=>state.products.filters);
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[18px] font-bold">Number of bedrooms</p>
      <div className="flex flex-col gap-[12px] text-[#6D7888]">

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="1"
            id="studio"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="studio">
            studio
          </label>
        </div>

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="2"
            id="02"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="02">
            02
          </label>
        </div>

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="3"
            id="03"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="03">
            03
          </label>
        </div>

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="4"
            id="+4"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="+4">
            +4
          </label>
        </div>

      </div>
    </div>
    )
}

export default Bedrooms