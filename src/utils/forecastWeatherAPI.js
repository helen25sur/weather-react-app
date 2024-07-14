import axios from "axios";

export default async function forecastDailyWeatherAPI(city) {
  console.log(city);
  if (!city) {
    throw new Error('City parameter is required');
  }

  const URL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=be7of017954f4b25219t2327c4fa94c7&units=metric`;

  const forecastData = {
    city: '',
    coordinates: null,
    daily: null
  }

  try {
    const response = await axios.get(URL);
    forecastData.city = response.data.city;
    forecastData.coordinates = response.data.coordinates;
    forecastData.daily = [...response.data.daily].filter((_, idx) => idx < 5);
    // console.log(forecastData);

  } catch (error) {
    console.error(error.message);
    throw error;
  }

  return forecastData;

}