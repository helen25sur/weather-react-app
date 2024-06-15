import CityAndDate from "./CityAndDate";
import DayNow from "./days-info/DayNow";

export default function Main() {
  return (
    <main className="app-main card-body row justify-content-center">
      <section className="app-weather-days row my-4">
        <CityAndDate />
        <DayNow />
      </section>
    </main>
  )
}