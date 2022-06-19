import { all, AllEffect, ForkEffect } from "redux-saga/effects"
import { watcherCityWeather } from "./cityWeatherSaga"
import { watcherLocalWeather } from "./localWeatherSaga"

export default function* rootWatcher(): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
    yield all([watcherLocalWeather(), watcherCityWeather()])
}