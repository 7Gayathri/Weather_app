import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
export default function Weather() {
    const[data,setdata]=useState(null);
    const[inputdata,setinputdata]=useState("chennai");
    useEffect(()=>{
      var apicall= fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputdata}&appid=70533abebcd0ef5ba7c9f312a7068477`);
      var data=apicall.then((item)=>item.json());
      data.then((value)=>setdata(value));
    },[inputdata]);
    // console.log(data);
  const submittingFrom=(even)=>{
      console.dir(even.target[0].value);
      setinputdata(even.target[0].value);
      even.preventDefault();
    }
    console.log(data,inputdata);
  return (
    <>
      <div className="overall">
        <div className="card">
          <h1>Weather App</h1>
          <form className="wrap" onSubmit={(e)=>submittingFrom(e)}>
            <input type="text" placeholder="Enter your city name"  />
            <button type="submmit" className="icon">
              <FcSearch />
            </button>
          </form>

          <h1>{data?.name}</h1>
          <h1>
            <span>
              <FaCloudShowersHeavy />
            </span>
            <span>{data?.weather[0].main}</span>
          </h1>
          <div className="box">
            <div className="sec1">
              <p>Humidity</p>
              <span>
                <WiHumidity />
              </span>
              <span>{data?.main.humidity}</span>
            </div>

            <div className="sec1">
              <p>Wind Speed</p>
              <span>
                <FaWind />
              </span>
              <span>{data?.wind.speed}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
