import CityAndDate from "./CityAndDate";
import DayNow from "./days-info/DayNow";

export default function Main(weather) {
  return (
    <main className="app-main card-body row justify-content-center">
      <section className="app-weather-days row my-4">
        <CityAndDate city={weather.city} />
        <DayNow {...weather} />
      </section>
    </main>
  )
}