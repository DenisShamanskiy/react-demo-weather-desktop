import { ERROR_AIR_POLLITION, ERROR_CURRENT_WEATHER, ERROR_ONE_CALL } from "redux/constants";
import { ActionError, StateError } from "redux/types";

const initialState: StateError = {
    errorAirPollution: "",
    errorCurrentWeather: "",
    errorOneCall: ""
};

export const errorsReducer = (state = initialState, action: ActionError): StateError => {

  switch (action.type) {

    case ERROR_AIR_POLLITION: 
    return {
        ...state, 
        errorAirPollution: action.payload,
    };

    case ERROR_CURRENT_WEATHER: 
    return {
        ...state, 
        errorCurrentWeather: action.payload,
    };
    
    case ERROR_ONE_CALL: 
    return {
        ...state, 
        errorOneCall: action.payload,
    };

    default: return state;

  }
};