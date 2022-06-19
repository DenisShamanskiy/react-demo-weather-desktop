import { put, call, takeLatest } from "redux-saga/effects";
import { hideLoading, showLoading } from "redux/actions";
import { Coordinates } from "redux/types";
import { ACTION_CITY_WEATHER } from "redux/constants";
import { handleAllRequest } from "./localWeatherSaga";
import { getCityCoordinates } from "utils/API";

export function* workerCityWeather(action: any) {
    yield put(showLoading())
    const coordinates: Coordinates = yield call(getCityCoordinates, action.payload);
    yield call(handleAllRequest, coordinates)
    yield put(hideLoading())
}

export function* watcherCityWeather() {
  yield takeLatest(ACTION_CITY_WEATHER, workerCityWeather);
}