import { getWeather } from "./weather.service.js";
import { getCredo } from "./scraping.service.js";

export const getFantasticJsonData = async ({ latitude, longitude }) => {
  try {
    const weatherData = (await getWeather({ latitude, longitude }))[0];
    const credoAllData = (await getCredo());
    // 0から6を決めよう
    const difference = ~~(weatherData.temperature_2m_max - weatherData.temperature_2m_min);
    const number = difference < 1
      ? 0
      : [1, 2].includes(difference)
        ? 1
        : [3, 4].includes(difference)
          ? 2
          : [5, 6].includes(difference)
            ? 3
            : [7, 8].includes(difference)
              ? 4
              : [9, 10].includes(difference)
                ? 5
                : 6;

    console.log(number);
    const credoData = credoAllData[number];
    return { weatherData, credoData };
  } catch (e) {
    throw Error("Error while getting JSON.");
  }
};