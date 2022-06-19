import { StateAirPollution, StateCurrentWeather, StateOneCall } from "redux/types"
import { ACTION_CITY_WEATHER, ACTION_LOCAL_WEATHER, ERROR_AIR_POLLITION, ERROR_CURRENT_WEATHER, ERROR_ONE_CALL, HIDE_LOADING, POPUP_ALERT_HIDDEN, POPUP_ALERT_VISIBILITY, SET_AIR_POLLITION, SET_CURRENT_WEATHER, SET_ONE_CALL, SHOW_LOADING } from "./constants"

export const showLoading = () => ( { type: SHOW_LOADING } )

export const hideLoading = () => ( { type: HIDE_LOADING } )

export const getLocalWeather = () => ( { type: ACTION_LOCAL_WEATHER } )

export const getCityWeather = (payload: string) => ( { type: ACTION_CITY_WEATHER, payload } )

export const setAirPollution = (payload: StateAirPollution) => ({ type: SET_AIR_POLLITION, payload })

export const setCurrentWeather = (payload: StateCurrentWeather) => ({ type: SET_CURRENT_WEATHER, payload })

export const setOneCall = (payload: StateOneCall) => ({ type: SET_ONE_CALL, payload })

// ERROR //

export const setErrorAirPollution = (payload: any) => ( { type: ERROR_AIR_POLLITION, payload } )

export const setErrorCurrentWeather = (payload: any) => ( { type: ERROR_CURRENT_WEATHER, payload } )

export const setErrorOneCall = (payload: any) => ( { type: ERROR_ONE_CALL, payload } )

// POPUP //

export const showPopupAlert = () => ( { type: POPUP_ALERT_VISIBILITY } )

export const hidePopupAlert = () => ( { type: POPUP_ALERT_HIDDEN } )