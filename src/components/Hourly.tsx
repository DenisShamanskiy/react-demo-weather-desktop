import React from "react";
import {
  Container,
  List,
  Item,
  Time,
  Icon,
  Temperature,
} from "../styles/StyledHourly";
import ScrollHorizontal from "./ScrollHorizontal";
import formate from "../utils/formate";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import { getIcon } from "utils/functions";

const Hourly: React.FC = () => {

  const data = useAppSelector(state => state.oneCall)

  const hourlyWeather = data.hourly.slice(0, 25)

  return (
    <Container>
      <ScrollHorizontal List={List}>
        {hourlyWeather.map(({ temp, weather, dt }, index) => {
          return (
            <Item key={index}>
              <Time>{index === 0 ? "Сейчас" : formate.time(dt, data.timezone_offset)}</Time>
              <Icon
                src={getIcon(weather[0].icon)}
                alt="Иконка погоды"
              />
              <Temperature>{`${Math.round(temp)}°`}</Temperature>
            </Item>
          );
        })}
      </ScrollHorizontal>
    </Container>
  );
}

export default Hourly
