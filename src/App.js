import { useState, useEffect } from "react";
import { RotatingLines } from 'react-loader-spinner';

import { CityContext } from "./AppContext";

import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

import searchingCurrentWeatherAPI from "./utils/searchingCurrentWeatherAPI";

export default function App() {

  const [city, setCity] = useState("Berlin");
  const [weatherData, setWeatherData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);

  function cityFromSearchInput(cityValue) {
    setCity(cityValue);
  }

  async function fetchWeatherData() {
    try {
      const data = await searchingCurrentWeatherAPI(city);
      setWeatherData(data);
      setIsLoaded(true);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    fetchWeatherData();
  }, [city]);

  if (!isLoaded) {
    return (
      <div className="app-content col-10 my-4 mx-auto card mb-3 shadow-lg h-75">
        <Header cityFromSearchInput={cityFromSearchInput} />
        <div className="mx-auto pt-4" >
          <RotatingLines
            strokeColor="#0b222f"
            visible={true}
            height="56"
            width="56"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading" />
        </div>

      </div>);
  }

  return (
    <CityContext.Provider value={{ city, setCity }}>
      <div className="app-content col-10 my-4 mx-auto card mb-3 shadow-lg mh-100">
        <Header cityFromSearchInput={cityFromSearchInput} />
        <Main {...weatherData} />
        <p className="text-center fs-6 small" style={{ color: 'var(--clr-main-title)' }}><a href="https://github.com/helen25sur/weather-react-app">Open-source code</a>, by Olena Surilova</p>
      </div>
    </CityContext.Provider>

  )
}