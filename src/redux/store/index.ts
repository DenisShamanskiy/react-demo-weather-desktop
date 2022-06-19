import { composeWithDevTools } from "@redux-devtools/extension";
import {compose, createStore, combineReducers, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import { popupAlertReducer } from "./popupAlertReducer";
import { airPollutionReducer } from "./airPollutionReducer";
import { appReducer } from "./appReducer";
import { currentWeatherReducer } from "./currentWeatherReducer";
import { oneCallReducer } from "./oneCallReducer";
import { errorsReducer } from "./errorsReducer";
import rootWatcher from "redux/saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    loading: appReducer,
    popupAlert: popupAlertReducer,
    airPollution: airPollutionReducer,
    currentWeather: currentWeatherReducer,
    oneCall: oneCallReducer,
    errors: errorsReducer
})

export const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), composeWithDevTools()))

sagaMiddleware.run(rootWatcher)

export type RootState = ReturnType<typeof rootReducer>


