import React, { useState } from 'react'
import styles from './style.module.css'
import SearchInput from '../../components/Input/Input'
import WeatherCard from '../../components/Card/Card'

const Home = () => {
    const [cityData, setCityData] = useState(null);
    
    const searchCity = async (city) => {
        const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=' + `${city}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '9076eac4a5msha9000f7a84a1cb1p112ed6jsn13542991e11b',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setCityData(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.wrapper}>
            <SearchInput searchCity={searchCity} />
            <WeatherCard cityData={cityData} />
        </div>
    )
}

export default Home;
