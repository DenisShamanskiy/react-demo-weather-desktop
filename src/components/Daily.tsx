import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import LoaderDaily from "components/Loader/LoaderDaily";
import {
  Container,
  List,
  Item,
  Day,
  Icon,
  Temperature,
  ErrorBlock,
} from "../styles/StyledDaily";
import formate from "../utils/formate";

const Daily1280: React.FC = (): React.ReactElement => {
  
  const { loading } = useAppSelector(state => state.loading)
  const data = useAppSelector(state => state.oneCall.daily)
  const error = useAppSelector(state => state.errors.errorOneCall)

  return (
    loading ? 

    <LoaderDaily /> :
    
    <Container>
      <>

      {error ? <ErrorBlock/> : 

      <List>
        {data.map(({ temp: { day }, weather, dt }, index) => { 
          return (
            <Item key={index}>
              <Icon
                src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                alt="Иконка погоды"
              />
              <Day>
                {index === 0
                  ? "Сегодня" :
                  index === 1
                  ? "Завтра"
                  : formate.dayWeek(dt + 1)}
              </Day>
              <Temperature>{Math.round(day)}°</Temperature>
            </Item>
          );
        })}
      </List>}
    </>
    </Container>
  );
}

export default Daily1280