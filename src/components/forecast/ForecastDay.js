export default function ForecastDay({ condition, temperature, time }) {
  function showDate() {
    const timeDate = new Date(time * 1000);

    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const weekDay = week[timeDate.getDay()];
    const month = months[timeDate.getMonth()];

    const result = `${weekDay}, ${timeDate.getDate()} of ${month}`;
    return result;
  }

  return (
    <div className="weather-day col p-2 ps-3 align-self-end bg-light-subtle border-end border-dark-subtle shadow-sm" id="forecast-day-0">
      <h3 className="fs-5 fw-normal"> {showDate()} </h3>
      <div className="row">
        <div className="col">
          <img src={condition.icon_url} alt={condition.description} width="50" />
        </div>
        <div className="col">
          <p className="fw-bold temperature">{Math.round(temperature.maximum)}°</p>
          <p className="fw-light temperature">{Math.round(temperature.minimum)}°</p>
        </div>
      </div>
    </div>
  )
}