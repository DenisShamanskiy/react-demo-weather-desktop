import React from "react";
import { useAppSelector } from "redux/hooks/useTypedSelector";
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
import { POPUP_ALERT_VISIBILITY } from "redux/constants";
import { useDispatch } from "react-redux";

const Daily1280: React.FC = (): React.ReactElement => {
  
  const data = useAppSelector(state => state.oneCall.daily)
  const error = useAppSelector(state => state.errors.errorOneCall)

  const dispatch = useDispatch()

  const handleClick = (i: any) => {
    console.log(i);
    dispatch({type: POPUP_ALERT_VISIBILITY})
  
  }

  return (
   <Container>
      <>

      {error ? <ErrorBlock/> : 

      <List>
        {data.map(({ temp: { day }, weather, dt }, index) => { 
          return (
            <Item key={index} onClick={() => handleClick(data[index])}>
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
