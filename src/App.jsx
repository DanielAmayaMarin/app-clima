import { getCountries } from "./services/countries";
import { getCities } from "./services/cities";
import {getCityWeather} from "./services/weather";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);
  const countryHandle = async (e) => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null)
  }
  const weatherHandle = async e => e.currentTarget.value && setWeather( await getCityWeather(e.currentTarget.value));

  return (
    <>
        <section>
          <label htmlFor="país">Elige un país</label>
          <select onChange={countryHandle} name="país" id="SelectPaices">
            <option value="">Selecciona</option>
            {countries.map((contry) => (
              <option key={contry.cca2} value={contry.cca2}>
                {contry.name.common}
              </option>
            ))}
          </select>
        </section>

        {cities.length > 0 && (
          <section>
            <label htmlFor="país">Elige una ciudad</label>
            <select onChange={weatherHandle} name="país" id="SelectPaices">
              <option value="">Selecciona</option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <p>Total ciudades: {cities.length}</p>
          </section>
        )}

        <section>
          {
            weather && (
              <div>
                <h2>Termperatura Actual: {weather.main.temp}°</h2>
                <p>Min: {weather.main.temp_min.toFixed()}°</p>
                <p>Max: {weather.main.temp_max.toFixed()}°</p>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon"/>
                <p>Tipo de tiempo: {weather.weather[0].main}</p>
              </div>
            )
          }
        </section>
    </>
  );
}

export default App;
