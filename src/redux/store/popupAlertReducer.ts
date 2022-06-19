import { POPUP_ALERT_HIDDEN, POPUP_ALERT_VISIBILITY } from "redux/constants"
import { ActionPopupAlert, StatePopupAlert } from "redux/types"

const innitialState: StatePopupAlert = {
    popupAlert: false
  }

export const popupAlertReducer = (state = innitialState, action: ActionPopupAlert): StatePopupAlert => {
  
    switch (action.type) {
        
      case POPUP_ALERT_VISIBILITY:
        return {...state, popupAlert: true}
  
      case POPUP_ALERT_HIDDEN:
        return {...state, popupAlert: false}
  
      default:
        return state
    }
  
  }