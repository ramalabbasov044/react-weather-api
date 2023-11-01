import React, { useState } from 'react'
import styles from './Card.module.css'

const Card = ({ cityData }) => {
  let lastHourData = []
  for(let i = 0 ; i < 4 ; i++){
    lastHourData.push(cityData?.forecast?.forecastday[0]?.hour[i])
  }
  return (
    <>
        {
              <div className={styles.weatherBox}>
                <div className={styles.weatherLeft}>
                  <img
                    alt=''
                    src={cityData?.current?.condition?.icon ? cityData?.current?.condition?.icon : "//cdn.weatherapi.com/weather/64x64/night/113.png"}
                    className={styles.weatherIcon}
                  />
                </div>
                
                <div className={styles.weatherRight}>
                  <p className={styles.weatherLocationCountry}>
                    {
                      cityData?.location?.country ? cityData?.location?.country : "Turkey"
                    }
                  </p>

                  <p className={styles.weatherLocationName}>
                    {
                      cityData?.location?.name ? cityData?.location?.name : "Istanbul"
                    }
                  </p>
                
                  <span className={styles.temp}>
                    {
                      cityData?.current?.temp_c ? cityData?.current?.temp_c : "30"
                    }
                    °C
                  </span>
                </div>
              </div> 
        }
        <div className={styles.lastWeather}>
            <p className={styles.lastWeatherTitle}>
              Son 4 saatin datalari
            </p>

            {
              lastHourData.map((item) => 
                <div className={styles.miniItem}>
                    <p className={styles.lastTime}>
                      {
                        item?.time ? item?.time : "2023-11-01 01:00"
                      }
                    </p>
                    <p className={styles.lastTemp}>
                      {
                        item?.temp_c ? item?.temp_c : 10
                      }
                      °C
                    </p>
                </div>
              )
            }
        </div>
    </>
  )
}

export default Card