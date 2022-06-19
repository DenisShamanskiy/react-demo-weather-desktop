import { HIDE_LOADING, SHOW_LOADING } from "redux/constants"
import { ActionApp, StateAppLoading } from "redux/types"

const innitialState: StateAppLoading = {
    loading: true
}

export const appReducer = (state = innitialState, action: ActionApp): StateAppLoading => {
  
    switch (action.type) {
        
      case SHOW_LOADING:
        return {...state, loading: true}
  
      case HIDE_LOADING:
        return {...state, loading: false}

      default:
        return state
    }
  
  }