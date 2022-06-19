import { SET_ONE_CALL } from "redux/constants"
import { StateOneCall, ActionOneCall } from "redux/types"

const innitialState: StateOneCall = {
  alerts: [],
  current: {
    uvi: 0
  },
  daily: [],
  hourly: [],
  timezone_offset: 0,
  timezone: ""
}

export const oneCallReducer = (state = innitialState, action: ActionOneCall): StateOneCall => {
    
    switch (action.type) {

        case SET_ONE_CALL:
        return {
          ...state,
          alerts: action.payload.alerts,
          current: action.payload.current,
          daily: action.payload.daily,
          hourly: action.payload.hourly,
          timezone_offset: action.payload.timezone_offset,
          timezone: action.payload.timezone}
  
      default:
        return state
    }
  
}
