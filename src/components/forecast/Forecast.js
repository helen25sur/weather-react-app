import { useContext } from "react";
import { CityContext } from "../AppContext";

import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast({ city }) {
  const { city } = useContext(CityContext);

  return (
    <div className="weather-days col-xl-9 col-12 row">
      {city}
      <ForecastDay />

    </div>
  )
}