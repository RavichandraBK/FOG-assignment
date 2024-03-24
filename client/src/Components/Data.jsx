import React from "react";

const Data = ({barName,value,max}) => {
  // const value = 134;
  // const max = 185;
  
  return (
    <>
      <div>
        <div className="flex justify-between items-center w-full p-2">
          <p className="tracking-[.15em] font-bold text-sm">{barName}</p>
          <div className="ml-20 text-sm">
            {value&&max&&(<><span className="leading-tight block text-end text-sm">{`${value}/${max}`}</span>
            <progress
              value={value}
              max={max}
              className="h-1.5 w-24"
            /></>)}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Data;
