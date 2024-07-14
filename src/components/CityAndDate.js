import { useContext } from "react";
import { CityContext } from "../AppContext";

export default function CityAndDate() {

  const { city } = useContext(CityContext);

  const date = new Date();
  const dateDay = date.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const hours = date?.getHours();
  const minutes = date?.getMinutes();
  const time = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes);

  return (
    <div className="mb-3 bg-light-subtle py-2 shadow-lg rounded-1">
      <h2 id="city" className="city-name card-title text-capitalize">
        {city}
      </h2>
      <span id="current-date">
        <strong>
          {days[dateDay]}, {time}
        </strong>
      </span>
    </div>
  )
}