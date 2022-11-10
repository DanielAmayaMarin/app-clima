import React from "react";
import { getCityWeather } from "../services/weather";

export const Ciudad = ({cities, setWeather}) => {

  const weatherHandle = async e => e.currentTarget.value !== "Selecciona" ? setWeather( await getCityWeather(e.currentTarget.value)): setWeather(false);


  return (
    <>
    {cities.length > 0 && (
      <section className="select-none">
        <label
          className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
          htmlFor="Ciudad"
        >
          Elige una ciudad
        </label>
        <select onChange={weatherHandle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="Ciudad"
          id="SelectPaices"
        >
          <option value="Selecciona">Selecciona</option>
          {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
        </select>
        <p className="mt-4 text-sm text-white font-semibold rounded-lg">Total ciudades: <span className="text-sm font-black text-white">{cities.length}</span> </p>
      </section>
       )}
    </>
  );
};
