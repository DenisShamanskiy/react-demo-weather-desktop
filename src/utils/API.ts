import { StateAirPollution, StateCurrentWeather, StateOneCall } from "redux/types";
import { Coordinates } from "redux/types";

const axios = require("axios").default;

export const API_KEY = "308668a1e7aa8a2725ddb201e281ebeb"
export const MY_TIMEOUT = 10000

export async function сurrentWeatherAPI({latitude, longitude}: Coordinates): Promise<StateCurrentWeather> {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/weather",
      params: {
        lat: latitude,
        lon: longitude,
        units: "metric",
        lang: "ru",
        appid: API_KEY,
      },
      timeout: MY_TIMEOUT
    });
    return response.data;
}

export async function oneCallAPI({latitude, longitude}: Coordinates): Promise<StateOneCall> {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/onecall",
      params: {
        lat: latitude,
        lon: longitude,
        exclude: "minutely",
        units: "metric",
        lang: "ru",
        appid: API_KEY,
      },
      timeout: MY_TIMEOUT
    });
    return response.data;
}

export async function airPollutionAPI({latitude, longitude}: Coordinates): Promise<StateAirPollution> {
    const response = await axios({
      url: "https://api.openweathermap.org/data/2.5/air_pollution",
      params: {
        lat: latitude,
        lon: longitude,
        appid: API_KEY,
      },
      timeout: MY_TIMEOUT
    });
    return response.data.list[0];
}

export async function getCityCoordinates(city: string): Promise<Coordinates> {
    const response = await axios({
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      q: city,
      units: "metric",
      lang: "ru",
      appid: API_KEY,
    },
    timeout: MY_TIMEOUT
  });
  const latitude: number = response.data.coord.lat
  const longitude: number = response.data.coord.lon
  return {latitude, longitude};
}