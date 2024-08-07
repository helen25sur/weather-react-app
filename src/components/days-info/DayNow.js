export default function DayNow({ temperatureDescription, temperature, humidity, wind, icon }) {
  return (
    <div className="weather-day weather-day_active py-2 pb-3 col-3 border-end border-dark-subtle bg-light-subtle shadow-sm rounded-1">
      <div className="row">
        <h3 className="fs-5">Now</h3>
        <div id="current-temperature-icon" className="col-4 fs-1">
          <img src={icon} alt={temperatureDescription} className="main-icon-active" />
        </div>
        <div className="col-8">
          <span id="current-temperature-description" className="text-capitalize fs-5">
            {temperatureDescription}
          </span>
          <br />
          <span id="current-temperature" className="temp-celsius fs-3">
            {temperature}°C
          </span>
        </div>
      </div>

      <div className="col-xxl-8 col-sm-12 text-center">
        <span className="humidity fs-5">Humidity: {humidity}%</span><br />
        <span className="wind fs-5">Wind: {wind}km/h</span>
      </div>
    </div>
  );
}
