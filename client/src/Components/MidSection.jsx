import React from "react";
import soldier from "../assets/soldier__pic.png";
import celDog from "../assets/BF4_Celebration_Dog_Tag.png";
import premDog from "../assets/premium dog tag.png";
import solInfo from "../assets/soldier__level.svg";
import Data from "./Data";
import myContext from "../Contexts/MyContext";
import { useContext } from "react";
import MachineData from "./MachineData";
import Card from "../Components/Card";
import { useState } from "react";
import backImg from "../assets/background.png";
const MidSection = () => {
  const { gameData, multiplayer } = useContext(myContext);
  const [hover, setHover] = useState(false)
  const arr = [
    {
      img: backImg,
      title: "QUICKMATCH",
      text: "The quickest way to get into any of the game modes.",
    },
    { img: backImg, title: "SQUAD JOIN", text: "Play with some friends." },
    {
      img: backImg,
      title: "SERVER BROWSER",
      text: "The old school way of finding that perfect game. Set up your filters and you’re ready to go.",
    },
    {
      img: backImg,
      title: "TEST RANGE",
      text: "Try out all the weapons, gadgets and vehicles to improve your skills on the battlefield.",
    },
  ];
  return (
    <>
      {multiplayer ? (
        <div className="flex">
          {arr.map((item, index) => (
            <div className="ml-5" key={index} onMouseEnter={()=>{setHover(true)} }onmouseleave={()=>{setHover(false)}}>

                <Card
                  key={index}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  hover={hover}
                />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex mt-20">
          <div>
            <img src={soldier} alt="" width={250} height={250} />
            <img
              src={celDog}
              alt=""
              className="absolute top-[450px] left-[80px]"
              width={190}
              height={190}
            />
            <img
              src={premDog}
              alt=""
              className="absolute top-[350px] left-[180px]"
              width={190}
              height={190}
            />
          </div>
          <div>
            <div className="flex">
              <img
                src={solInfo}
                alt=""
                width={100}
                height={100}
                className="align-bottom mt-2"
              />
              <div className="mt-5 ml-5">
                <p>cookie</p>
                <div className="flex mt-3">
                  <div className="border h-[28px] w-[45px] border-white text-center  text-[10px]">
                    <p>63</p>
                  </div>
                  <p className="text-[16px] font-bold  ml-5">
                    {gameData && gameData.rank.obtained}/
                    {gameData && gameData.rank.total}
                    <span className="font-light">
                      -- Estimated rank up in 1h
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 flex">
              <div className="divide-y-2 divide-game-border">
                <div></div>
                {gameData.specifications &&
                  gameData.specifications.map((item, index) => (
                    <Data
                      key={index}
                      barName={item.name}
                      value={item.score}
                      max={item.total}
                    />
                  ))}
                <Data barName={gameData.extra} />
                <div></div>
              </div>

              <div className="">
                <div className="flex justify-between ml-5 w-56">
                  <div>
                    <p className="font-[200] text-[15px]">
                      {gameData && gameData.wins.name}
                    </p>
                    <p className="font-[700] text-[30px]">
                      {gameData && gameData.wins.value}
                    </p>
                  </div>
                  <div className="ml-20">
                    <p className="font-[200] text-[15px]">
                      {gameData && gameData.score_min.name}
                    </p>
                    <p className="font-[700] text-[30px]">
                      {gameData && gameData.score_min.value}
                    </p>
                  </div>
                  <div className="ml-20">
                    <p className="font-[200] text-[15px]">
                      {gameData && gameData.kills_min.name}
                    </p>
                    <p className="font-[700] text-[30px]">
                      {gameData && gameData.kills_min.value}
                    </p>
                  </div>
                </div>
                <div className="w-[600px] flex flex-wrap">
                  {gameData &&
                    gameData.machine.map((item, index) => (
                      <div key={index}>
                        <MachineData
                          img={item.img}
                          weapontype={item.type}
                          weaponName={item.name}
                          weaponCap={item.value}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MidSection;
