import "./Forecast.css";
import ForecastDay from "./ForecastDay";

export default function Forecast({ city }) {
  return (
    <div className="weather-days col-xl-9 col-12 row">
      {city}
      <ForecastDay />

    </div>
  )
}