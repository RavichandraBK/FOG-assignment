import React from 'react'
import { useState } from 'react';
const LeftNavComp = ({img,bg, tagName}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Check if mouse position is close to the center
        const isNearCenter = Math.abs(offsetX - centerX) < 5 && Math.abs(offsetY - centerY) < 5;
        // const isNearCenter = true;
        
        // Set hover state based on mouse position
        setIsHovered(isNearCenter);
    };

    // Function to handle mouse leave event
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
  return (
    <> <div className='flex ' >

        <div className='w-10 h-15 mt-3 '  >
            <div className={``} >

            {/* <img src={img} alt="" className='w-full h-full hover:opacity-100 opacity-25' onMouseEnter={handleMouseEnter} */}
            <img src={img} alt="" className={`w-full h-full ${isHovered?'hover:opacity-100': 'opacity-25'}`} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave} style={{backgroundColor:bg}}/>
    </div>
        </div>
        {
            isHovered && (<div className='text-center w-full h-fit relative bg-black text-white text-[12px] ml-14 mt-5 font-bold transition-opacity duration-300'><p>{tagName}</p></div>)
        }
            </div>
    </>
  )
}

export default LeftNavComp