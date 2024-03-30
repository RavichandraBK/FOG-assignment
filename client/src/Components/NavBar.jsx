import React, { useContext } from "react";
import { useState } from "react";
import navEdge from '../assets/nav-edgeImg.png'
import MidSection from "./MidSection";

import myContext from "../Contexts/MyContext";
const NavBar = () => {
  const {multiplayer,setMultiplayer} =useContext(myContext)
    const [activeTab, setActiveTab] = useState(null);

    const handleTab = (tabName)=>{
        if(tabName==='MULTIPLAYER')
        setMultiplayer(true);
        setActiveTab(tabName===activeTab?null:tabName)
    }
  return (
    <>
      <div className="mt-10 w-full divide-y-2 divide-game-border  pb-2 text-xl text-white font-bold ml-5">
        
        <div className="flex justify-evenly w-[500px]">
          <div className={`${activeTab === "HOME" && 'border-b border-b-white'} cursor-pointer pb-2 relative`} onClick={()=>{handleTab("HOME")}}>
            <p>HOME</p>
          </div>
          <div className={`${activeTab === "MULTIPLAYER" && 'border-b border-b-white'} cursor-pointer pb-2  ml-3`} onClick={()=>{handleTab("MULTIPLAYER")}}>
            <p>MULTIPLAYER</p>
          </div>
          <div className={`${activeTab === "CAMPAIGN" && 'border-b border-b-white'} cursor-pointer pb-2  ml-3`} onClick={()=>{handleTab("CAMPAIGN")}}>
            <p>CAMPAIGN</p>
          </div>
          <div className={`${activeTab === "SOLDIER" && 'border-b border-b-white'} cursor-pointer pb-2  ml-3`} onClick={()=>{handleTab("SOLDIER")}}>
            <p>SOLDIER</p>
          </div>
          <div className={`${activeTab === "STORE" && 'border-b border-b-white'} cursor-pointer pb-2  ml-3`} onClick={()=>{handleTab("STORE")}}>
            <p>STORE</p>
          </div>
          <div className={`${activeTab === "MORE" && 'border-b border-b-white'} cursor-pointer pb-2  ml-3`} onClick={()=>{handleTab("MORE")}}>
            <p>MORE</p>
          </div>
          <div className="absolute top-5 left-[1200px]">
            <img src={navEdge} alt="" width={250} height={250}/>
          </div>
        </div>
        
        <div className="ml-24">
            <MidSection/>
        </div>
      </div>
    </>
  );
};

export default NavBar;
