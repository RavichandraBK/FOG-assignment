import React from 'react'
import NavBar from './NavBar'
import SideNav from './SideNav'
import bfv from '../assets/BFV_Emblem.svg'
const Home = () => {
  return (
    <>
        <div>
            <div className='flex'>
                <div>
                  <SideNav/>
                  </div>
                <div className=''><NavBar/></div>
                <div className="absolute left-[800px] top-0 opacity-100">
            <img src={bfv} alt="" />
        </div>
                <div className=''>Chant Hare krishna</div>
            </div>
        </div>
    </>
  )
}

export default Home