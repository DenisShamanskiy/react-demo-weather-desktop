import { SET_AIR_POLLITION } from "redux/constants"
import { StateAirPollution, ActionSetAirPollition } from "redux/types"

const innitialState: StateAirPollution = {
    components: {
      co: 0,
      nh3: 0,
      no: 0,
      no2: 0,
      o3: 0,
      pm2_5: 0,
      pm10: 0,
      so2: 0
    },
    main: {
      aqi: 0
    }
}

export const airPollutionReducer = (state = innitialState, action: ActionSetAirPollition): StateAirPollution => {

    switch (action.type) {

        case SET_AIR_POLLITION:
        return {...state, components: action.payload.components, main: action.payload.main }
  
      default:
        return state
        
    }
}



