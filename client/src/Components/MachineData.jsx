import React from 'react'
import tank from '../assets/soldier__tank-white.png'
const MachineData = () => {
  return (
    <>
        <div className='mt-5 ml-5'>
            <div className='w-[283px] h-[180px] bg-[rgba(16,16,16,0.5)] p-2'>
                <p className='text-[16px] font-light'>chant</p>
                <div>
                    <img src={tank} alt="" />
                </div>
                <p className='text-md font-[600] tracking-[0]'>hare </p>
                <p className='text-sm font-light'>krishna</p>
            </div>
        </div>
    </>
  )
}

export default MachineData