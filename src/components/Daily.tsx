import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks/useTypedSelector";
import formate from "../utils/formate";
import {
  Container,
  List,
  Item,
  Day,
  Icon,
  Temperature,
} from "../styles/StyledDaily";
import { POPUP_ALERT_VISIBILITY } from "redux/constants";
import { getIcon } from "utils/functions";

const Daily: React.FC = () => {
  
  const data = useAppSelector(state => state.oneCall.daily)

  const dispatch = useDispatch()

  const handleClick = (i: any) => {
    console.log(i);
    dispatch({type: POPUP_ALERT_VISIBILITY})
  
  }
  
console.log(data);


  return (
   <Container>
      <List>
        {data.map(({ temp: { day }, weather, dt }, index) => { 
          return (
            <Item key={index} onClick={() => handleClick(data[index])}>
              <Icon
                src={getIcon(weather[0].icon)}
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
      </List>
    </Container>
  );
}

export default Daily
