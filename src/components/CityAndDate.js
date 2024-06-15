export default function CityAndDate({ city }) {
  return (
    <div className="mb-3 bg-light-subtle py-2 shadow-lg rounded-1">
      <h2 id="city" className="city-name card-title text-capitalize">
        {city}
      </h2>
      <span id="current-date">
        <strong>
          {/* {days[dateDay]}, {time} */}
          Saturday, 13:04
        </strong>
      </span>
    </div>
  )
}