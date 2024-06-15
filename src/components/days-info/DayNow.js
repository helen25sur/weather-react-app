export default function DayNow() {
  //  { temperatureDescription, temperature, humidity, wind, icon }
  return (
    <div className="weather-day weather-day_active py-2 pb-3 col-3 border-end border-dark-subtle bg-light-subtle shadow-sm rounded-1">
      <div className="row">
        <h3 className="fs-5">Now</h3>
        <p id="current-temperature-icon" className="col-xxl-4 col-sm-12 text-center">
          {/* <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt={temperatureDescription} /> */}
        </p>
        <div className="col-xxl-8 col-sm-12 text-center">
          <span id="current-temperature-description" className="text-capitalize fs-5">
            {/* {temperatureDescription} */}
          </span>
          <br />
          <span id="current-temperature" className="temp-celsius fs-3">
            {/*  {temperature} {humidity} {wind} */}
            °C
          </span> <br />
          <span className="humidity fs-5">Humidity: %</span><br />
          <span className="wind fs-5">Wind: km/h</span>

        </div>
      </div>
    </div>
  );
}
