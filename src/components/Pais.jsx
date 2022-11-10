import { useEffect, useState } from "react";
import { getCities } from "../services/cities";
import { getCountries } from "../services/countries";

export const Pais = ({ setCities, setWeather }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandle = async (e) => {
    e.currentTarget.value !== "Selecciona"
      ? setCities(await getCities(e.currentTarget.value))
      : setCities([]);

    setWeather(false);
  };

  return (
    <>
      <section className="select-none flex flex-col justify-center">
        <label
          className="block mb-2 text-sm font-medium text-white dark:text-gray-400"
          htmlFor="país"
        >
          Elige un país
        </label>
        <select
          onChange={countryHandle}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          name="país"
          id="SelectPaices"
        >
          <option value="Selecciona">Selecciona</option>
          {countries.map((contry) => (
            <option key={contry.cca2} value={contry.cca2}>
              {contry.name.common}
            </option>
          ))}
        </select>
      </section>
    </>
  );
};
