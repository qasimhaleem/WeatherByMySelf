import React from 'react'
import { useState, useEffect } from 'react'
import axio from 'axios'
import axios from 'axios'

const Body = (props) => {
    const CityName = props.searchName;
    const [weather, setWeather] = useState()

    useEffect(() => {
        axios.get(`https://wttr.in/${CityName}?format=j1`)
            .then(response => {
                setWeather(response);
            })
    }, [])
    // console.log(`The city you have searched for is: ${CityName}`)
    console.log(weather)


    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl border border-gray-200">
            <div className='card'>
                <h6>Perciption</h6>
            </div>
            <div className='card'>
                <h6>Wind</h6>
            </div>
            <div className='card'>
                <h6>Humadity</h6>
            </div>
            <div className='card'>
                <h6>Air Quality</h6>
            </div>
        </div>
    )
}

export default Body