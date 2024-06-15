import { useState, useEffect } from "react";

import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

import searchingCurrentWeatherAPI from "./utils/searchingCurrentWeatherAPI";

export default function App() {

  const [city, setCity] = useState("Berlin");
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const data = await searchingCurrentWeatherAPI(city);
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app-content col-10 my-4 mx-auto card mb-3 shadow-lg mh-100">
      <Header />
      <Main {...weatherData} />
    </div>
  )
}