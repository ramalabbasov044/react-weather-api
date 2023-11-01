import React, { useState } from 'react'
import styles from './style.module.css'
import SearchInput from '../../components/Input/Input'
import WeatherCard from '../../components/Card/Card'

const Home = () => {
    const [cityData,setCityData] = useState()
    
    let searchCity = (city) => {
        const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + `${city}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9076eac4a5msha9000f7a84a1cb1p112ed6jsn13542991e11b',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        fetch(url,options)
        .then((res) => res.json())
        .then((data) => setCityData(data))
    }

    return (
        <div className={styles.wrapper}>
            <SearchInput searchCity={searchCity} />

            <WeatherCard cityData={cityData} />
        </div>
    )
}

export default Home