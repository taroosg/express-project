import axios from "axios";

export const getWeather = async ({ latitude, longitude }) => {
  try {
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=Asia%2FTokyo`;
    const weather = (await axios.get(url)).data;
    const weatherData = weather.daily;
    const keys = Object.keys(weatherData);
    // console.log(keys);
    const fantasticJson = [...new Array(7)].map((x, i) =>
      Object.fromEntries(keys.map((x) => [x, weatherData[x][i]]))
    );
    return fantasticJson;
  } catch (e) {
    throw Error("Error while getting Weather.");
  }
};