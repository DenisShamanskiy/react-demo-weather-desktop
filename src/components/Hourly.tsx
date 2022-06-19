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
import { StateOneCall } from "redux/types";
import LoaderHourly from "components/Loader/LoaderHourly";

// interface IHourlyProps {
//   hourlyWeather: any[],
//   timeZone: any
// }

const Hourly1280: React.FC = (): React.ReactElement => {
  // console.log(hourlyWeather);

  const { loading } = useAppSelector(state => state.loading)
  const data: StateOneCall = useAppSelector(state => state.oneCall)

  const hourlyWeather = data.hourly.slice(0, 25)

  return (
    loading ? 

    <LoaderHourly /> :
    
    <Container>
      <ScrollHorizontal List={List}>
        {hourlyWeather.map(({ temp, weather, dt }, index) => {
          return (
            <Item key={index}>
              <Time>{index === 0 ? "Сейчас" : formate.time(dt, data.timezone_offset)}</Time>
              <Icon
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
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

export default Hourly1280
