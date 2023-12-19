import { useDispatch } from "react-redux";
import { productActions } from "../../store/product-slice";

function HomeType() {

  const dispatch = useDispatch();
  const onSelectHandler = (e) => {
    if(e.target.checked === true){
      dispatch(productActions.addHomeFilter(e.target.value));
    }else{
      dispatch(productActions.deleteHomeFilter(e.target.value));
    }
  }

  return (
    <div className="flex flex-col gap-[30px] pb-[14px] border-b">
      <p className="text-[18px] font-bold">Type of home</p>
      <div className="flex flex-col gap-[12px] text-[#6D7888]">

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="appartment"
            id="appartment"
            onChange={onSelectHandler}
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer"
            htmlFor="appartment">
            Appartment
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