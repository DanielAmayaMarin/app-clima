export const Weather = ({ weather }) => {
  return (
    <>
      {weather && (
        <div className="h-full flex flex-col items-center text-center">
          <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Termperatura Actual: {weather.main.temp}°</h2>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Min: {weather.main.temp_min.toFixed()}°</p>
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Max: {weather.main.temp_max.toFixed()}°</p>
          <img className=""
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />
          <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tipo de tiempo: {weather.weather[0].main}</p>
        </div>
      )}
    </>
  );
};
