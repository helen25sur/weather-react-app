import CityAndDate from "./CityAndDate";
import DayNow from "./days-info/DayNow";
import Forecast from "./forecast/Forecast";

export default function Main(weather) {
  return (
    <main className="app-main card-body row justify-content-center">
      <section className="app-weather-days row my-4">
        <CityAndDate />
        <section className="app-weather-days row my-4">
          <DayNow {...weather} />
          <Forecast />
        </section>

      </section>
    </main>
  )
}