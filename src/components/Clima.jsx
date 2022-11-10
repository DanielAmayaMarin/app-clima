import React, { useState } from 'react'
import { Ciudad } from './Ciudad';
import { Pais } from './Pais'
import { Weather } from './Weather';

export const Clima = () => {

  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  return (
    <div className='container mx-auto grid grid-rows-2 min-h-screen'>
      <header className='w-full justify-center grid grid-rows-2'>
        <Pais setCities={setCities}
        setWeather={setWeather}/>
        <Ciudad cities = {cities}
        setWeather={setWeather}/>
      </header>
      <main className='w-full'>
        <Weather weather={weather}/>
      </main>
    </div>
  )
}
