export type Coordinates = {
    latitude: number | 0,
    longitude: number | 0
}

// STATE //

export interface StateAppLoading {
    loading: boolean
}

export interface StateCurrentWeather {
    name: string,
    main: {
        temp: number,
        temp_max: number,
        temp_min: number,
        humidity: number,
        pressure: number,
        feels_like: number
    },
    weather: [{description: string, icon: string}]
    visibility: number,
    timezone: number,
    wind: {
        speed: number,
        deg: number,
        gust: number
    },
    sys: {
        sunrise: number,
        sunset: number },
    rain?: {
        "1h": number
    },
    snow?: {
        "1h": number
    }
}

export interface StateAirPollution {
    components: {
        co: number
        nh3: number 
        no: number
        no2: number
        o3: number
        pm2_5: number
        pm10: number
        so2: number
    },
    main: {
        aqi: number
    }
}

export interface StateOneCall {
    alerts: any[],
    current: {
        uvi: number
    },
    daily: any[],
    hourly: any[]
    timezone_offset: number
    timezone: ""
}

export interface StatePopupAlert {
    popupAlert: boolean
}

// ACTIONS //

export type ActionApp = ActionAppShowLoading | ActionAppHideLoading

interface ActionAppShowLoading {
    type: "SHOW_LOADING",
    payload: boolean
}

interface ActionAppHideLoading {
    type: "HIDE_LOADING",
    payload: boolean
}

export interface ActionSetCurrentWeather {
    type: "SET_CURRENT_WEATHER",
    payload: StateCurrentWeather
}

export interface ActionSetAirPollition {
    type: "SET_AIR_POLLITION",
    payload: StateAirPollution
}

export interface ActionOneCall {
    type: "SET_ONE_CALL",
    payload: StateOneCall
}

export type ActionPopupAlert = ActionPopupAlertVisibility | ActionPopupAlertHidden

interface ActionPopupAlertVisibility {
    type: "POPUP_ALERT_VISIBILITY";
}

interface ActionPopupAlertHidden {
    type: "POPUP_ALERT_HIDDEN";
}

// ERROR //

export interface StateError {
    errorAirPollution: any,
    errorCurrentWeather: any,
    errorOneCall: any
};

export type ActionError = ActionErrorAirPollution | ActionErrorCurrentWeather | ActionErrorOneCall

interface ActionErrorAirPollution {
    type: "ERROR_AIR_POLLITION";
    payload: StateError
}

interface ActionErrorCurrentWeather {
    type: "ERROR_CURRENT_WEATHER";
    payload: StateError
}

interface ActionErrorOneCall {
    type: "ERROR_ONE_CALL";
    payload: StateError
}




