import { useContext, useEffect, useState } from "react";
import { CityContext } from "../../AppContext";

import "./Forecast.css";
import ForecastDay from "./ForecastDay";
import forecastDailyWeatherAPI from "../../utils/forecastWeatherAPI";

export default function Forecast() {
  const { city } = useContext(CityContext);

  const [forecastData, setForecastData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetchForecastData();
  }, []);

  async function fetchForecastData() {
    try {
      const data = await forecastDailyWeatherAPI(city);
      setForecastData(data);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoaded) {
    return (
      <div className="weather-days col-xl-9 col-12 row">
        {forecastData.daily.map((day, idx) => <ForecastDay {...day} key={idx} />)}
      </div>
    )
  } else {
    fetchForecastData();
  }


}