import React, { useState } from 'react'
import styles from './Input.module.css'

const Input = ({ searchCity }) => {
  let handleChange = (e) => {
    let cityName = e.target.value


    setTimeout(() => {
      searchCity(cityName)
    }, 2000);
  }

  return (
    <>
        <input 
            type="text" 
            placeholder="Enter City Name"
            className={styles.searchInput} 
            onChange={handleChange}
        />
    </>
  )
}

export default Input