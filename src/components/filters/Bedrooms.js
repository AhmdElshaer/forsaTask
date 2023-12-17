

function Bedrooms() {

  return (
    <div className="flex flex-col gap-[30px]">
      <p className="text-[18px] font-bold">Type of home</p>
      <div className="flex flex-col gap-[12px] text-[#6D7888]">

        <div className="flex gap-[10px]">
          <input
            className=""
            type="checkbox"
            value="studio"
            id="studio"
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
            value="02"
            id="02"
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
            value="03"
            id="03"
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
            value="+4"
            id="+4"
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