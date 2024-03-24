import React from 'react'

const MachineData = ({img,weapontype,weaponName,weaponCap}) => {
  return (
    <>
        <div className='mt-5 ml-5 '>
            <div className='w-[223px] h-[120px] bg-[rgba(16,16,16,1)] hover:bg-white hover:text-black  p-2'>
                <p className='text-[10px] leading-tight font-light'>{weapontype}</p>
                <div className=' flex items-center justify-center'>
                <div className='w-16 h-16 hover:text-black'>
                    <img src={img} alt="" className='w-full h-full hover:stroke-neutral-700'/>
                </div>
                </div>
                <p className=' font-[600] leading-tight text-[10px]'>{weaponName} </p>
                <p className=' font-light leading-tight text-[10px]'>{weaponCap}</p>
            </div>
        </div>
    </>
  )
}

export default MachineData