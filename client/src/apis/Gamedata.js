import axios from 'axios'


const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/get-data`;
console.log(backendUrl)
const GetGameData = async()=>{
    
    try {
        const response = await axios.get(backendUrl);

        return response
    } catch (err) {
        console.log('couldnt get game data',err);
    }
}
export default GetGameData;