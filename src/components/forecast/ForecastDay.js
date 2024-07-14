export default function ForecastDay() {
  return (
    <div className="weather-day col p-2 ps-3 align-self-end bg-light-subtle border-end border-dark-subtle shadow-sm" id="forecast-day-0">
      <h3 className="fs-5 fw-normal"> Sun 14th</h3>
      <div className="row">
        <div className="col">
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="clear-sky-day icon" width="50" />
        </div>
        <div className="col">
          <p className="fw-bold">37°</p>
          <p className="fw-light">27°</p>
        </div>
      </div>
    </div>
  )
}