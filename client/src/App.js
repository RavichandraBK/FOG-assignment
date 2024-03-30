
import { useEffect, useState } from 'react';
import Home from './Components/Home';
import myContext from './Contexts/MyContext';
import GetGameData from './apis/Gamedata';
function App() {
  const [gameData, setGameData] = useState('');
  useEffect(()=>{
    const handleAPI = async()=>{
      const apiRes = await GetGameData();
      console.log(apiRes.data)
      setGameData(apiRes.data);
    }
    handleAPI();
  },[])
  const [multiplayer,setMultiplayer] = useState(false);
  return (
    <myContext.Provider value={{gameData,setGameData,multiplayer,setMultiplayer}}>
    <div >
      <Home/>
    </div>
    </myContext.Provider>
  );
}

export default App;
