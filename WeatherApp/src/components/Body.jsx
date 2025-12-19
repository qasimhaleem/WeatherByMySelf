import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Body = (props) => {
    const [weather, setWeather] = useState();
    const fetchData = async () => {
        if (!props.searchCity) return;
        const response = await axios.get(`https://wttr.in/${props.searchCity}?format=j1`)
        console.log(response.data)
        setWeather(response);
    }
    fetchData();

    if (!weather) {
        return (
            <div className="flex justify-center mt-10">
                <h2 className="text-xl font-bold">Please Wait a Sec...</h2>
            </div>
        )

    }

    return (
        <div className="grid justify-around place-items-center border border-white">
            <div className='card'>
                <h6>Temp-C: {weather.data.current_condition[0].temp_C}</h6>
            </div>
            <div className='card'>
                <h6>Wind   {weather.data.current_condition[0].windspeedMiles}</h6>
            </div>
            <div className='card'>
                <h6>Humadity {weather.data.current_condition[0].humidity}</h6>
            </div>
            <div className='card'>
                <h6>Air Quality {weather.data.current_condition[0].visibility}</h6>
            </div>
        </div>
    )
}
export default Body