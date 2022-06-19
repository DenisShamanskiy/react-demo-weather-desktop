import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { StateCurrentWeather } from "redux/types";
import { formatePressure, formateToUpperCase, formateVisibility } from "utils/functions";
import {
  Container,
  City,
  Temperature,
  Description,
  Detail,
  DetailValue,
  DetailTitle,
  Icon,
  Wrapper
} from "../styles/StyledWeather";
import Hourly from "./Hourly";
import ClockCity from "./ClockCity";

const Weather: React.FC = (): React.ReactElement => {

  const data: StateCurrentWeather = useAppSelector(state => state.currentWeather)
  const { loading } = useAppSelector(state => state.loading)
  const timezone = useAppSelector(state => state.oneCall.timezone)
  
  const {
    name,
    visibility,
    main: { temp, humidity, pressure },
    weather: [ { description, icon } ],
  } = data;

  return (
    <Container>
      
      {timezone && timezone !== "Europe/Moscow" && <ClockCity/>}

      <City>{name}</City>

      {!loading && <Icon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="Иконка погоды"/>}

      <Temperature>{Math.round(temp)}°</Temperature>
      
      <Description>{formateToUpperCase(description)}</Description>

      <Wrapper>
      <Detail>
        <DetailTitle>Влажность</DetailTitle>
        <DetailValue>{humidity}%</DetailValue>
      </Detail>
      <Detail>
        <DetailTitle>Давление</DetailTitle>
        <DetailValue>{formatePressure(pressure)}</DetailValue>
      </Detail>
      <Detail>
        <DetailTitle>Видимость</DetailTitle>
        <DetailValue>{formateVisibility(visibility)}</DetailValue>
      </Detail>
      </Wrapper>

      <Hourly></Hourly>

    </Container>
  );
}

export default Weather

