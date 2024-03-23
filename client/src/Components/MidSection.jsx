import React from 'react'
import soldier from '../assets/soldier__pic.png'
import celDog from '../assets/BF4_Celebration_Dog_Tag.png'
import premDog from '../assets/premium dog tag.png'
import solInfo from '../assets/soldier__level.svg'
import Data from './Data'
const MidSection = () => {
  return (
    <>
    <div className='flex'>
        <div>
            <img src={soldier} alt="" width={250} height={250}/>
            <img src={celDog} alt=""  className='absolute top-[390px] left-[80px]' width={190} height={190}/>
            <img src={premDog} alt=""  className='absolute top-[290px] left-[150px]' width={190} height={190}/>
        </div>
        <div>
            <div className='flex'>
                <img src={solInfo} alt="" width={100} height={100} className='align-bottom mt-2'/>
                <div className='mt-5 ml-5'>
                <p>hare krishna</p>
                <div className='flex mt-3'>

                <div className='border h-[28px] w-[45px] border-white text-center  text-[10px]'><p>haribol</p></div>
                <p className='text-[16px] font-light  ml-5'>hari hari</p>
                </div>
                </div>
            </div>
            <div>
                <Data/>
                {/* <div>left</div> */}
                {/* <div>right</div> */}
            </div>
        </div>
    </div>
    </>
  )
}

export default MidSection