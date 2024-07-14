import axios from "axios";

export default async function searchingCurrentWeatherAPI(city) {

  if (!city) {
    throw new Error('City parameter is required');
  }

  const URL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=be7of017954f4b25219t2327c4fa94c7&units=metric`;

  const weatherData = {
    city: '',
    temperature: '',
    temperatureDescription: '',
    humidity: '',
    wind: '',
    icon: '',
    coord: null
  }

  try {
    const response = await axios.get(URL);

    console.log(response);

    weatherData.city = response.data.city;
    weatherData.temperature = Math.round(response.data.temperature.current);
    weatherData.temperatureDescription = response.data.condition.description;
    weatherData.humidity = response.data.temperature.humidity;
    weatherData.wind = response.data.wind.speed;
    weatherData.icon = response.data.condition.icon_url;
    weatherData.coord = response.data.coordinates;

  } catch (error) {
    console.error(error.message);
    throw error;
  }

  return weatherData;

}