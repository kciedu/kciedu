import React from 'react'
import { GiBrain } from "react-icons/gi";
function Deatilsheader() {
  return (
    <div className="w-full bg-blue-900 min-h-16 flex items-center justify-between flex-wrap p-5">
    {["Best Learing","Best enviroment","Best placement","Best teachers"].map((i) => (
      <div className="infobox max-w-[300px] flex items-center gap-2 ml-2 justify-center mt-2">
        <div className="icon text-white text-lg sm:text-xl md:text-2xl"><GiBrain /></div>
        <div className="text text-white text-lg sm:text-xl md:text-2xl">{i}</div>
      </div>
    ))}
  </div>
  )
}

export default Deatilsheader