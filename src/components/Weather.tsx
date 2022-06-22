import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { formatePressure, formateToUpperCase, formateVisibility, getIcon } from "utils/functions";
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

const Weather: React.FC = () => {

  const data = useAppSelector(state => state.currentWeather)
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

      <Icon src={getIcon(icon)} alt="Иконка погоды"/>

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

      <Hourly/>

    </Container>
  );
}

export default Weather

