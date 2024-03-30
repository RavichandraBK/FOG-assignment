// import React, { useState } from 'react'

// const Card = ({img, title, text, hover}) => {
    
//   return (
//     <>
//         <div>
//             <div className='w-48 h-48'>
//                 <div className={`w-full h-1/2 ${hover&&'scale-75'}`}>
//                     <img src={img} alt="" className='w-fit h-fit'/>
//                 </div>
//                 <div className={`opacity-80 ${hover&&'bg-white'}`}>
//                     <p className={`font-rajdhani text-xl text-white ${hover&&'text-black'}`}>{title}</p>
//                     <p className='font-rajdhani text-sm text-gray-50'>{text}</p>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Card
import React from 'react';

const Card = ({ img, title, text }) => {
  return (
    <div className="relative overflow-hidden w-64 h-64 bg-gray-800 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-95">
      <img src={img} alt={title} className="w-full h-auto" />
      <div className="absolute bottom-0 left-0 w-full px-4 py-2 transition-colors duration-300 ease-in-out">
        <h2 className="text-lg font-semibold bg-gray-900 bg-opacity-75 hover:bg-white">{title}</h2>
        <p className="mt-1 bg-gray-900 bg-opacity-75 hover:bg-white">{text}</p>
      </div>
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-75 transition-opacity duration-300 ease-in-out"></div>
    </div>
  );
};

export default Card;


