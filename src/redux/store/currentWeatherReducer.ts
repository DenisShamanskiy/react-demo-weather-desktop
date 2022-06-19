import { SET_CURRENT_WEATHER } from "redux/constants"
import { StateCurrentWeather, ActionSetCurrentWeather } from "redux/types"

const innitialState: StateCurrentWeather = {
    name: "",
    main: {
        temp: 0,
        temp_max: 0,
        temp_min: 0,
        humidity: 0,
        pressure: 0,
        feels_like: 0
    },
    weather: [{description: "", icon: ""}],
    visibility: 0,
    timezone: 0,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0
    },
    sys: {
        sunrise: 0,
        sunset: 0
    },
    rain: {
        "1h": 0,
    },
    snow: {
        "1h": 0,
    }
}

export const currentWeatherReducer = (state = innitialState, action: ActionSetCurrentWeather): StateCurrentWeather => {

    switch (action.type) {
        
        case SET_CURRENT_WEATHER:
        return {
            ...state,
            name: action.payload.name,
            main: action.payload.main,
            weather: action.payload.weather,
            visibility: action.payload.visibility,
            timezone: action.payload.timezone,
            wind: action.payload.wind,
            sys: action.payload.sys,
            rain: action.payload.rain,
            snow: action.payload.snow
        }
        
        default:
            return state

    }
  
}
