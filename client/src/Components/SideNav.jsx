import React from 'react'
import LeftNavComp from './LeftNavComp'
import bf5 from '../assets/bf 5.svg'
import bf1 from '../assets/bf 1.svg'
import bf4 from '../assets/bf 4.svg'
import bfhardline from '../assets/bf hardline.svg'
import pro from '../assets/profile picture.svg'
import vid from '../assets/vid.svg'
import item from '../assets/items.svg'
import query from '../assets/query.svg'
import exit from '../assets/exit.svg'

const SideNav = () => {
    const LeftNavImg = [{img:bf5, hvrName:'BATTLEFIELD V'},{img:bf1,hvrName:'BATTLEFIELD 1'},{img:bf4, hvrName:'BATTLEFIELD 4'},{img:bfhardline, hvrName:'BATTLEFIELD HARDLINE'},{img:pro, hvrName:'CAREER'}]
    const tags = ['BATTLEFIELD V',]
  return (
    <>
        <div className='w-24 flex flex-col items-center border-r-game-border border-r-2 h-full'>
            <div className=' mt-20'>
                {LeftNavImg.map((item, index)=>(<LeftNavComp key={index} img={item.img} tagName={item.hvrName}/>))}
                <LeftNavComp img={vid} bg={'rgba(255, 255, 255, 1)'} tagName={'WATCH'}/>
                <LeftNavComp img={item} bg={'rgba(255, 255, 255, 1)'} tagName={'NEWS'}/>
                <div className='mt-40 ml-2 opacity-100'>
                    <img src={query} alt="" />
                </div>
                <div className='mt-12 ml-2 opacity-45 hover:opacity-100'>
                    <img src={exit} alt="" />
                </div>
                <div></div>
            </div>
            
        </div>
    </>
  )
}

export default SideNav