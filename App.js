import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css" 
import {useEffect,useState} from "react";
import './App.css';

function App() {

const apikey="9f9ff7496b9db7d296ad64fd884eb0b7"
const [InputCity,setInputCity]=useState("")
const [data, setData ] = useState({})

const getweatherdetails=(cityName) =>{
  if(!cityName) return
  const apiURL="https://api.openweathermap.org/data/2.5/weather?q="+cityName + "&appid="+ apikey
  axios.get(apiURL).then((res)=>{
    console.log("response",res.data)
    setData(res.data)
  }).catch((err)=>{
    console.log("err",err)
  }) 
}

const handleChangeInput=(e) =>{
  console.log("value",e.target.value)
  setInputCity(e.target.value)

}

const handleSearch = () =>{
  getweatherdetails(InputCity)
}


return (
  
  
<div className="col-md-12">
    <div className="wetherBg">
      <h1 className="heading">weather app</h1>
  
      
      <div className="d-grid gap-3 col-4 mt-4">
        <input type="text" className="form-control"
          value={InputCity}
          onChange={handleChangeInput}/>
        <button className="btn btn-primary" type="button"
           onClick={handleSearch}
        >Search</button>
      </div>     
    </div>

      <div className="col-md-12 text-center mt-5">

        <div className="shadow rounded wetherResultBox">
          <img className="wheathericon"
             src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"></img>
      
      
          <h5 className="weathercity">
            {data?.name}
          </h5>
          <h6 className="weathertemp">{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
        </div>
      </div>
   
   
    </div>
  );
}

export default App;
